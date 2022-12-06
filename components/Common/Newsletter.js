import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="newsletter-wrap">
                                <h2>Sign Up To The Free Newsletter</h2>

                                <form className="newsletter-form">
                                    <input type="email" className="form-control" placeholder="Your Email" name="email" required />
                                    <button className="default-btn" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="newsletter-img">
                                <img src="/images/newsletter-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="newsletter-text">
                                <h2>Why and how could you help the Tonomy Foundation?</h2>
                                <p>Tech partners who we are working with could help us out by helping us build and maybe giving their opinions about certain things we want a second opinion on. Tech Integrators could help us by  using and testing our tech so that we may eliminate possible flaws.Investors who share our dream to make the world a better place. throughout transparency, democracy, and partnership (helping each other).</p>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="newsletter-shape">
                    <img src="/images/shape/newsletter-shape-one.png" alt="Image" />
                    <img src="/images/shape/newsletter-shape-one.png" alt="Image" />
                    <img src="/images/shape/newsletter-shape-two.png" alt="Image" />
                </div>
            </div>
        );
    }
}

export default Newsletter;