import React, { Component } from 'react';
import Navbar from './../components/Layouts/Navbar';
import Footer from './../components/Layouts/Footer';
import IdBanner from './../components/Common/IdBanner';

class Tonomyid extends Component {
    render() {
        return (
            <>
                <Navbar />

                <IdBanner/>
                
<span>Tonomy ID is currently in beta testing. Get a head start for you business and integrate with Tonomy ID.</span>



                <Footer />
            </>
        );
    }
}
export default Tonomyid;