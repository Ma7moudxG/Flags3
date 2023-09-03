import React from "react"
import ReactDOM from 'react-dom/client'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero.js"
import Card from "./components/Card"
import data from "./data"


export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}