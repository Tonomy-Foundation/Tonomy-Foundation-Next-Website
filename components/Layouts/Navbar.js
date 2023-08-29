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
                                Tonomy ID
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
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Industries <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/finance-and-banking" activeClassName="active">
                                                    <a className="nav-link">Finance and Banking</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/ecommerce" activeClassName="active">
                                                    <a className="nav-link">eCommerce</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/web3-and-ssi" activeClassName="active">
                                                    <a className="nav-link">Web3 and SSI</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gaming" activeClassName="active">
                                                    <a className="nav-link">Gaming</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/healthcare" activeClassName="active">
                                                    <a className="nav-link">Healthcare</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/supply-chain" activeClassName="active">
                                                    <a className="nav-link">Supply Chain</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/telecommunications" activeClassName="active">
                                                    <a className="nav-link">Telecommunications</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="https://docs.tonomy.foundation">
                                            <a target="_blank" className="nav-link">Developer Docs</a>
                                        </Link>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about-us">
                                            <a className="nav-link">About us</a>
                                        </Link>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="/pricing">
                                            <a className="nav-link">Pricing</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>


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