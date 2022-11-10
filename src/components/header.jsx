import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="row justify-content-center mt-4 header">
      <div className="col-4">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg> */}
          Back
        </button>
      </div>
      <div className="col-4">
        <button className="btn btn-outline-secondary"><a href="/questions">Questions</a></button>
      </div>
      <div className="col-4">
        <button className="btn btn-outline-secondary"><a href="/">Home</a></button>
      </div>
    </div>
  );
}
