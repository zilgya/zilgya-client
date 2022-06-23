import React, { Component } from "react";
import { Pencil } from "react-bootstrap-icons";
import "./Profile.css";

// import Profpict from "../../assets/img/profpict.png";
import Logout from "../../assets/img/logout.png";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { connect } from "react-redux";
import { getUserInfo, updateUser } from "../../redux/actionCreator/user";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      role: "cust",
      isEdit: false,
    };
  }
  componentDidMount() {
    const { token } = this.props;
    this.props.getUser({ token });
  }
  render() {
    console.log(this.props.role);
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
                  <div className="profile-picture-edit">
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
                  </div>
                  <img
                    src={userData.photo}
                    alt="profpict"
                    className="profile-picture"
                  />
                </div>
                <div className="profle-name-container">
                  {!isEdit ? (
                    <div className="profile-name d-flex">
                      {userData.username}{" "}
                      <div
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isEdit: !isEdit});
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
                  {/* <input
                    className="profile-input"
                    type="text"
                    name="username"
                    id="username"
                    defaultValue={userData.username}
                  />
                  <div className="profile-name">
                    {userData.username}{" "}
                    <Pencil className="profile-pencil-icon" />
                  </div> */}
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

            <div className="profile-logout-button">
              <img src={Logout} alt="logout" className="profile-logout-pict" />
              Logout
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userInfo.token,
    role: Number(state.auth.userInfo.roles_id),
    userData: state.user.userResult,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
