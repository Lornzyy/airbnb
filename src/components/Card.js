import React from "react"

export default function Card(props){
   return (
    <div className="card--container">
        <div className="card">
            <img alt="japan forest" className="card--img" src={require(`../images${props.img}`)} />
            <div className="card--stats">
                <img alt="star" src={require("../images/star.png")} className="star"/>
                <p className="card--location">{props.location}</p>
                <p className="card--reviewCount">({props.reviewCount})</p>
                <p className="card--rating">{props.rating}</p>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">For <span><strong>${props.price}</strong></span> / person</p>

        </div>
    </div>
   );
}