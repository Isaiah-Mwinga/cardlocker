import React from 'react';
import Navbar from '../components/Navbar';
import Upcoming from '../components/UpComing';
import MarketPlace from '../components/MarketPlace';
import backgroundImage from '../images/BG.png';
import LPNavBar from '../components/LPNavBar';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image URL
    backgroundSize: 'cover', // Adjust this as needed
    backgroundAttachment: 'fixed', // Keep the background fixed
    // You can also add other CSS properties like backgroundColor, backgroundPosition, etc.
  };

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      <LPNavBar />
      <Upcoming />
      <MarketPlace/>
    </div>
  );
}

export default App;