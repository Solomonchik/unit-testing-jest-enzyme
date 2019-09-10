import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";

const tempArr = [
  {
    fName: "Viktor",
    lName: "Zimmermann",
    email: "example@gmail.com",
    age: 33,
    onlineStatus: false
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main" data-test="main">
        <Headline
          header={"Posts"}
          description={"Click the button to render props"}
          temArray={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
