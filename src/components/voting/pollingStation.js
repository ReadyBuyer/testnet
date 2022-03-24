import React from "react";

const PollingStation = (props) => {
  return (
    <div>
      <table class="table-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>Poll Name</th>
            <th>Go to Poll</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

pollingStation.propTypes = {};

export default PollingStation;
