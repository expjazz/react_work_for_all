import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    label, id, onChange, value, labelValue, errors,
  } = props;
  return (
    <div className="mb-4">
      <label htmlFor={label}>{labelValue}</label>
      <input type="text" id={id} onChange={onChange} value={value} />
      {errors ? (
        <div>
          {errors}
        </div>
      ) : ''}
    </div>
  );
};

export default Input;
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  labelValues: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};
