import platformData from "../BoilerplateData/platforms";

import { generateKey } from "../../helpers/generateKey";

const CrossPlatform: React.FC = () => {
    return (
        <section id="crossplatform" className="py-24">
            <div className="container mx-auto">
                <div className="m-w-6xl">
                    <h2 className="h2">
                        We Provide you streaming experience across various
                        devices.
                    </h2>
                    <p className="mt-8 text-gray-5">
                        With StreamVibe, you can enjoy your favorite movies and
                        TV shows anytime, anywhere. Our platform is designed to
                        be compatible with a wide range of devices, ensuring
                        that you never miss a moment of entertainment.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {platformData.map((platform) => (
                        <div key={generateKey()} className="flex flex-col gap-8 rounded-xl border-2 border-black-2 p-8 red-gradient-bg cursor-pointer">
                            <div className="flex gap-4 items-center">
                                <div className="flex justify-center items-center border-1 border-black-2 p-3 rounded-xl bg-black-1 w-16 h-16">
                                    <img
                                        src={platform.icon}
                                        alt="icon"
                                        className="scale-80"
                                    />
                                </div>
                                <p className="text-lg text-white">
                                    {platform.title}
                                </p>
                            </div>
                            <p className="mt-8 text-gray-5">{platform.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CrossPlatform;
