import React from "react"

export default function Hero() {
    
    return (
        <section className="hero">
           
            <input className="nosubmit" type="search" placeholder="Search..."/>
            
            <div className="dropdown">
                <select id="regions" className="reg" name="regions" text="Filter by a region">
                    <option value="all">All Regions</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europ</option>
                    <option value="america">America</option>
                    <option value="africa">Africa</option>
                </select>
           </div>
        </section>
    )
}