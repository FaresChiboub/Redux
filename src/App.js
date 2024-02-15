// App.js
import React from 'react';
import AddTask from './Addtask';
import ListTask from './ListTask';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <div className="container"> {/* Apply container style */}
      <div className="content"> {/* Apply content style */}
        <AddTask />
        <h1>Task List</h1>
        <ListTask />
      </div>
    </div>
  );
}

export default App;
