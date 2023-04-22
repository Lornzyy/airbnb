import React from "react"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import Card from "./components/Card"
import Data from "./components/Data"

export default function App(){

  
  return (
    <div>
        <Navbar />
        <Grid />
        <Card
          img = "/japan-forest.png"
          rating = "5.0"
          reviewCount= "6"
          location = "Japan"
          title = "The magical forest that makes fantasies come true"
          price = "136"
        />
        <Card
          img = "/japan-forest.png"
          rating = "5.0"
          reviewCount= "6"
          location = "Japan"
          title = "The magical forest that makes fantasies come true"
          price = "136"
        />
        <Card
          img = "/japan-forest.png"
          rating = "5.0"
          reviewCount= "6"
          location = "Japan"
          title = "The magical forest that makes fantasies come true"
          price = "136"
        />
    </div>
  );

}