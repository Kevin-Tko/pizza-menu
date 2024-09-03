//Make necessary imports
import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

//Application Data
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

//create the App component
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

//create header component
function Header() {
    return (
        <header className="header">
            <h1>Epic Crust Pizza Hub</h1>
        </header>
    );
}

//create Menu component
function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const pizzasLength = pizzas.length;

    return (
        <main>
            <div className="menu">
                <h2>Our Menu</h2>
                {pizzasLength > 0 ? (
                    <React.Fragment>
                        <p>
                            Authentic Kenyan cuisine. Multiple reative dishes to
                            choose from. All from our stone Oven.
                        </p>
                        <ul className="pizzas">
                            {pizzas.map((pizza) => (
                                <Pizza pizzaObj={pizza} key={pizza.name} />
                            ))}
                        </ul>
                    </React.Fragment>
                ) : (
                    <p>Were are out of stock</p>
                )}
            </div>
        </main>
    );
}

//create pizza component
function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

//Create footer component
function Footer() {
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString()
    );

    setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    const hour = new Date().getHours();
    const openingHours = 7,
        closingHours = 22;

    const isOpen = hour >= openingHours && hour < closingHours;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order timeCurrent={currentTime} timeClosing={closingHours} />
            ) : (
                <p>
                    {currentTime}. Sorry😔, We're currently closed. We will be
                    open tomorrow at {openingHours}:00 am.
                </p>
            )}
        </footer>
    );
}

function Order({ timeCurrent, timeClosing }) {
    return (
        <div className="order">
            <p>
                {timeCurrent}. We are currently open till ${timeClosing}:00 pm
                ⏱. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

//create root element where to render the output pf APP
const root = ReactDOM.createRoot(document.getElementById("root")); //Div in index.html public folder

//Render on the root element and enable strict mode
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
