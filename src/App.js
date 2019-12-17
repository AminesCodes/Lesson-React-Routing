import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Blog from "./Components/Blog";
import ErrorNotFound from "./Components/ErrorNotFound";

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

      <Switch>
        {/* // Switch get rid of exct<Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/blog" component={Blog} />
        <Route exact component={ErrorNotFound} />
      </Switch>
    </div>
  );
};

export default App;
