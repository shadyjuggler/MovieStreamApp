import Header from "./components/Sections/Header";

import CrossPlatform from "./components/Sections/CrossPlatform";
import FAQ from "./components/Sections/FAQ";
import SelectPlan from "./components/Sections/SelectPlan";

const App: React.FC = () => {
    return (
        <div className="bg-black-1 min-h-screen relative">
            <Header />
            <CrossPlatform />
            <FAQ />
            <SelectPlan />
        </div>
    );
};

export default App;
