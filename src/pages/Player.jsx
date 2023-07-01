import React, { useRef } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";


export default function Player() {
  const navigate = useNavigate();
  const videoURL = "https://www.youtube.com/watch?v=bV0RAcuG2Ao";

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>

        <ReactPlayer 
          url={videoURL} 
          playing 
          loop 
          muted 
          controls
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
    </Container>
  )
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;

    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;

      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }

    .player-wrapper {
      position: relative;
      padding-top: 56.25%; 
      width: 100%;
      height: 0;
    }

    .react-player {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
    }
  }

  
`;