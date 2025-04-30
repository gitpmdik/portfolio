import React, { useState } from 'react';
import styled from 'styled-components';



function FooterMenu({ toggleStartMenu, onRestore, windows }) {

  // Get the current time in the user's local timezone
  var timeFromUser = new Date();
  var timeZone = timeFromUser.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <Taskbar>
      <StartButton onClick={toggleStartMenu}>
        <img src="images/Windows_(2001).svg" alt="Windows Logo" />
        <span className="bold italic">start</span>
      </StartButton>
      <MinimizedWindowsContainer>
        {windows.map((window, index) => (
          <MinimizedWindow
            key={index}
            onClick={() => onRestore(window.title)}
            style={{
              opacity: window.minimized ? 0.5 : 1, // Dim minimized windows
            }}
          >
            {window.title}
          </MinimizedWindow>
        ))}
      </MinimizedWindowsContainer>
      <TimeSection>
        <img src="xp_images/Security_Error.png" alt="Security Error" />
        <img src="xp_images/Volume.png" alt="Volume" />
        <span >{timeZone}</span>
      </TimeSection>
    </Taskbar>
  );
}

const MinimizedWindowsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const MinimizedWindow = styled.div`
  display: inline-block;
  margin: 0 5px;
  width: 150px;
  height: 30px;
  background-color: rgb(169, 211, 251);
  border: 1px solid rgb(137, 194, 248);
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgb(137, 194, 248);
  }
`;

const Taskbar = styled.div`
  background-image: linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%);
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0;
  border-radius: 0 0 10px 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
`;

const TimeSection = styled.div`
  background-image: linear-gradient(rgb(12, 89, 185) 1%, rgb(19, 158, 233) 6%, rgb(25, 171, 229) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%);
  height: 30px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-top: 2px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: small;

    span {
      margin-left: 5px;
    }
  }
`;

const StartButton = styled.div`
  background-image: radial-gradient(circle, rgb(3, 176, 3) 0%, rgb(0, 122, 0) 110%);
  width: 98px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  

  span {
    user-select: none;
  }

  img {
    width: 20px;
    height: auto;
    margin-left: 15px;
    margin-right: 5px;
    user-select: none;
    filter: drop-shadow(1px 4px 6px rgba(0, 0, 0, 0.5));
  }
`;

export default FooterMenu;