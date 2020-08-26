import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    label, id, onChange, value, labelValue, errors,
  } = props;
  return (
    <div className="mb-4">
      <label htmlFor={label}>
        {labelValue}
        <input type="text" id={id} onChange={onChange} value={value} />
        {errors ? (
          <div>
            {errors}
          </div>
        ) : ''}
      </label>
    </div>
  );
};

export default Input;
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  labelValue: PropTypes.string,
  errors: PropTypes.string,
};

Input.defaultProps = {
  labelValue: '',
  errors: null,
};
