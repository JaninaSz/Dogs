import React from "react";

export const Card = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
      <span>
                  <img
                    className="dog-logo"
                    height="10"
                    src="dogLog.png"
                    alt="Dog Log"
                  />
                </span>
        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};
