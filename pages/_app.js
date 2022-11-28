import '../styles/bootstrap.min.css';
import 'animate.css'
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import '../styles/style.css';
import '../styles/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <meta 
                        name="viewport" 
                        content="width=device-width, initial-scale=1" 
                    />
                    <title>Jumpx - React Next.js AI & IT Startup Template</title>
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </>
        );
    }
}