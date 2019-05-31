import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BusinessHeader = props => {

    const { message } = props;

    return (
        <Fragment>
            <header className="business-header">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <h1 className="display-3 text-center text-white mt-4 tag-line">{message}</h1>
                </div>
                </div>
            </div>
            </header>   
        </Fragment>
    );
}
    
BusinessHeader.defaultProps = {
    message: 'We build custom software for your business enterprise.'
};
      
BusinessHeader.propTypes = {
    message: PropTypes.string.isRequired
};
      
export default BusinessHeader;