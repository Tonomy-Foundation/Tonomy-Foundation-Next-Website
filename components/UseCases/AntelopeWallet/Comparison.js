import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: '"Open Sans", sans-serif',
    },
});

const ComparisonTable = () => {

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className="comparison-table-container">
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
                                <p>In-App Web Wallet</p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Account Creation & Login **</TableCell>
                            <TableCell>1 min 20 seconds</TableCell>
                            <TableCell>2 min 30 seconds</TableCell>
                            <TableCell>1 min 10 seconds</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Wallet Transaction Sign Flow **</TableCell>
                            <TableCell>15 seconds</TableCell>
                            <TableCell>15 seconds</TableCell>
                            <TableCell><i className="bx bx-x"></i></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>In-App Transaction Sign Flow</TableCell>
                            <TableCell>Instant</TableCell>
                            <TableCell><i className="bx bx-x"></i></TableCell>
                            <TableCell>Instant</TableCell>
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
                            <TableCell ><i className="bx bx-x"></i><div>($1)</div></TableCell>
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
                            <TableCell>Single Sign-On</TableCell>
                            <TableCell><i className="bx bx-check"></i></TableCell>
                            <TableCell ><i className="bx bx-check"></i></TableCell>
                            <TableCell ><i className="bx bx-x"></i></TableCell>
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
                <p>**Approximate time with no user errors.</p>
            </TableContainer >
        </ThemeProvider>
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

                </div>
            </section>
        );
    }
}

export default Comparison;