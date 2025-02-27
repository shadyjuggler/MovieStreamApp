import Header from "./components/Sections/Header";

import CrossPlatform from "./components/Sections/CrossPlatform";


const App: React.FC = () => {

  return (
    <div className="bg-black-1 min-h-screen relative">
      <Header />
      <CrossPlatform/>
    </div>
  )
}

export default App;
