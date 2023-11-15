import React from 'react';
import addButtonImage from "../images/Add Button.png"; // Update the path as needed

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return timeLeft;
};

const Upcoming = () => {
    const targetDate = new Date('December 31, 2023 23:59:59').getTime();
    const timeLeft = CountdownTimer({ targetDate });

    return (
        <div className="bg-[rgba(8, 11, 58, 0)] mt-8 mb-8 ml-">
            <h2 className="text-xl text-[#f3b80e] font-semibold font-integralcf-extraboldoblique mb-0 ml-44">Upcoming</h2>
            <div className="flex justify-center items-center">
                <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-32">
                    <div className="default-card">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.days}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Days</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.hours}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Hours</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.minutes}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Minutes</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.seconds}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Seconds</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <img src={addButtonImage} alt="Add Button" width="40" height="40" className="cursor-pointer m-auto" />
                        </div>
                        <div className="card-title">24hr flash sale</div>
                    </div>

                    <div className="default-card">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.days}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Days</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.hours}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Hours</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.minutes}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Minutes</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.seconds}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Seconds</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <img src={addButtonImage} alt="Add Button" width="40" height="40" className="cursor-pointer m-auto" />
                        </div>
                        <div className="card-title">mid-week claim sale</div>
                    </div>

                    <div className="default-card">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.days}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Days</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.hours}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Hours</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.minutes}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Minutes</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.seconds}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Seconds</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <img src={addButtonImage} alt="Add Button" width="40" height="40" className="cursor-pointer m-auto" />
                        </div>
                        <div className="card-title">weekend claim sale</div>
                    </div>

                    <div className="default-card">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.days}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Days</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.hours}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Hours</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.minutes}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Minutes</div>
                                </div>
                            </div>
                            <div className="mt-8 half-vertical-gradient">
                                <div className="text-center">
                                    <div className="text-xl font-bold mt-3"style={{ color: '#120f5e' }}>{timeLeft.seconds}</div>
                                    <div className="text-sm mt-4 text-center text-white font-integralcf-regular" style={{fontSize: '9px'}}>Seconds</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <img src={addButtonImage} alt="Add Button" width="40" height="40" className="cursor-pointer m-auto" />
                        </div>
                        <div className="card-title">monthly auction</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upcoming;
