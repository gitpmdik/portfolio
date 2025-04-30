import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import 'xp.css';


function Item({ icon, title, isIframe, content, header, handleMinimize, handleOpen, windows, handleClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);

  const windowRef = useRef(null);

  useEffect(() => {
    const windowState = windows.find((window) => window.title === title);
    if (windowState) {
      setIsOpen(!windowState.minimized);
      setIsMinimized(windowState.minimized);
    }
  }, [windows, title]);

  const handleSingleClick = () => {
    setIsSelected(true);
  };


  const openWindow = () => {
    setIsOpen(true);
    handleOpen(title); // Notify App.js that the window is open
  };

  const maximiseWindow = () => {
    if (isMaximized) {
      setPosition({ x: 100, y: 100 }); // Restore initial position
    } else {
      // Move the window to the top-left corner
      setPosition({ x: 0, y: 0 });
    }
  
    setIsMaximized(!isMaximized); // Toggle maximized state
  };

  const closeWindow = () => {
    setIsOpen(false);
    setIsSelected(false);
    setIsMinimized(false);
    handleClose(title);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const minimizeWindow = () => {
    handleMinimize(title); // Notify App.js to minimize the window
    setIsOpen(false); // Close the window
  };



  return (
    <>
      <ItemContainer
        onClick={handleSingleClick} // Single click to select
        onDoubleClick={openWindow} // Double click to open modal
        isSelected={isSelected} // Pass selection state
      >
        <ItemIcon src={icon} alt={title} />
        <ItemText>{title}</ItemText>
      </ItemContainer>


      {/* Modal */}
      {isOpen && !isMinimized && (
        <div
          ref={windowRef} // Attach the ref to the window element
          className="window"
          style={{
            position: 'absolute',
            top: position.y, // Use `top` and `left` instead of `transform`
            left: position.x,
            width: isMaximized ? `${window.innerWidth}px` : '900px', // Dynamically set width based on viewport
            height: isMaximized ? `${window.innerHeight - 30}px` : '500px', // Dynamically set height based on viewport
            cursor: isDragging ? 'grabbing' : 'default',
            overflow: 'hidden',
            padding: '2px',
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the window
        >
          <div
            className="title-bar"
            onMouseDown={handleMouseDown} // Start dragging
            onMouseUp={handleMouseUp} // Stop dragging
            style={{ cursor: "url('http://www.rw-designer.com/cursor-extern.php?id=111497'), auto" }}
          >
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" onClick={minimizeWindow}></button>
              <button aria-label="Maximize" onClick={maximiseWindow}></button>
              <button aria-label="Close" onClick={closeWindow}></button>
            </div>
          </div>
            {/* Dynamic header */}
            {header && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                backgroundColor: 'rgb(237, 234, 211)',
                zIndex: 1,
                
              }}
            >
              {header}
            </div>
          )}

          {/* Scrollable content container */}
          <div
            className="content-container"
            style={{
              height: header ? 'calc(100% - 110px)' : 'calc(100% - 30px)', 
              overflowY: 'auto',
              padding: '0',
              paddingLeft: '1px',
              boxSizing: 'border-box',
            }}
          >
            {isIframe ? (
              <iframe
                src={content}
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                title={title}
              ></iframe>
            ) : (
              <div
                style={{
                  paddingLeft: '0',
                  paddingRight: '0',
                  marginRight: '0',
                  cursor: "url('http://www.rw-designer.com/cursor-extern.php?id=111497'), auto", // Fix: Wrap in quotes
                }}
              >
                {content}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}


const ItemContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})`
  width: 80px;
  margin: 70px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? 'rgb(169, 211, 251)' : 'transparent')};
  border: ${({ isSelected }) => (isSelected ? '1px solid rgb(137, 194, 248)' : 'none')};
`;

const ItemIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ItemText = styled.div`
  margin-top: 5px;
  font-size: 11px;
  height: 26px;
  width: 70px;
  color: white;
  text-shadow: 0 1px 1px black;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default Item;