import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
class Navbar extends Component {
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
                <div id="navbar" className="navbar-area fixed-top">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link href="/">
                                <a>
                                    <img src="/images/logo.webp" width="55" height="55 " alt="logo" />
                                </a>
                            </Link>
                            <h5>
                                Tonomy Foundation
                            </h5>
                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">
                                                Home
                                            </a>
                                        </Link>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="https://tonomy.io" activeClassName="active">
                                            <div className="pangea-navbar">
                                                <img src="/images/tonomy-logo256.png" width="20" height="20" alt="Tonomy logo" />
                                                <a className="nav-link pangea-navbar-link" target="_blank">Tonomy</a>
                                            </div>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link href="/about-us">
                                            <a className="nav-link">About us</a>
                                        </Link>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" onClick={e => e.preventDefault()}>
                                            Solutions <i className='bx bx-chevron-down'></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                        <li className="nav-item">
                                                <Link href="https://tonomy.io" activeClassName="active">
                                                    <a className="nav-link" target="_blank">Tonomy Network</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="https://tonomy.io" activeClassName="active">
                                                    <a className="nav-link" target="_blank">$TONO Token</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="https://tonomy.io" activeClassName="active">
                                                    <a className="nav-link" target="_blank">Tonomy ID</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="https://theblockstalk.medium.com/civic-participation-tool-upgrade-to-openstad-e7aed01c5271" activeClassName="active">
                                                    <a className="nav-link" target="_blank">Tonomy Participate</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="https://github.com/w3c-ccg/verifiable-conditions" activeClassName="active">
                                                    <a className="nav-link" target="_blank">W3C Conditional Proofs</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="https://github.com/Tonomy-Foundation/antelope-did-spec" activeClassName="active">
                                                    <a className="nav-link" target="_blank">Antelope DID</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/telos-uk" activeClassName="active">
                                                    <a className="nav-link">Telos UK</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="https://blog.tonomy.foundation/tonomy-foundation-brings-delegated-multi-signatures-to-decentralized-identity-foundations-did-jwt-51c726b89f0e" activeClassName="active">
                                                    <a className="nav-link" target="_blank">DIF SSI Libraries</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="https://github.com/Tonomy-Foundation/Antelope-SSI-Toolkit/blob/master/README.md" activeClassName="active">
                                                    <a className="nav-link" target="_blank">Antelope SSI Toolkit</a>
                                                </Link>
                                            </li>
                                        </ul>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;