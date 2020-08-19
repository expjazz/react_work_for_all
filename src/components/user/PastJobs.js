import React, { useState } from 'react';
import Input from '../common/Input';

const PastJobs = React.forwardRef((props, ref) => {
  const { inputs } = props;
  const [inputValues, setInputValues] = useState({ ...inputs });
  const onChange = e => {
    if (e.target.name === 'start') {
      const newIn = { ...inputValues, start: e.target.value };
      setInputValues(newIn);
    } else if (e.target.name === 'end') {
      const newIn = { ...inputValues, end: e.target.value };
      setInputValues(newIn);
    } else {
      const newIn = { ...inputValues, name: e.target.value };
      setInputValues(newIn);
    }
  };
  const labels = ['start', 'end', ' name'];

  return (
    <div ref={ref}>
      {labels.map(label => <Input key={label} label={label} id={label} onChange={onChange} value={inputValues[label]} />)}

    </div>
  );
});

export default PastJobs;
