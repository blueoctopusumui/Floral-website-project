import {useState, useEffect} from "react";
import PropTypes from "prop-types";
import FlowerCard from "./FlowerCard";
import flowers from "../data/flowers";

function FlowerList({onAdd})
{
    const [filter, setFilter]=useState("all");

    useEffect(()=>
        {
        let label;
        if(filter==="all")
        {
            label="All Flowers";
        }
        else
        {
            let firstLetter = filter[0].toUpperCase();
            let rest = filter.slice(1);
            label = firstLetter + rest + " Flowers";
        }
        document.title="Hawaii Floral Studio | "+label;

    },[filter]);

    let filteredFlowers;
    if(filter==="all")
    {
        filteredFlowers=flowers;
    }
    else
    {
        filteredFlowers=[];
        for(let i=0;i<flowers.length;i++)
        {
            let flower=flowers[i];
            if(flower.color===filter){
                filteredFlowers.push(flower);
            }
        }
    }

    return(
        <div>
            <div className="filter-container">
                <button
                className={`filter-btn ${filter==="all" ? "active" : ""}`}
                onClick={()=> setFilter("all")}>All</button>
                <button
                className={`filter-btn ${filter==="red" ? "active" : ""}`}
                onClick={()=> setFilter("red")}>Red</button>
                <button
                className={`filter-btn ${filter==="blue" ? "active" : ""}`}
                onClick={()=> setFilter("blue")}>Blue</button>
                <button
                className={`filter-btn ${filter==="pink" ? "active" : ""}`}
                onClick={()=> setFilter("pink")}>Pink</button>
                <button
                className={`filter-btn ${filter==="yellow" ? "active" : ""}`}
                onClick={()=> setFilter("yellow")}>Yellow</button>
            </div>
            <div className="flowers-grid">
                {filteredFlowers.map((flower)=>(
                    <FlowerCard
                    key={flower.id}
                    flower={flower}
                    onAdd={onAdd}
                    />
                ))}
            </div>
        </div>
    );
}

FlowerList.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default FlowerList;