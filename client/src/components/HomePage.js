import React, { useState } from "react";
import { useSelector } from "react-redux";
import meetImage from "../images/video-conference.jpg";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import { TextField } from "@material-ui/core";

function HomePage() {
  const navigate = useNavigate();
  const [roomToJoin, setRoomToJoin] = useState("");
  const [alert, setAlert] = useState("");

  const checkUserAuth = () => {
    navigate("/meet");
  };

  setTimeout(() => {
    setAlert("");
  }, 2000);
  return (
    <>
      <div className="main-div">
        <div className="nav_bar">
          <div className="left_nav_bar">
            <div className="logo_content">@Video Conference</div>
          </div>
        </div>
        <div className="home_section">
          <div className="left_section">
            <div className="main_heading">Video conferencing for students</div>
            <div className="main_paragraph">
              <p>Connect with each others from globe </p>
            </div>
            <p>{alert}</p>
            <div className="main_buttons">
              <button
                id="start_meeting_button"
                className="main_button"
                onClick={checkUserAuth}
              >
                Start Meet
              </button>
              <button id="join_meeting_button" className="main_button">
                <TextField
                  onChange={(e) => {
                    setRoomToJoin(e.target.value);
                  }}
                  value={roomToJoin}
                  placeholder="Enter ID to Join"
                />
              </button>
              <a
                href={`/meet/p/${roomToJoin}`}
                id="join_button"
                className="main_button"
              >
                Join
              </a>
            </div>
          </div>
          <div className="right_section">
            <div className="main_image">
              <img src={meetImage} alt="" width="70%" className="img-con" />
            </div>
            <div className="image_content">
              <div className="image_heading main_heading">Enter a room</div>
              <div className="image_paragraph">
                Start chatting and video conferencing with your peers
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
