import React from 'react';
import PropTypes from 'prop-types';

const Table = ({
  classes, title, user, iterator,
}) => {
  const a = 2;
  console.log(user);
  return (
    <div className={classes}>
      <table className="table-auto mt-48 pr-8">
        <thead>
          <tr>

            <th className="text-3xl">

              {title}
            </th>
          </tr>

        </thead>
        <tbody>
          {iterator.map((field, index) => (
            <tr key={field}>
              <td className={`${index % 2 === 0 ? 'bg-gray-200' : ''} px-4 py-2`}>
                {field}
                :
                {' '}
                {user[field]}
              </td>
            </tr>
          ))}

          <tr>
            <td className="bg-gray-200 px-4 py-2">
              Position:
              {' '}
            </td>
          </tr>
          <tr>
            <td className=" px-4 py-2">
              Position:
              {' '}
            </td>
          </tr>
          <tr>
            <td className="bg-gray-200  px-4 py-2">
              Position:
              {' '}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Table;

Table.propTypes = {
  classes: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iterator: PropTypes.arrayOf(String).isRequired,
};
