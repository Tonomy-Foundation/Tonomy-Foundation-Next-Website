import React, { Component } from 'react';
import Link from 'next/link';

class Team extends Component {
    render() {
        return (
            <section className="team-area pb-70">
                <div className="container">
                    <div className="section-title home-four-section-title">
                        <span>Team</span>
                        <h2>Meet Our Expert Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team1.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Karen Peter</h3>
                                    <span>CEO</span>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team2.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Kene Alex Piter</h3>
                                    <span>Executive</span>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team3.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Alisa Maria</h3>
                                    <span>Developer</span>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team4.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Peter Jack</h3>
                                    <span>UI/UX Designer</span>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;