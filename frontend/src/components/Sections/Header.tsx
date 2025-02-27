import TopBar from "../UI/TopBar";
import MovieGallery from "../UI/MovieGallery";
import Button from "../UI/Button";
import play_svg from "../../assets/icons/play.js";

import Wave from "../../assets/wave.png";

const Header: React.FC = () => {
    return (
        <header id="header">
            <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
                <div className="container relative z-10">
                    <TopBar />
                </div>
                <MovieGallery />
                <div className="container relative z-10 mt-auto">
                    <div className="max-w-5xl mx-auto py-16 flex flex-col items-center">
                        <h1 className="h1">The Best Streaming Experience</h1>
                        <p className="mt-8 text-gray-5 text-center">
                            StreamVibe is the best streaming experience for
                            watching your favorite movies and shows on demand,
                            anytime, anywhere. With StreamVibe, you can enjoy a
                            wide variety of content, including the latest
                            blockbusters, classic movies, popular TV shows, and
                            more. You can also create your own watchlists, so
                            you can easily find the content you want to watch.
                        </p>
                        <Button
                            className={"mt-12"}
                            svg={play_svg}
                            text={"Start Watching Now"}
                        />
                    </div>
                </div>
            </div>
            <img
                src={Wave}
                alt="wave"
                className="absolute top-0 left-0 opacity-30"
            />
        </header>
    );
};

export default Header;
