import React from 'react';
import PropTypes from 'prop-types';

const BusinessHeader = props => {

    const { message } = props;
   
    return (
        <header className="business-header">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h1 className="text-center text-white mt-4 tag-line">
                            {message}
                        </h1>
                    </div>
                </div>
            </div>
        </header>   
    );
}
    
BusinessHeader.defaultProps = {
    message: 'We build bespoke software for your business enterprise.'
};
      
BusinessHeader.propTypes = {
    message: PropTypes.string.isRequired
};
      
export default BusinessHeader;