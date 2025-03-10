import Header from "./components/Sections/Header";

import CrossPlatform from "./components/Sections/CrossPlatform";
import FAQ from "./components/Sections/FAQ";
import SelectPlan from "./components/Sections/SelectPlan";
import Promo from "./components/Sections/Promo";

const App: React.FC = () => {
    return (
        <div className="bg-black-1 min-h-screen relative">
            <Header />
            <CrossPlatform />
            <FAQ />
            <SelectPlan />
            <Promo />
        </div>
    );
};

export default App;
