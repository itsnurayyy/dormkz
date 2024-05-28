import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const DormitoryTooltip = ({ dormitory }) => (
  <div data-tip data-for={`dormitory-tooltip-${dormitory._id}`}>
    {dormitory.name}
    <ReactTooltip id={`dormitory-tooltip-${dormitory._id}`} place="top" effect="solid">
      <div>
        <p>{dormitory.description}</p>
        <p>Location: {dormitory.location}</p>
        <p>Price: {dormitory.price} ₸</p>
        <p>Rating: {dormitory.overallRate}</p>
      </div>
    </ReactTooltip>
  </div>
);

export default DormitoryTooltip;
