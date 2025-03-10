import { useState } from "react";

import ImageGrid from "./ImageGrid";
import HeaderLogo from "../../assets/header-logo.svg";

const MovieGallery: React.FC = () => {
    return (
        <div
            className="absolute top-0 lef-0 py-4 h-full overflow-y-hidden pointer-events-none"
            style={{ width: "115%" }}
        >
            <ImageGrid width={44} height={44} count={33} />
            <span className="h-3/5 w-full absolute top-0 left-0 bg-gradient-to-b from-[#141414] to-transparent"></span>
            <span className="h-3/5 w-full absolute top-2/5 left-0 bg-gradient-to-t from-[#141414] to-transparent"></span>
            <div className="absolute top-0 left-0 w-full h-4/5 flex justify-center">
                <img className="w-80" src={HeaderLogo} alt="wave" />
            </div>
        </div>
    );
};

export default MovieGallery;
