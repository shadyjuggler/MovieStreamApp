import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Bell from "../../assets/bell.svg";

import NavBar from "./NavBar";

const TopBar: React.FC = () => {

  return (
    <div className="relative z-10 flex py-6 items-center">
      <div className="basis-1/3">
        <img src={Logo} alt="logo" />
      </div>
      <div className="basis-1/3">
        <NavBar />
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
  )
}

export default TopBar;
