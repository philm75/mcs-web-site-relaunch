import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const HeaderLink = props => {
    const { currentPath, name, link } = props;
    return (
        <Fragment>
            <li className={classnames('nav-item', {'active' : currentPath === link})}>
                <Link to={link} className="nav-link">
                    {name}
                    <span className="sr-only">(current)</span>
                </Link>
            </li>
        </Fragment>
    );    
};

HeaderLink.propTypes = {
    currentPath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired
};
      
export default HeaderLink;