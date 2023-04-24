import React from "react"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import Card from "./components/Card"
import data from "./components/Data"


export default function App(){
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            img={item.coverImg}
            description={item.description}
            title={item.title}
            location={item.location}
            reviewCount={item.stats.reviewCount}
            rating={item.stats.rating}
            price={item.price}
            
        />
    )
})        

  return (
    <div>
        <Navbar />
        <Grid />
        <section className="card--container">
        {cards}
        </section>
    </div>
  );

}