import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="row justify-content-center mt-4 header">
      <div className="col-3">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="col-3">
        <button className="btn btn-outline-secondary"><a href="/">Home</a></button>
      </div>
      <div className="col-3">
        <button className="btn btn-outline-secondary"><a href={"/level"}>Level</a></button>
      </div>
    </div>
  );
}
