import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextAreaInputGroup = ({
  label,
  name,
  rows,
  value,
  placeholder,
  required,
  onChange,
  error
}) => {
  return (
    <Fragment>
      <label htmlFor={name}>{required === true ? '* ' : ''}{label}</label>
      <textarea required={required} value={value} placeholder={placeholder} name={name} rows={rows} className={classnames('form-control form-control-sm', {'is-invalid': error})} onChange={onChange}>
      </textarea>
      {error && <div className="invalid-feedback">{error}</div>}
    </Fragment>
  );
};

TextAreaInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TextAreaInputGroup;