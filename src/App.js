import React, { useState, useEffect } from 'react';
import List from './components/List';
import Search from './components/Search';
import './styles.css'; // Import the CSS file

const App = () => {
  const [items, setItems] = useState([]); // Update to initialize 'items' state variable with an empty array
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from API and extract 'id' and 'name' fields
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const extractedData = data.map(user => ({ id: user.id, name: user.name }));
        setItems(extractedData);
      })
      .catch(error => console.error(error));
  }, []); // Empty dependency array to fetch data only on component mount

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    // <div className="container" style={{background:"", marginTop:"5%",borderRadius:"2px",  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
     <div className="container" style={{background:"", marginTop:"5%",borderRadius:"2px",  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}> 
   
      <h1 style={{color:"lightgray"}}>Assignmet 6</h1>
      <hr />
      <Search handleSearch={handleSearch} />
      <List items={filteredItems} />
    </div>
  );
};

export default App;
