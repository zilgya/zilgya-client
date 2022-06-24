import React, { Component } from "react";
import { Pencil } from "react-bootstrap-icons";
import "./Profile.css";

// import Profpict from "../../assets/img/profpict.png";
import Logout from "../../assets/img/logout.png";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { connect } from "react-redux";

import {
  getUserInfo,
  logOutFromServer,
  updateUser,
} from "../../redux/actionCreator/user";

import { logoutAction } from "../../redux/actionCreator/auth";

const mapStateToProps = (state) => {
  return {
    token: state.auth.userInfo.token,
    role: Number(state.auth.userInfo.roles_id),
    userData: state.user.userResult,
    userUpdate: state.user.updateResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (data) => {
      dispatch(getUserInfo(data));
    },
    updateUser: (data) => {
      dispatch(updateUser(data));
    },
    logOutPersist: () => {
      dispatch(logoutAction());
    },
    logOutServer: (data) => {
      dispatch(logOutFromServer(data));
    },
  };
};

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
      username: null,
      email: null,
      gender: null,
      address: null,
      description: null,
      photo: null,
      store_name: null,
    };
  }
  handleImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      this.setState({
        photo: e.target.files[0],
      });
    }
  };

  handleUpdateUser = () => {
    const {
      username,
      gender,
      email,
      address,
      description,
      photo,
      store_name,
      isEdit,
    } = this.state;
    this.props.updateUser({
      token: this.props.token,
      username: username,
      email: email,
      gender: gender,
      address: address,
      description: description,
      photo: photo,
      store_name: store_name,
    });
    this.setState({
      isEdit: !isEdit,
    });
  };

  handleGetuserinfo = () => {
    const { token } = this.props;
    this.props.getUser({ token });
    this.setState({
      username: this.props.userData.username,
      email: this.props.userData.email,
      gender: this.props.userData.gender,
      address: this.props.userData.address,
      description: this.props.userData.description,
      store_name: this.props.userData.store_name,
    });
  };
  handleLogout = async () => {
    try {
      const token = await this.props.token;
      if (token) {
        this.props.logOutServer({ token: token });
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.props.logOutPersist();
    }
  };

  componentDidMount() {
    this.handleGetuserinfo();
  }
  render() {
    console.log(this.state);
    const { role, userData } = this.props;
    const { isEdit } = this.state;

    // role 1 = cust
    // role 2 seller
    return (
      <>
        <Navbar />
        <main className="login-global-container">
          <div className="login-header">
            <div className="login-header-title">Profile</div>
            <div className="login-header-info">
              See your notifications for the latest updates
            </div>
          </div>
          {role === 2 ? (
            <div className="profile-seller-navbar">
              <div className="profile-seller-navbar-active">Profile</div>
              <div className="profile-seller-navbar-inactive">My Product</div>
              <div className="profile-seller-navbar-inactive">
                Selling Product
              </div>
              <div className="profile-seller-navbar-inactive">My Order</div>
            </div>
          ) : (
            <></>
          )}
          <div className="profile-main-container">
            <div className="non-editable-wrapper">
              <div className="profile-profpic-name-container">
                <div className="profil-picture-container">
                  {/* <div className="profile-picture-edit-background"></div> */}
                  <input
                    className="d-none"
                    type="file"
                    id="upload-button"
                    accept="image/*"
                    onChange={this.handleImage}
                  />
                  {!isEdit ? (
                    <></>
                  ) : (
                    <label
                      className="profile-picture-edit"
                      htmlFor="upload-button"
                    >
                      Edit
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({ isEdit: !isEdit });
                          console.log(isEdit);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <Pencil className="profile-pencil-icon" />
                      </div>
                    </label>
                  )}
                  {this.state.photo ? (
                    <img
                      src={URL.createObjectURL(this.state.photo)}
                      alt="preview"
                      className="profile-picture"
                    />
                  ) : (
                    <img
                      src={userData.photo}
                      alt="profpict"
                      className="profile-picture"
                    />
                  )}
                </div>
                <div className="profle-name-container">
                  {!isEdit ? (
                    <div className="profile-name d-flex">
                      {userData.username}{" "}
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({ isEdit: !isEdit });
                          console.log(isEdit);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <Pencil className="profile-pencil-icon" />
                      </div>
                    </div>
                  ) : (
                    <div className="profile-name-wrapper d-flex">
                      <input
                        className="profile-input"
                        type="text"
                        name="username"
                        id="username"
                        defaultValue={userData.username}
                        onChange={(e) => {
                          this.setState({ username: e.target.value });
                        }}
                      />
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({ isEdit: !isEdit });
                          console.log(isEdit);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <Pencil className="profile-pencil-icon" />
                      </div>
                    </div>
                  )}

                  <div className="profile-role">
                    as {role === 2 ? "Seller" : "Customer"}
                  </div>
                </div>
              </div>
              <div className="profile-input-all-container">
                <div className="profile-input-container">
                  <div className="profile-input-label">
                    <label htmlFor="gender" className="profile-label">
                      Gender{" "}
                      {!isEdit ? (
                        <></>
                      ) : (
                        <Pencil className="profile-pencil-icon" />
                      )}
                    </label>
                    <input
                      type="text"
                      name="gender"
                      id="gender"
                      className="profile-input"
                      defaultValue={userData.gender}
                      disabled={!isEdit ? true : false}
                      onChange={(e) => {
                        this.setState({ gender: e.target.value });
                      }}
                    />
                  </div>
                  {!isEdit ? (
                    <></>
                  ) : (
                    <div className="profile-input-edit">
                      EDIT <Pencil className="profile-pencil-icon" />
                    </div>
                  )}
                </div>
                <div className="profile-input-container">
                  <div className="profile-input-label">
                    <label htmlFor="email" className="profile-label">
                      Your Email{" "}
                      {!isEdit ? (
                        <></>
                      ) : (
                        <Pencil className="profile-pencil-icon" />
                      )}
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      defaultValue={userData.email}
                      className="profile-input"
                      placeholder="Input email"
                      disabled={!isEdit ? true : false}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  {!isEdit ? (
                    <></>
                  ) : (
                    <div className="profile-input-edit">
                      EDIT <Pencil className="profile-pencil-icon" />
                    </div>
                  )}
                </div>
                <div className="profile-input-container">
                  <div className="profile-input-label">
                    <label htmlFor="address" className="profile-label">
                      Address{" "}
                      {!isEdit ? (
                        <></>
                      ) : (
                        <Pencil className="profile-pencil-icon" />
                      )}
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      defaultValue={userData.address}
                      className="profile-input"
                      placeholder="Input address"
                      disabled={!isEdit ? true : false}
                      onChange={(e) => {
                        this.setState({ address: e.target.value });
                      }}
                    />
                  </div>
                  {!isEdit ? (
                    <></>
                  ) : (
                    <div className="profile-input-edit">
                      EDIT <Pencil className="profile-pencil-icon" />
                    </div>
                  )}
                </div>
                {role === 2 ? (
                  <>
                    <div className="profile-input-container">
                      <div className="profile-input-label">
                        <label htmlFor="store-name" className="profile-label">
                          Store Name{" "}
                          {!isEdit ? (
                            <></>
                          ) : (
                            <Pencil className="profile-pencil-icon" />
                          )}
                        </label>
                        <input
                          type="text"
                          name="store-name"
                          id="store-name"
                          defaultValue={userData.store_name}
                          className="profile-input"
                          placeholder="Input store name"
                          disabled={!isEdit ? true : false}
                          onChange={(e) => {
                            this.setState({ store_name: e.target.value });
                          }}
                        />
                      </div>
                      {!isEdit ? (
                        <></>
                      ) : (
                        <div className="profile-input-edit">
                          EDIT <Pencil className="profile-pencil-icon" />
                        </div>
                      )}
                    </div>
                    <div className="profile-input-container">
                      <div className="profile-input-label">
                        <label htmlFor="store-desc" className="profile-label">
                          Store Description{" "}
                          {!isEdit ? (
                            <></>
                          ) : (
                            <Pencil className="profile-pencil-icon" />
                          )}
                        </label>
                        <input
                          type="text"
                          name="store-desc"
                          id="store-desc"
                          defaultValue={userData.description}
                          className="profile-input"
                          placeholder="Input store description"
                          disabled={!isEdit ? true : false}
                          onChange={(e) => {
                            this.setState({ description: e.target.value });
                          }}
                        />
                      </div>
                      {!isEdit ? (
                        <></>
                      ) : (
                        <div className="profile-input-edit">
                          EDIT <Pencil className="profile-pencil-icon" />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div
              className="profile-buttonn-wrapper d-flex"
              style={{ justifyContent: "space-between" }}
            >
              <div
                className="profile-logout-button"
                onClick={this.handleLogout}
              >
                <img
                  src={Logout}
                  alt="logout"
                  className="profile-logout-pict"
                />
                Logout
              </div>
              {!isEdit ? (
                <></>
              ) : (
                <div
                  className="profile-save-button"
                  onClick={this.handleUpdateUser}
                >
                  Save
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
