import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import ToDo from "./components/ToDo";
import ContentCard from "./components/ContentCard";
import Product from "./components/Product";
import productsData from "./components/vschoolProducts";

function App() {
  const list = productsData.map(item => <Product key = {item.id} product = {item} />)
  return (
    <div>
      {list}
    </div>
  );
}

export default App;
