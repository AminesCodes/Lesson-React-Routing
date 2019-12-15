import React from "react";
import { Link, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Blog from "./Components/Blog";

const App = () => {
  const style = { margin: "5px" };
  return (
    <div className="App">
      <nav>
        <Link style={style} to="/">
          Home
        </Link>
        <Link style={style} to="/about">
          About
        </Link>
        <Link style={style} to="/skills">
          Skills
        </Link>
        <Link style={style} to="/blog">
          Blog
        </Link>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/blog" component={Blog} />
    </div>
  );
};

export default App;
