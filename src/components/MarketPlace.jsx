import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import arrow icons
import auctionData from './DummyAuctionData';
import { FiMenu } from 'react-icons/fi';
import { useState as useReactState } from 'react';


const categories = ['All', 'Pokemon', 'Dragonballz', 'Yu-Gi-Oh']; // Replace with your own categories
const locations = ['All', 'Australia', 'USA', 'Japan', 'UK', 'Canada']; // Replace with your own locations
const cardGrades = ['All', 'Raw', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const pokemonCardSets = ['All', 'Base Set', 'Jungle', 'Fossil', 'Team Rocket', 'Base Set 2', 'Gym Heroes', 'Gym Challenge', 'Neo Genesis', 'Neo Discovery', 'Neo Revelation', 'Neo Destiny', 'Legendary Collection', 'Expedition Base Set', 'Aquapolis', 'Skyridge'];

const userNames = [
  'CardCollectorPro', 'GradedGuru', 'MintCardHunter', 'SlabSleuth', 'GradeMaster',
  'GemCardSlinger', 'CollectibleGems', 'ProGradePicks', 'CardConnoisseur', 'EliteSlabs',
  'RareCardRaider', 'HighGradeHaven', 'GemMintJunkie', 'CardGradeChampion', 'SlabSeeker',
  'PrimeCardPlucker', 'GemHoarder', 'MintyMarketplace', 'PerfectTenTrader', 'GradedGemsGalore',
  'TopTierSlabs', 'CardGradeSavvy', 'PremiumPickings', 'CollectorsCoveted', 'GemMintFinds',
  'SlabEnthusiast', 'RareCardRealm', 'GradeASelect', 'GemHunterPro', 'TheSlabSpotter'
];

const dummyClaimSales = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  category: 'Pokemon',
  salesType: 'Claim Sale',
  user: userNames[index],
  starRating: Math.floor(Math.random() * 5) + 1,
  location: ['USA', 'Canada', 'UK', 'Australia', 'Japan'][Math.floor(Math.random() * 5)],
  inventory: `${50 + index} items`,
  watchers: Math.floor(Math.random() * 286) + 15,
  verified: Math.random() > 0.5  // This gives a 50% chance for a user to be verified
}));

dummyClaimSales.sort((a, b) => b.watchers - a.watchers);
dummyClaimSales.forEach((sale, index) => {
  sale.rank = index + 1;
});

function MarketPlace({ onSaleClick }) {
  const [timeUntilNextFriday, setTimeUntilNextFriday] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [filter, setFilter] = useState({
    category: 'All',
    location: 'All',
    set: 'All', // Add set property
    grade: 'All', // Add grade property
  });
  const [auctionFilter, setAuctionFilter] = useState({
    category: 'All',
    location: 'All',
    set: 'All', // Add set property
    grade: 'All', // Add grade property
  });

  const [activeButton, setActiveButton] = useState('claim-sales');

  const calculateNextFriday = () => {
    const now = new Date();
    const nextFriday = new Date();
    nextFriday.setDate(now.getDate() + (5 - now.getDay() + 7) % 7);
    nextFriday.setHours(20, 0, 0, 0);
    return Math.floor((nextFriday - now) / 1000);
  };

  useEffect(() => {
    setTimeUntilNextFriday(calculateNextFriday());

    const timer = setInterval(() => {
      const timeLeft = calculateNextFriday();
      setTimeUntilNextFriday(timeLeft);

      if (timeLeft <= 0) {
        setIsActive(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / 86400);
    const hours = String(Math.floor((time % 86400) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    return days > 0 ? `${days}d ${hours}:${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;
  };

  const filteredSales = dummyClaimSales.filter((sale) =>
    (filter.category === 'All' || sale.category.includes(filter.category)) &&
    (filter.location === 'All' || sale.location.includes(filter.location))
  );

  const [infoMenuVisible, setInfoMenuVisible] = useState(false);

  const handleInfoClick = () => {
    setInfoMenuVisible(true);
}

const handleCloseMenu = () => {
    setInfoMenuVisible(false);
}


  const [selectedSale, setSelectedSale] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // null, "ClaimSales", etc.

  return (
    <div className="container mx-auto mt-4 p-2">
        <h1 className="text-xl text-[#f3b80e] font-semibold font-integralcf-extraboldoblique mb-5">MarketPlace</h1>
        <div className="relative bg-[#120f5e] rounded-lg shadow-lg p-2 border-2 border-[#1ea1ee]">
            {menuVisible && (
                <div className="slideout-menu active">
                    <h2 className="text-white font-integralcf-extrabold mt-5">Sale Type</h2>
                    <span className="cursor-pointer text-white absolute right-0 mr-4 close-icon" onClick={() => setMenuVisible(false)}>X</span>
                    <hr className="my-2 border-t-1 border-gray-300" />
                    <div className={`menu-item text-white font-integralcf-regular ${selectedMenu === 'ClaimSales' ? 'selected-menu-item' : ''}`} onClick={() => {
                        if (activeSubMenu === "ClaimSales") {
                            setActiveSubMenu(null);
                        } else {
                            setActiveSubMenu("ClaimSales");
                        }
                        setSelectedMenu('ClaimSales');
                    }}>
                        Claim Sales
                    </div>
                    <div className={activeSubMenu === "ClaimSales" ? "submenu active" : "submenu"}>
                        <div className="menu-item text-white font-integralcf-regular">Wednesday</div>
                        <div className="menu-item text-white font-integralcf-regular">Saturday</div>
                    </div>
                    <div 
                        className={`menu-item text-white font-integralcf-regular ${selectedMenu === 'Auctions' ? 'selected-menu-item' : ''}`} 
                        onClick={() => setSelectedMenu('Auctions')}>
                        Auctions
                    </div>
                    <div 
                        className={`menu-item text-white font-integralcf-regular ${selectedMenu === 'FixPrice' ? 'selected-menu-item' : ''}`} 
                        onClick={() => setSelectedMenu('FixPrice')}>
                        Fix Price
                    </div>
                </div>
            )}
                <div className="table-container">
                  {selectedSale ? (
                      <div className="table-responsive hidden-scrollbar">
                          <div className="flex items-center justify-between mt-4 mb-4 ml-5">
                              <div className="flex items-center">
                                  <button className="text-white mr-2 bg-transparent hover:bg-opacity-20 hover:bg-white" onClick={() => setSelectedSale(null)}>
                                      <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                                      </svg>
                                  </button>
                                  <span 
                                      onClick={handleInfoClick}
                                      className="cursor-pointer text-white font-integralcf-regular hover:underline"
                                  >
                                      Details
                                  </span>
                              </div>
                              <div className="flex">
                                <select
                                  value={filter.set}
                                  onChange={(e) => setFilter({ ...filter, set: e.target.value })}
                                  className="h-8 w-36 rounded-lg bg-transparent text-white mx-1 border border-white border-opacity-50 mt-3 mr-3 mb-2"
                                >
                                  {pokemonCardSets.map((set, index) => (
                                    <option key={index} value={set}>
                                      {set}
                                    </option>
                                  ))}
                                </select>
                                <select
                                  value={filter.grade}
                                  onChange={(e) => setFilter({ ...filter, grade: e.target.value })}
                                  className="h-8 w-36 rounded-lg bg-transparent text-white mx-1 border border-white border-opacity-50 mt-3 mr-6 mb-2"
                                >
                                  {cardGrades.map((grade, index) => (
                                    <option key={index} value={grade}>
                                      {grade}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="flex justify-start space-x-6 text-white text-sm border-b-[0.5px] border-white border-opacity-50 mb-4">
                                <span className="custom-id">ID</span>
                                <span className="custom-set">Set</span>
                                <span className="custom-card">Card</span>
                                <span className="custom-grade">Grade/Raw</span>
                                <span className="custom-current-bid">Current Bid</span>
                                <span className="custom-bid">Bid</span>
                            </div>
                            {infoMenuVisible && (
                                <div className="infoSlideoutMenu">
                                    <div className="flex justify-between items-center header-underline">
                                        <h3 className="font-integralcf-regular">Seller Details</h3>
                                        <span className="cursor-pointer close-icon" onClick={handleCloseMenu}>X</span>
                                    </div>
                                    <p><span className="text-gold">User:</span> {selectedSale.user}</p>
                                    <p>
                                        <span className="text-gold">Rating:</span>
                                        <span className="stars-wrapper">
                                            {Array(5).fill(0).map((_, starIndex) => (
                                                <span key={starIndex} className={`text-${starIndex < selectedSale.starRating ? 'gold' : 'transparent-gray'}`}>
                                                    ★
                                                </span>
                                            ))}
                                        </span>
                                    </p>
                                    <p><span className="text-gold">Location:</span> {selectedSale.location}</p>

                                    <div className="header-underline">
                                        <h3 className="font-integralcf-regular">Sale Details</h3>
                                    </div>
                                    <p><span className="text-gold">Sale Type:</span> {selectedSale.salesType}</p>
                                    <p><span className="text-gold">Sale ID:</span> {selectedSale.id}</p>
                                </div>
                            )}
                            <div className="table-responsive">
                                <table className="min-w-full table-fixed text-white text-sm marketplace-table">
                                    <tbody>
                                        {auctionData.map((card) => (
                                            <tr key={card.id}>
                                                <td className="text-center">{card.id}</td>
                                                <td className="text-center">{card.set}</td>
                                                <td className="text-center">{card.cardName}</td>
                                                <td className="text-center">{card.Grade}</td>
                                                <td className="text-center">${card.currentBid}</td>
                                                <td className="text-center">
                                                    <div className="inline-flex items-center">
                                                        <input 
                                                            type="number" 
                                                            placeholder="Enter bid" 
                                                            className="text-black px-2 py-1 rounded mr-2"
                                                            style={{ width: '100px' }}
                                                            min={card.currentBid + 1}
                                                        />
                                                        <button className="text-white bg-blue-500 px-2 py-1 rounded">Place Bid</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                      <div className="table-responsive hidden-scrollbar">
                            <div className="sticky top-0 z-10 bg-[#120f5e] p-2">
                                <div className="flex justify-between mb-4">
                                    <FiMenu onClick={() => setMenuVisible(prev => !prev)} className="mt-6 ml-5 text-white cursor-pointer" />
                                    <div className="flex">
                                        <select
                                            value={filter.category}
                                            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                                            className="h-8 w-36 rounded-lg bg-transparent text-white mx-1 border border-white border-opacity-50 mt-5 mr-3 mb-2"
                                        >
                                            {categories.map((category, index) => (
                                                <option key={index} value={category}>{category}</option>
                                            ))}
                                        </select>
                                        <select
                                            value={filter.location}
                                            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
                                            className="h-8 w-36 rounded-lg bg-transparent text-white mx-1 border border-white border-opacity-50 mt-5 mr-4 mb-2"
                                        >
                                            {locations.map((location, index) => (
                                                <option key={index} value={location}>{location}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-start space-x-6 text-white text-sm border-b-[0.5px] border-white border-opacity-50 mb-4">
                                    <span className="custom-rank">Rank</span>
                                    <span className="custom-followers">Followers</span>
                                    <span className="custom-category">Category</span>
                                    <span className="custom-user">User</span>
                                    <span className="custom-location">Location</span>
                                    <span className="custom-inventory">Inventory</span>
                                    <span className="custom-status">Status</span>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="min-w-full table-fixed text-white text-sm marketplace-table">
                                    <tbody>
                                        {filteredSales.slice(0, 10).map((sale, index) => (
                                            <tr key={index} className="table-hover" onClick={() => setSelectedSale(sale)}>
                                                <td className="text-center">{sale.rank}</td>
                                                <td className="text-center align-middle">
                                                    <div className="flex items-center justify-center">
                                                        {sale.watchers}
                                                        <img src="src/images/follow icon.png" alt="Follow Icon" className="ml-1" style={{ verticalAlign: 'middle', width: '24px', height: '24px' }} />
                                                    </div>
                                                </td>
                                                <td className="text-center">{sale.category}</td>
                                                <td className="text-center align-middle">
                                                    <span className="flex items-center justify-center">
                                                        {sale.user}
                                                        {sale.verified && <img src="src/images/blue tick copy.png" alt="Verified" className="ml-1" style={{ verticalAlign: 'middle', width: '16px' }} />}
                                                    </span>
                                                    <div className="flex justify-center">
                                                        {Array(5).fill(0).map((_, starIndex) => (
                                                            <span key={starIndex} className={`text-${starIndex < sale.starRating ? 'gold' : 'transparent-gray'}`}>
                                                                ★
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="text-center">{sale.location}</td>
                                                <td className="text-center">{sale.inventory}</td>
                                                <td className="text-center">{isActive ? 'Active' : `Starting in ${formatTime(timeUntilNextFriday)}`}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            
        </div>
    </div>
);
}

export default MarketPlace;