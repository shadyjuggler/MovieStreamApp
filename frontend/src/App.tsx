import Header from "./components/Sections/Header";

import CrossPlatform from "./components/Sections/CrossPlatform";
import FAQ from "./components/Sections/FAQ";


const App: React.FC = () => {

  return (
    <div className="bg-black-1 min-h-screen relative">
      <Header />
      <CrossPlatform/>
      <FAQ/>
    </div>
  )
}

export default App;
