import React from "react"



export default function Grid(){
    return (
        <section className="photogrid">
            <img className="photogrid--img " src={require("../images/photo-grid.png")}/>
            <h1 className="photogrid--header"> Online Experiences </h1>
            <p className="photogrid--text"> Join our unique interactive activities led by one-of-a-kind host all without leaving home.</p>
        
        </section>
    );
}