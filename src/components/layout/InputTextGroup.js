import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  required,
  type,
  onChange,
  error
}) => {
  return (
    <Fragment>
      <label htmlFor={name}>{required === true ? '* ' : ''}{label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-sm', {'is-invalid': error})}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </Fragment>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool.isRequired
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;