import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import ToDo from "./components/ToDo";
import ContentCard from "./components/ContentCard";

function App() {
  return (
    <div>
      <ContentCard 
      contact = {{
        name: "Mr Whiskers", 
        imgUrl: "http://placekitten.com/300/200",
        phone: "07392824961",
        email: "seas@hott.com"
      }}
      />
      <ContentCard 
      contact = {{
        name: "Mr Whiskers", 
        imgUrl: "http://placekitten.com/300/200",
        phone: "07392824961",
        email: "seas@hott.com"
      }}
      />
      <ContentCard 
      contact = {{
        name: "Mr Whiskers", 
        imgUrl: "http://placekitten.com/300/200",
        phone: "07392824961",
        email: "seas@hott.com"
      }}
      />
    </div>
  );
}

export default App;
