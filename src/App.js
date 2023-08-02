import React, { useState } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
function App() {
  const [searchField, setSearchField] = useState("");
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <div className="tc bg-black">
      <header className="bg-black pa3">
        <h1 className="white f1 ma0">ROBO-FRIENDS</h1>
        <SearchBox searchfield={searchField} searchChange={onSearchChange} />
      </header>
      <main>
        <CardList robots={filteredRobots} />
      </main>
    </div>
  );
}
export default App;
