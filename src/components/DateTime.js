import React from 'react';
import moment from 'moment';
const DateTime = () => {
  const now = moment();
  const formattedDate = now.format('MMMM Do YYYY, h:mm:ss a');
  return (
    <div>
      <p>Late update: {formattedDate}</p>
    </div>
  );
};
export default DateTime;