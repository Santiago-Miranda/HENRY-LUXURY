import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Orders statistics</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-project-0-cqpdf/embed/charts?id=63718762-01a5-4a51-8b5c-69d5cd58de76&maxDataAge=3600&theme=light&autoRefresh=true&scalingHeight=fixed"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
