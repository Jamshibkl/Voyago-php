import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NotFoundImg from "../src/Assets/404 Error Page not Found with people connecting a plug-pana.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function NotFound() {
  return (
    <div>
      <NavBar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}>
        <img src={NotFoundImg} alt="" style={{ width: "700px" }} />
        <Link to="/" style={{textDecoration:"none"}}>
          <button
            style={{
              padding: "15px",
              borderRadius: "10px",
              background: "#407BFF",
              border: "none",
              color: "white",
              display: "flex",
              gap: "5px",
              alignItems: "center"   
            }}>
            Go Back!
            <FontAwesomeIcon
              icon={faArrowRight}
              className="FontAwesomeIcon"
              style={{ width: "15px" }}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
