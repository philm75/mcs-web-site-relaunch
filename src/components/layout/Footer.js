import React from 'react';
import PropTypes from 'prop-types';

import { CompanyDetails } from '../common/CompanyDetails';
import FooterText from './FooterText';

const Footer = props => {
    const { companyName, registration } = props;

    return (
      <footer>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="copyright text-center">
                  <p>
                    © Copyright <strong>{companyName}</strong>. 
                  </p>
                  <FooterText text={registration} />
                </div>
              </div>
            </div>
          </div>
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