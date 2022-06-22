import React, { Component } from 'react';
import Navbar from '../../component/Navbar/index'
import Footer from '../../component/Footer/index'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main>
                    <section className='hm--wrapper'>

                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;