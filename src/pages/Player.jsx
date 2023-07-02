import React, { useRef } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import videoWatch from "../assets/video.mp4";

export default function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>

        <video src={videoWatch} autoPlay loop controls muted />
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

    video {                       
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;