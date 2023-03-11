import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 text-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item">
                <Link
                  className="page-link hover-btn"
                  to={"#"}
                  aria-label="Previous"
                >
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon/pagination-arrowp.svg"}
                      alt="images"
                    />
                  </span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link active hover-btn" to={"#"}>
                  <span>1</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hover-btn" to={"#"}>
                  <span>2</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hover-btn" to={"#"}>
                  <span>3</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hover-btn" to={"#"}>
                  <span>4</span>
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link hover-btn"
                  to={"#"}
                  aria-label="Previous"
                >
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon/pagination-arrown.svg"}
                      alt="images"
                    />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Pagination;
