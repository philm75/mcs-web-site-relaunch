import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => {
    const { name } = props;
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="mt-4 text-center">{name}</h2>
                </div>
            </div>
        </Fragment>
    );    
};

PageHeader.propTypes = {
    name: PropTypes.string.isRequired
};
      
export default PageHeader;