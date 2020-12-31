import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <span> React Base Project With Webpack!</span>
      <i className="fas fa-user"/>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));