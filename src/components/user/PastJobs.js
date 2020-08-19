import React, { useState } from 'react';
import Input from '../common/Input';

const PastJobs = React.forwardRef((props, ref) => {
  const { inputs, onChange } = props;
  const [inputValues, setInputValues] = useState({ ...inputs });

  const labels = ['start', 'end', ' name'];

  return (
    <div ref={ref}>
      {labels.map(label => <Input key={label} label={label} id={label} onChange={e => onChange(e, ref)} value={inputs[label]} />)}

    </div>
  );
});

export default PastJobs;
