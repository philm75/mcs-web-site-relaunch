import React from 'react';

const FooterText = props => {
    const { text } = props;

    return (
        <p className="m-0 text-center">{text}</p>
    );
}

export default FooterText;