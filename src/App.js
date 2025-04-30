import React, { useState } from 'react';
import './App.css';
import StartMenu from './Footer/StartMenu';
import FooterMenu from './Footer/FooterMenu';
import Item from './DesktopItems/Item';
import Portfolio from './DesktopItems/Portfolio';
import 'xp.css';
import WebsiteHeader from './DesktopItems/WebsiteHeader';



function App() {
  const [startMenuVisible, setStartMenuVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // State to track the current page
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [windows, setWindows] = useState([]);

  const handleMinimize = (title) => {
    setMinimizedWindows((prev) => [...prev, title]);
    console.log(`Minimized:, ${title}`);
  };

  const handleOpen = (title) => {
    setWindows((prev) => {
      // Add the window to the list if it doesn't already exist
      if (!prev.some((window) => window.title === title)) {
        return [...prev, { title, minimized: false }];
      }
      return prev.map((window) =>
        window.title === title ? { ...window, minimized: false } : window
      );
    });
  
    // Remove the window from minimizedWindows if it exists there
    setMinimizedWindows((prev) => prev.filter((windowTitle) => windowTitle !== title));
  };

  const handleClose = (title) => {
    setWindows((prev) => prev.filter((window) => window.title !== title));
  };

  const restoreWindow = (title) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.title === title ? { ...window, minimized: false } : window
      )
    );
  
    // Optionally, remove the window from minimizedWindows (if still used elsewhere)
    setMinimizedWindows((prev) => prev.filter((windowTitle) => windowTitle !== title));
  };

  const toggleStartMenu = () => {
    setStartMenuVisible(!startMenuVisible);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <header className="header center">
              <div style={{ width: 300 }} className="window">
                <div className="title-bar">
                  <div className="title-bar-text">Portfolio</div>
                  <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                  </div>
                </div>

                <div className="window-body">
                  <p style={{ textAlign: 'center' }}>In the works</p>
                  <div className="field-row" style={{ justifyContent: 'center' }}>
                    <progress></progress>
                  </div>
                </div>
              </div>
            </header>
            <main>
              {/* Item for My Resume (iframe-based content) */}
              <Item
                title="My Resume"
                icon="xp_images/Default.png"
                content="/ItemsContent/Pirasana_ARIYAM_resume.pdf"
                isIframe={true} // Render as iframe
                handleMinimize={handleMinimize} // Pass the minimize function
                handleOpen={handleOpen} // Pass the open function
                windows={windows} // Pass the windows state
                handleClose={handleClose}
              />

              {/* Item for Portfolio (React-based content) */}
              <Item
                title="Portfolio.html"
                icon="xp_images/Default.png"
                content={<Portfolio />} // Pass React component as content
                isIframe={false} // Render as React component
                header= {<WebsiteHeader />} // Pass the header as a prop
                handleMinimize={handleMinimize} // Pass the minimize function
                handleOpen={handleOpen} // Pass the open function
                windows={windows} // Pass the windows state
                handleClose={handleClose}
              />
            </main>
          </>
        );
      case 'portfolio':
        return <Portfolio />; // Render the Portfolio component
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <div
      style={{
        position: 'fixed', // Fix the background to the viewport
        top: 0,
        left: 0,
        backgroundImage: `url('./images/windowsxp.jpeg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100vh',
        width: '100vw',
        zIndex: -1, // Ensure it stays behind all other content
      }}
    >
      <nav style={{ position: 'absolute', top: '10px', left: '10px' }}>
      <button onClick={() => setCurrentPage('home')}>Home</button>
      <button onClick={() => setCurrentPage('portfolio')}>Portfolio</button>
      </nav>
      {renderPage()}
      <div>{startMenuVisible && <StartMenu />}</div>
      <FooterMenu toggleStartMenu={toggleStartMenu}
      onRestore={restoreWindow}
      windows= {windows} />
    </div>
  );
}


export default App;