import React, { useEffect } from "react";

const App = () => {
  useEffect(() => console.log("1"), []);

  return <h2>test</h2>;
};

export default App;
