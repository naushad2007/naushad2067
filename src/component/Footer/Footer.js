import React, { Component } from 'react'; 
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer-links">
                        <br></br>
                        <a href="https://www.firstnaukri.com/freshersmnj/mynaukri.php/Show/aboutUs"> About Us </a><nobr>|</nobr>
                        <a href="https://www.firstnaukri.com/freshersmnj/mynaukri.php/Show/contactUs"> Contact Us </a><nobr>|</nobr>
                        <a href="https://www.firstnaukri.com/freshersmnj/mynaukri.php/Show/termsAndConditions"> Terms and Conditions </a><nobr>|</nobr>
                        <a href="https://www.firstnaukri.com/freshersmnj/mynaukri.php/Show/privacyPolicy"> Privacy Policy </a><nobr>|</nobr>
                        <a href="https://www.firstnaukri.com/freshersmnj/mynaukri.php/Show/grievances"> Grievances </a>
                        <p>All rights reserved © 2019 Info Edge (India) Ltd.</p>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;