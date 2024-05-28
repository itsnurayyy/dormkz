import React from "react";

const ComparisonTable = ({ data }) => {
  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>First Dorm</th>
          <th>Second Dorm</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.attribute}</td>
            <td>{row.firstValue}</td>
            <td>{row.secondValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
