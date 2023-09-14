import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const useStyles = {
    centered: {
        textAlign: 'center',
    },
    primary: {
        textAlign: 'center',
        backgroundColor: 'rgba(29, 211, 248, 0.1)',
    },
    icons: {
        color: 'red',
    }
};

const ComparisonTable = () => {

    return (
        <TableContainer component={Paper}>
            <Table className="comparison-table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>
                            <h4>Tonomy ID</h4>
                            <p>White Labelled Wallet</p>
                        </TableCell>
                        <TableCell >
                            <h4>Anchor</h4>
                            <p>Multi-Chain Wallet</p></TableCell>
                        <TableCell >
                            <h4>Upland</h4>
                            <p>In-App Wallet</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Account Creation & Login **</TableCell>
                        <TableCell></TableCell>
                        <TableCell className="comparison-table"></TableCell>
                        <TableCell >70 seconds</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Transaction Sign Flow **</TableCell>
                        <TableCell>Instant (in-app)</TableCell>
                        <TableCell ></TableCell>
                        <TableCell >Instant (in-app)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div>Users Control Keys</div><div>(non-custodial)</div></TableCell>
                        <TableCell><i className="bx bx-check"></i></TableCell>
                        <TableCell ><i className="bx bx-check"></i></TableCell>
                        <TableCell ><i className="bx bx-x"></i></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Wallets</TableCell>
                        <TableCell>Android, iOS</TableCell>
                        <TableCell >Android, iOS, Desktop</TableCell>
                        <TableCell >Web wallet</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div>Free Account Creation</div><div>(User doesn't pay)</div></TableCell>
                        <TableCell><i className="bx bx-check"></i></TableCell>
                        <TableCell ><i className="bx bx-x"></i></TableCell>
                        <TableCell ><i className="bx bx-check"></i></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div>Fully Managed Resources</div><div>(RAM, CPU, NET)</div></TableCell>
                        <TableCell><i className="bx bx-check"></i></TableCell>
                        <TableCell ><i className="bx bx-x"></i></TableCell>
                        <TableCell ><i className="bx bx-check"></i></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Recovery</TableCell>
                        <TableCell><i className="bx bx-check"></i><div>Social, hardware, email (coming soon)</div></TableCell>
                        <TableCell ><i className="bx bx-check"></i><div>Private Key (certificate) export</div></TableCell>
                        <TableCell ><i className="bx bx-check"></i><div>Email</div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Self-sovereign Identity</TableCell>
                        <TableCell><i className="bx bx-check"></i></TableCell>
                        <TableCell ><i className="bx bx-x"></i></TableCell>
                        <TableCell ><i className="bx bx-x"></i></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Private Data Storage & Sharing</TableCell>
                        <TableCell><i className="bx bx-check"></i></TableCell>
                        <TableCell ><i className="bx bx-x"></i></TableCell>
                        <TableCell ><i className="bx bx-x"></i></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
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
                    </div>

                    <ComparisonTable />

                    <div className="section-footer">
                        <p>**Flow timed with no user errors.</p>
                    </div>

                </div>
            </section>
        );
    }
}

export default Comparison;