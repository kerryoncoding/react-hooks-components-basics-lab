import React from "react";
import NavBar from "./Navbar";
import Home from "./Home";

// function NavBar() {
//   return (
//     <nav>
//       <a href="#home">I'm a link!</a>
//     </nav>
//   );
// }

// function Home() {
//   return (
//     <div id="home">
//       <h1>Home</h1>
//     </div>
//   );
// }

function About(){
  return(
    <div>
      <h2 id="about">About</h2>
    </div>
  )
}



function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
