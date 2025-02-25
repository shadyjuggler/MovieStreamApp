import TopBar from "../UI/TopBar";
import MovieGallery from "../UI/MovieGallery";

const Header: React.FC = () => {

    return (
        <div className="relative min-h-screen flex justify-center overflow-x-hidden">
            <div className="container">
                <TopBar />
            </div>
            <MovieGallery />
        </div>
    )
}

export default Header;
