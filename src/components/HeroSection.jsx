import React from "react";
import GetStartedButton from "../components/GetStartedButton"; // Adjust the path as needed

const customShadow = {
    boxShadow: "4px 5px 5px rgba(0, 0, 0, 0.5)"
  };

const HeroSection = () => {
    return (
        <section className="px-24 py-12 mr-10 mt-5 text-white flex">
            <div className="mt-4">
                <div className="flex flex-col space-y-3">
                    <h2 className="text-7xl font-integralcf-extrabold text-[#F5BD08]">GLOBAL</h2>
                    <h2 className="text-7xl font-integralcf-extrabold text-white">TRADING</h2>
                    <h2 className="text-7xl font-integralcf-extrabold text-[#F5BD08]">GATEWAY.</h2>
                </div>
                <p className="text-lg font-integralcf-extrabold w-full mt-8 tracking-wider">
                    PURPOSE BUILT MARKETPLACE FOR THE COLLECTIBLE COMMUNITY. 
                    <div className="block">
                        BUILT FOR CLAIM SELLERS & STREAMERS.
                    </div>
                </p>
                <div className="flex justify-between w-full mt-20">
                    {/* stat card */}
                    <div className="bg-[#090A35] rounded-xl flex items-center space-x-4 px-4 py-4 shadow-lg" style={customShadow}>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-integralcf-extrabold tracking-wider">18k</h3>
                            <p className="text-sm text-gray-400">Items Listed</p>
                        </div>
                        <img src="src/images/Auction Icon.png" alt="Auction Icon" className="w-8 h-8" />
                    </div>
                    {/* stat card */}
                    <div className="bg-[#090A35] rounded-xl flex items-center space-x-4 px-4 py-4" style={customShadow}>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-integralcf-extrabold tracking-wider">5678</h3>
                            <p className="text-sm text-gray-400">Active Members</p>
                        </div>
                        <img src="src/images/Active Members Icon.png" alt="Active Members Icon" className="w-8 h-8" />
                    </div>
                    {/* stat card */}
                    <div className="bg-[#090A35] rounded-xl flex items-center space-x-4 px-4 py-4" style={customShadow}>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-integralcf-extrabold tracking-wider">2416</h3>
                            <p className="text-sm text-gray-400">Streams Completed</p>
                        </div>
                        <img src="src/images/Stream Icon.png" alt="Stream Icon" className="w-9 h-9 mb-2" />
                    </div>
                </div>
                {/* CTA */}
                <div className="mt-16 flex items-center justify-center">
                    <GetStartedButton text="GET STARTED" className="" />
                </div>
            </div>
            {/* Hero Image */}
            <div style={{ width: '750px', height: '700px' }} className="ml-auto">
                <img src="src/images/Hero Image 2.png" alt="hero-image" style={{ width: '100%', height: '100%' }} />
            </div>
        </section>
    );
}

export default HeroSection;