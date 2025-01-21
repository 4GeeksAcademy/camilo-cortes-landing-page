import React from "react";
import Card from "./card";

const Grid = () => {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-3 d-flex mb-5 justify-content-center">
          <Card />
        </div>
        <div className="col-3 d-flex mb-5 justify-content-center">
          <Card />
        </div>
        <div className="col-3 d-flex mb-5 justify-content-center">
          <Card />
        </div>
        <div className="col-3 d-flex mb-5 justify-content-center">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Grid;
