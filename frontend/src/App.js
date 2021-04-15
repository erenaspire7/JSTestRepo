import "./App.css";
import "./App.sass";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Storyscreen from "./screens/StoryScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/:id" component={Storyscreen} />
      </div>
    </Router>
  );
}

export default App;
