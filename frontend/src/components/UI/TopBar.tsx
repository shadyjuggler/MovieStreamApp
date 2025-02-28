import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Bell from "../../assets/bell.svg";

import Tabs from "./Tabs";

const TopBar: React.FC = () => {
    return (
        <div className="flex py-6 items-center">
            <div className="basis-1/3">
                <img src={Logo} alt="logo" />
            </div>
            <div className="basis-1/3">
                <Tabs>
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
                </Tabs>
            </div>
            <div className="basis-1/3 justify-end flex gap-4">
                <button>
                    <img src={Search} alt="" />
                </button>
                <button>
                    <img src={Bell} alt="" />
                </button>
            </div>
        </div>
    );
};

export default TopBar;
