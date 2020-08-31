import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input';

const PastJobs = React.forwardRef((props, ref) => {
  const { inputs, onChange } = props;

  const labels = ['start', 'end', 'name'];

  return (
    <>
      <h5 className="text-2xl">
        Past Job
      </h5>
      <div className="py-8" ref={ref}>
        {labels.map(label => (
          <Input
            key={label}
            label={label}
            labelValue={label}
            id={label}
            onChange={e => onChange(e, ref)}
            value={inputs[label]}
          />
        ))}

      </div>
    </>
  );
});

PastJobs.displayName = 'PastJobs';

export default PastJobs;
PastJobs.propTypes = {
  inputs: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
