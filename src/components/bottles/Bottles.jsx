import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [purchasedBottles, setPurchasedBottles]= useState([]);
    useEffect(() => {
        const url = 'bottles.json';
        const fetchFunction = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setBottles(data)
        }
        fetchFunction();
    }, [])
    const handlePurchase = (bottle) =>{
        const newPurchasedBottles = [...purchasedBottles, bottle];
        setPurchasedBottles(newPurchasedBottles);
    }
    return (
        <div>
            <h1>Bottles Here: {bottles.length}</h1>
            <h3>Purchased Bottles: {purchasedBottles.length}</h3>
            <ul>
                {
                    purchasedBottles.map((bottle, index)=> (
                        <li key= {index}>{bottle.name}</li>
                    ))
                }
            </ul>
            <div className="bottle-container">
                {
                    bottles.map((bottle) => (
                    <Bottle
                    key ={bottle.id}
                    bottle={bottle}
                    handlePurchase= {handlePurchase}
                    />))
                }
            </div>
        </div>
    );
};

export default Bottles;