import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyItem = props => {
    const { title, text} = props;
    return (
        <div className="col-sm-12 portfolio-item">
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
    );
}

CaseStudyItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default CaseStudyItem;