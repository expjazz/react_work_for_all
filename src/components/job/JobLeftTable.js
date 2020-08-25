import React from 'react';
import PropTypes from 'prop-types';

const JobLeftTable = ({ job }) => (
  <div>

    <table className="table-auto mt-48 pr-8">
      <thead>
        <h6 className="text-3xl">

          {job.companyName}
        </h6>

      </thead>
      <tbody>
        <tr>
          <td className="bg-gray-200 px-4 py-2">
            Position:
            {' '}
            {job.position}
          </td>
        </tr>
        <tr>
          <td className=" px-4 py-2">
            Position:
            {' '}
            {job.requirement}
          </td>
        </tr>
        <tr>
          <td className="bg-gray-200  px-4 py-2">
            Position:
            {' '}
            {job.salary}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default JobLeftTable;

JobLeftTable.propTypes = {
  job: PropTypes.objectOf(String).isRequired,
};
