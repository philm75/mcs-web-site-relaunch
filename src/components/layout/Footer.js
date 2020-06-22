import React from 'react';
import PropTypes from 'prop-types';

import { CompanyDetails } from '../common/CompanyDetails';
import FooterText from './FooterText';

const Footer = props => {
    const { companyName, registration } = props;

    return (
        <footer className="py-5">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; {companyName}</p>
                <FooterText text={registration} />
            </div>
        </footer>
    );
}
    
Footer.defaultProps = {
    companyName: CompanyDetails.companyName,
    registration: CompanyDetails.registration
};
      
Footer.propTypes = {
    companyName: PropTypes.string.isRequired,
    registration: PropTypes.string.isRequired
};
      
export default Footer;