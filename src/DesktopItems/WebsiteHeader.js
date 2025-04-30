import React from "react";
import styled from "styled-components";


const WebsiteHeader = () => {
    return (
        <div
        style={{
            backgroundColor: 'rgb(237 234 211)',
            cursor: "url('http://www.rw-designer.com/cursor-extern.php?id=111497'), auto", 
            
        }}
    >
        <WebsiteHeaderWrapper>

            <div className='options-bar'>
                
                    <div className='option'>
                        <div className='file dropdown'> File</div>
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>New</div>
                            <div className='dropdown-item'>Open</div>
                            <div className='dropdown-item'>Save</div>
                            <div className='dropdown-item'>Print</div>
                            <div className='dropdown-item'>Close</div>
                        </div>
                    </div>

                    <div className='option'>
                        <div className='edit dropdown'> Edit</div>
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>Undo</div>
                            <div className='dropdown-item'>Redo</div>
                            <div className='dropdown-item'>Cut</div>
                            <div className='dropdown-item'>Copy</div>
                            <div className='dropdown-item'>Paste</div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className='view dropdown'> View</div>
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>Zoom In</div>
                            <div className='dropdown-item'>Zoom Out</div>
                            <div className='dropdown-item'>Fullscreen</div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className='favorites dropdown'> Favorites</div>
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>Add to Favorties</div>
                            <div className='dropdown-item'>Organize Favorites</div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className='tools dropdown'> Tools</div>
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>Mail and News</div>
                            <div className='dropdown-item'>Pop-up Blocker</div>
                            <div className='dropdown-item'>Windows Update</div>
                            <div className='dropdown-item'>Windows Messenger</div>
                            <div className='dropdown-item'>Internet Options</div>  
                        </div>
                    </div>
                    <div className='option'>
                        <div className='help dropdown'> Help</div>
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>Contents and Index</div>
                            <div className='dropdown-item'>For Netscape Users</div>
                            <div className='dropdown-item'>Online Support</div>
                            <div className='dropdown-item'>About</div>
                        </div> 
                    </div>
                
            </div>

            <div className='horizontal-separator'></div>

            <div className='actions-bar'>
                <div className='action'>
                    <img src='xp_images/Back.png' alt='Back' className='action-img' />
                    <div className='action-text'>Back</div>
                </div>
                <div className='action'>
                    <img src='xp_images/Forward.png' alt='Forward' className='action-img' />
                </div>
                <div className='action'>
                    <img src='xp_images/IE_Stop.png' alt='Stop' className='action-img' />
                </div>
                <div className='action'>
                    <img src='xp_images/IE_Refresh.png' alt='Refresh' className='action-img' />
                </div>
                <div className='action'>
                    <img src='xp_images/IE_Home.png' alt='Home' className='action-img' />
                </div>
                <div className='separator'></div>
                <div className='action'>
                    <img src='xp_images/Search.png' alt='Search' className='action-img' />
                    <div className='action-text'>Search</div>
                </div>
                <div className='action'>
                    <img src='xp_images/Favorites.png' alt='Favorites' className='action-img' />
                    <div className='action-text'>Favorites</div>
                </div>
                <div className='action'>
                    <img src='xp_images/IE_History.png' alt='History' className='action-img' />
                </div>
                <div className='separator'></div>
                <div className='action'>
                    <img src='xp_images/Email.png' alt='Email' className='action-img' />
                </div>
                <div className='action'>
                    <img src='xp_images/Printer.png' alt='Print' className='action-img' />
                </div>
                <div className='action'>
                    <img src='xp_images/IE_Discuss.png' alt='Discuss' className='action-img' />
                </div>
                <div className='action'>
                    <img src='xp_images/Windows_Messenger.png' alt='Messenger' className='action-img' />
                </div>
               
            </div>

            <div className='horizontal-separator'></div>

            <div className='search-bar'>
                <div className="search-bar-elem">
                    <div className="grey-text">Address</div>
                    <div className="input-container">
                        <img src='xp_images/URL.png' alt='URL-img' className='URL-img' />
                        <input className='input'type='text' placeholder='Search' />
                    </div>
                </div>
                <div className='search-bar-elem'>
                    <img src='xp_images/Go.png' alt='Go' className='go-img' />
                    <div className="search-bar-text go-text">Go</div>
                </div>
                <div className='separator'></div>
                <div className='search-bar-elem'>
                    <div className="search-bar-text grey-text">Link</div>
                </div>

            </div>


        </WebsiteHeaderWrapper>
        </div>
    );
};

  

const WebsiteHeaderWrapper = styled.div`

  .options-bar {
    display: flex; /* Make the options-bar a flex container */
    flex-direction: row; /* Ensure items are aligned horizontally */
    gap: 5px; /* Add spacing between options */
    font-size: 14px; /* Set font size */
    height:23px;
  }

  .option {
    display: flex;
    flex-direction: column; /* Keep dropdown content stacked vertically */
    position: relative; /* For dropdown positioning */
    align-items: center; /* Center the dropdown content horizontally */
    flex-direction: column; /* Stack items vertically */
    padding: 5px; /* Add padding around the option */
    &:hover {
      background-color: rgb(53, 118, 243); /* Change background on hover */
      color: white; /* Change text color on hover */
      
    }
      
  }


  .dropdown-content {
    display: none; /* Hide dropdown by default */
    position: absolute;
    top: 100%; /* Position dropdown below the parent */
    left: 0;
    background-color: white;
    border: 1px solid #ccc;
    padding: 5px;
    z-index: 10;
    color: black; /* Change text color */
    min-width: 150px;
    white-space: nowrap; /* Prevent text wrapping */

  }

  .dropdown-item {
    padding: 5px 10px;

    &:hover {
      background-color: rgb(53, 118, 243); /* Change background on hover */
      color: white; /* Change text color on hover */
    }
  }

  .option:hover .dropdown-content {
    display: block; /* Show dropdown on hover */
  }

  .actions-bar {
    display: flex; /* Make the actions-bar a flex container */
    flex-direction: row; /* Ensure items are aligned horizontally */

    margin-top: 5px;
    align-items: center; /* Center items vertically */
    height: 36px; /* Set a fixed height for the actions bar */
   }

   .action{
    min-width: 40px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 5px;
   }

   .action-img {
    width:32px;
    height:28px;
    padding-right: 5px;
    }

    .action-text {
    font-size: 14px; /* Set font size */
    }

   .search-bar {
    display: flex; /* Make the actions-bar a flex container */
    flex-direction: row; /* Ensure items are aligned horizontally */
    align-items: center; /* Center items vertically */
    height: 22px; /* Set a fixed height for the actions bar */
    } 

   .search-bar-elem {
    font-size: 12px; /* Set font size */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    } 

   .grey-text {
    color: rgb(120, 117, 117);
    } 

  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 5px;
    }

   .URL-img {
    position: absolute;
    padding-left: 3px;
    width:15px;
    height:15px;
    align-items: center;
    justify-content: center;
    } 

   .input {
    padding-left: 25px; /* Add padding to the left for the icon */
    min-width: 700px; /* Set a fixed width for the input */
    height: 20px; /* Set a fixed height for the input */
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 13px; /* Set font size */
    color: black; /* Change text color */
    align-items: center;
    justify-content: center;
   } 

   .go-img {

    height:19px;
    padding-left: 5px;
    padding-right: 5px;
    
   }

   .go-text {
    padding-right: 15px;
    padding-left: 2px;
    font-size: 14px; /* Set font size */
}


  .separator {
    height: 90%; /* Adjust height as needed */
    width: 1px; /* Thin vertical line */
    background-color: rgba(0, 0, 0, 0.2); /* Light gray color */
    margin-top: 0px;
    margin-right: 2px;
  }

  .horizontal-separator {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2); /* Light gray color */
   
  }
`;


export default WebsiteHeader;