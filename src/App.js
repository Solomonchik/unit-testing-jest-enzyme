import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main" data-test="main">
        <Headline header={'Posts'} description={'Click the button to render props'}/>
      </section>
    </div>
  );
}

export default App;
