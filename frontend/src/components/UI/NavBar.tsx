import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Bell from "../../assets/bell.svg";

const NavBar: React.FC = () => {

    return (
        <div className="flex gap-2 p-2 border-2 border-black-2 rounded-md w-fit bg-black">
            <button className="navlink navlink_active">
                <p>Home</p>
            </button>
            <button className="navlink">
                <p>Movies & Shows</p>
            </button>
            <button className="navlink">
                <p>Support</p>
            </button>
            <button className="navlink">
                <p>Subscriptions</p>
            </button>
        </div>
    )
}

export default NavBar;
