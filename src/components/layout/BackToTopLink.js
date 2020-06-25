import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopLink = () => {

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a id="back-to-top" className="btn btn-light btn-lg back-to-top" role="button" onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon icon={faChevronUp} />
        </a>
    );
}

export default BackToTopLink;