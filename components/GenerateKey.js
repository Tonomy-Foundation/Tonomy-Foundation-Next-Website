import React from "react";
import { KeyType, PrivateKey } from "@wharfkit/antelope"

export default function GenerateKey() {
    const privateKey = PrivateKey.generate(KeyType.K1);
    const publicKey = privateKey.toPublic();

    return (
        <section className="team-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="section-title">
                    <h2>Refresh Page to Generate a new Private Key</h2>
                </div>
                <div className="section-title">
                    <p>Private Key: {privateKey.toString()}</p>
                    <p>Public Key: {publicKey.toString()}</p>
                </div>
            </div>
        </section>
    );
}