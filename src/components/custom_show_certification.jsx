import React from "react";
import styled from "styled-components";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CustomShowCertificationButton = ({ onClickButton }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClickButton}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <FontAwesomeIcon
            icon={faEye}
            className="text-4xl text-black rotate-180"
          />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #3d3a4e;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(0, 255, 238, 0.3);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 20px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(0, 255, 238, 1);
    align-items: center;
  }

  .button:hover .svgIcon {
    /* width: 20px; */
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Show certification";
    color: black;
    /* transition-duration: .3s; */
    font-size: 0px;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    /* transform: translateY(-30px); */
    transition-duration: 0.3s;
  }
`;

export default CustomShowCertificationButton;
