import React, { useState } from 'react';
import Input from '../common/Input';

const PastJobs = React.forwardRef((props, ref) => {
  const { inputs, onChange } = props;
  const [inputValues, setInputValues] = useState({ ...inputs });

  const labels = ['start', 'end', ' name'];

  return (
    <>
      <h3>A job</h3>
      <div ref={ref}>
        {labels.map(label => <Input key={label} label={label} labelValue={label} id={label} onChange={e => onChange(e, ref)} value={inputs[label]} />)}

      </div>
    </>
  );
});

export default PastJobs;
