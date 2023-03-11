import React from "react";
import { Link } from "react-router-dom";

function TeamItem(props) {
  return (
    <>
      <div class="team-item">
        <img src={props.image} alt="images" />
        <div class="team-overlay">
          <div class="overlay-content hover-btn">
            <span></span>
            <h4>
              <Link to={"#"}>{props.name}</Link>
            </h4>
            <p>{props.title}</p>
            <ul>
              <li>
                <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank">fb</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" to={"#"}>tw</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank" to={"#"}>in</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank" >pr</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamItem;
