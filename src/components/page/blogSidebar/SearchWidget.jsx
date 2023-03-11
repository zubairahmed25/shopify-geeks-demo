import React from "react";
import { Link } from "react-router-dom";

function SearchWidget() {
  return (
    <>
      <div className="search-area">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-inner">
            <input type="text" placeholder="Type keyword here" />
            <Link  to={"#"} className="search-btn hover-btn">
              <span>
                <i className="bi bi-search" />
              </span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchWidget;
