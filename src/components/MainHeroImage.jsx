

import Lottie from 'lottie-react';

import hero3 from '../../public/assets/gifs/hero3.json';

const MainHeroImage = () => {
    return (
        <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Lottie animationData={hero3} loop={true} />
        </div>
    );
};

export default MainHeroImage;
