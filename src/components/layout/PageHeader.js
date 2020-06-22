import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => {
    const { name } = props;
    return (
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    );    
};

PageHeader.propTypes = {
    name: PropTypes.string.isRequired
};
      
export default PageHeader;