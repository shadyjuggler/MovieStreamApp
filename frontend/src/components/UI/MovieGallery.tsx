import { useState, useEffect } from "react";

import Wave from "../../assets/wave.png";
import HeaderLogo from "../../assets/header-logo.svg"

const MovieGallery: React.FC = () => {
    const [imageList, setImageList] = useState<string[]>([]);
    const images = import.meta.glob("/src/assets/header_imgs/*.jpg");

    useEffect(() => {
        Promise.all(
            Object.values(images).map((importImage: any) =>
                importImage().then((mod: any) => mod.default)
            )
        ).then(setImageList);

    }, []);

    return (
        <div className="absolute top-0 lef-0 py-4 h-full overflow-y-hidden pointer-events-none" style={{width: "115%"}}>
            <div className="flex flex-wrap gap-3 justify-center">
                {
                    imageList.map((imagePath, i) => {
                        return <div key={i} className="rounded-md w-50 h-50 bg-cover bg-center" style={{ backgroundImage: `url(${imagePath})` }}></div>
                    })
                }
            </div>
            <span className="h-3/5 w-full absolute top-0 left-0 bg-gradient-to-b from-[#141414] to-transparent"></span>
            <span className="h-3/5 w-full absolute top-2/5 left-0 bg-gradient-to-t from-[#141414] to-transparent"></span>
            <img src={Wave} alt="wave" className="absolute top-0 left-0 opacity-20" />

            <div className="absolute top-0 left-0 w-full h-4/5 flex justify-center">
                <img className="w-80" src={HeaderLogo} alt="wave" />
            </div>
        </div>
    )
}

export default MovieGallery;
