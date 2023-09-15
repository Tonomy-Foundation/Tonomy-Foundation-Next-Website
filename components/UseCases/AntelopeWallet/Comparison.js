import React, { Component } from 'react';
import { Table, tbody, td, TableContainer, thead, tr, Paper, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: '"Open Sans", sans-serif',
    },
});

const ComparisonTable2 = () => {
    return (
        <table className="table comparison-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    )
}

const ComparisonTable = () => {

    return (
        <div className="comparison-table-header">
            <table className="table comparison-table">
                <thead>
                    <tr>
                        <td></td>
                        <td>
                            <h4>Tonomy ID</h4>
                            <p>White Labelled Wallet</p>
                        </td>
                        <td >
                            <h4>Anchor</h4>
                            <p>Multi-Chain Wallet</p></td>
                        <td >
                            <h4>Upland</h4>
                            <p>In-App Web Wallet</p></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Account Creation & Login **</td>
                        <td>1 min 20 seconds</td>
                        <td>2 min 30 seconds</td>
                        <td>1 min 10 seconds</td>
                    </tr>
                    <tr>
                        <td>Wallet Transaction Sign Flow **</td>
                        <td>15 seconds</td>
                        <td>15 seconds</td>
                        <td><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td>In-App Transaction Sign Flow</td>
                        <td>Instant</td>
                        <td><i className="bx bx-x"></i></td>
                        <td>Instant</td>
                    </tr>
                    <tr>
                        <td><div>Users Control Keys</div><div>(non-custodial)</div></td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td>Wallets</td>
                        <td>Android, iOS</td>
                        <td >Android, iOS, Desktop</td>
                        <td >Web wallet</td>
                    </tr>
                    <tr>
                        <td><div>Free Account Creation</div><div>(User doesn't pay)</div></td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i><div>($1)</div></td>
                        <td ><i className="bx bx-check"></i></td>
                    </tr>
                    <tr>
                        <td><div>Fully Managed Resources</div><div>(RAM, CPU, NET)</div></td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                        <td ><i className="bx bx-check"></i></td>
                    </tr>
                    <tr>
                        <td>Recovery</td>
                        <td><i className="bx bx-check"></i><div>Social, hardware, email (coming soon)</div></td>
                        <td ><i className="bx bx-check"></i><div>Private key (certificate) export</div></td>
                        <td ><i className="bx bx-check"></i><div>Email</div></td>
                    </tr>
                    <tr>
                        <td>Single Sign-On</td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td>Self-sovereign Identity</td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td>Private Data Storage & Sharing</td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                </tbody>
            </table>
            <p>**Approximate time with no user errors.</p>
        </div>
    );
};

class Comparison extends Component {

    render() {
        return (
            <section className="comparison-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Comparison</span>
                        <h2>Tonomy ID Compared to Other Wallets</h2>
                        <p>Learn about the different ways wallets can be implemented and what the differences are. Each wallet below has different strengths and weaknesses.</p>
                    </div>

                    <ComparisonTable />
                    <ComparisonTable2 />

                </div>
            </section>
        );
    }
}

export default Comparison;