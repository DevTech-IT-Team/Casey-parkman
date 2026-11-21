import React from 'react';

export default function Footer({go}) {
    return (
        <footer className="footer">
            <div className="footer-grid">

                <div>
                    <h3>PFIN SERVICES</h3>
                    <p>Performance & Firm Integration</p>
                    <p>© 2026 PFIN Services. All Rights Reserved.</p>

                    <button
                        className="footer-link"
                        onClick={() => go('ethos')}
                    >
                        Our Ethos →
                    </button>
                </div>

                <div>
                    <h4>Business Disclosure</h4>

                    <p>
                        PFIN Services (Performance & Firm 
                        Integration) is a for-profit 
                        B2B management consulting 
                        firm.Entity and DBA claims 
                        should be confirmed against
                        official records before 
                        publication.
                    </p>
                </div>

                <div>
                    <h4>Contact</h4>
                    <p>info@pfin-foundation.com</p>
                    <p>Phone Number:978-555-0000</p>
                </div>
                <div>
                    <h4>Legal Services</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>

            </div>
        </footer>
    );
}