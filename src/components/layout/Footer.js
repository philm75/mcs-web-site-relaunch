import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { CompanyDetails } from '../common/CompanyDetails';

const Footer = props => {
    const { companyName, registration, registeredOffice, vatNumber } = props;

    return (
        <Fragment>
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; {companyName}</p>
                    <p className="m-0 text-center text-white">{registration}</p>
                    <p className="m-0 text-center text-white">{registeredOffice}</p>
                    <p className="m-0 text-center text-white">{vatNumber}</p>
                </div>
            </footer>
        </Fragment>
    );
}
    
Footer.defaultProps = {
    companyName: CompanyDetails.companyName,
    registration: CompanyDetails.registration,
    registeredOffice: CompanyDetails.registeredOffice,
    vatNumber: CompanyDetails.vatNumber
};
      
Footer.propTypes = {
    companyName: PropTypes.string.isRequired,
    registration: PropTypes.string.isRequired,
    registeredOffice: PropTypes.string.isRequired,
    vatNumber: PropTypes.string.isRequired
};
      
export default Footer;