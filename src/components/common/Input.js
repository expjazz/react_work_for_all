import React from 'react';

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
