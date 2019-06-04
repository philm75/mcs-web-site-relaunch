import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = props => {
    const { title, text} = props;
    return (
        <Fragment>
            <div className="col-sm-6 portfolio-item">
                <div className="card h-100">
                    <div className="card-body">
                        <h4 className="card-title">
                            {title}
                        </h4>
                        <p className="card-text">
                            {text}                              
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default PortfolioItem;