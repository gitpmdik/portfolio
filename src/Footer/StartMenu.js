import React from "react";
import styled from 'styled-components';

function StartMenu() {
    return (
        <StartMenuContainer>
            <AdminSection>
                <img src="images/icon.png" alt="admin-image" />
                <h4>Pirasana</h4>
            </AdminSection>
            <MenuContainer>
                <MenuSectionLeft>
                    <li className="bold"><img src="xp_images/Internet_Explorer.png" alt="Internet explorer" />Internet Explorer</li>
                    <li className="bold"><img src="xp_images/Outlook_Express.png" alt="Email" />E-mail</li>
                    <li><img src="xp_images/MSN.png" alt="MSN" />MSN</li>
                    <li><img src="xp_images/Windows_Media_Player.png" alt="MEdiaPLayer" />Windows Media Player</li>
                    <li><img src="xp_images/Windows_Messenger.png" alt="Messenger" />Windows Messenger</li>
                    <li><img src="xp_images/Tour_XP.png" alt="TourXP" />Tour Windows XP</li>
                    <li><img src="xp_images/File_and_Settings_Transfer_Wizard.png" alt="FilesTransfer" />Files and Settings Transfer Wizard</li>
                    <li><img src="xp_images/mozilla.png" alt="Internet" />Internet</li>
                    <span><div>All Programs</div><img src="xp_images/play.png" alt="ProgramsArrow"/></span>
                </MenuSectionLeft>
                <MenuSectionRight>
                    <li className="bold"><img src="xp_images/My_Documents.png" alt="MyDocuments" />My Documents</li>
                    <li className="bold"><img src="xp_images/Recent_Documents.png" alt="RecentDocuments" />My Recent Documents</li>
                    <li className="bold"><img src="xp_images/My_Pictures.png" alt="Pictures" />My Pictures</li>
                    <li className="bold"><img src="xp_images/My_Music.png" alt="Music" />My Music</li>
                    <li className="bold"><img src="xp_images/My_Computer.png" alt="Computer" />My Computer</li>
                    <li><img src="xp_images/Control_Panel.png" alt="ControlPanel" />Control Panel</li>
                    <li><img src="xp_images/Default_Programs.png" alt="Access" />Set Program Access and Defaults</li>
                </MenuSectionRight>
            </MenuContainer>
            <BottomSection>
                <p><img src="xp_images/Logout.png" alt="Log Off Icon"/>Log Off</p>
                <p><img src="xp_images/Power.png" alt="Turn Off Icon"/>Turn Off Computer</p>
            </BottomSection>
        </StartMenuContainer>
    );
}

const StartMenuContainer = styled.div`
    position: absolute;
    bottom: 30px;
    border: rgb(28, 84, 195) solid 2px;
    border-radius: 7px;
    width: 385px; 
    height: 478px; 
    overflow: hidden;
`;

const AdminSection = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    height: 57px;
    background-image: linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%);

    img {
        width: 40px;
        height: 40px;
        margin-top: 5px;
        margin-right: 10px;
        margin-left: 5px;
        border: white solid 1px; 
        border-radius: 3px;
    }
    h4 {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        margin-top: 15px;
        margin-right: 10px;
    }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Tahoma', sans-serif;
  font-size: small;
  height: 387px;
`;

const MenuSectionLeft = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  background-color: white;
  padding: 5px;

  li {
    display: flex;
    align-items: center;
    font-size: 11px;
    padding-bottom: 5px;
    width: 140px;

    img {
      width: 30px;
      height: 30px;
      margin-right: 3px;
    }
  }

  span {
    position: absolute;
    bottom: 55px;
    left: 25px;
    display: flex;
    align-items: center;

    img {
      width: 35px;
      height: 32px;
    }
  }
`;


const MenuSectionRight = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  background-color: rgb(196, 212, 244);
  padding: 5px;

  li {
    display: flex;
    align-items: center;
    font-size: 11px;
    padding-bottom: 3px;
    width: 140px;

    img {
      width: 27px;
      height: 27px;
      margin-right: 3px;
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: right;
  margin: 0;
  font-size: 11px;
  height: 37px;
  padding: 0px 10px;
  background-image: linear-gradient(rgb(66, 130, 214) 0%, rgb(59, 133, 224) 3%, rgb(65, 138, 227) 5%, rgb(65, 138, 227) 17%, rgb(60, 135, 226) 21%, rgb(55, 134, 228) 26%, rgb(52, 130, 227) 29%, rgb(46, 126, 225) 39%, rgb(35, 116, 223) 49%, rgb(32, 114, 219) 57%, rgb(25, 110, 219) 62%, rgb(23, 107, 216) 72%, rgb(20, 104, 213) 75%, rgb(17, 101, 210) 83%, rgb(15, 97, 203) 88%);

  p {
    display: flex;
    align-items: center;
    line-height: 1.2;
    color: #fff;

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      margin-left: 10px;
    }
  }
`;

export default StartMenu;