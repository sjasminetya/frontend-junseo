import React from "react";
import { ICONS, IMAGES } from "./configs";

function App() {
  return (
    <div className="App">
      <header className="flex">
        <img alt="" className="w-full h-20" src={IMAGES.AMERICANEXPRESS} />
        <img alt="" className="w-full h-20" src={ICONS.GIFT} />
      </header>
    </div>
  );
}

export default App;
