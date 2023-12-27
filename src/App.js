import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

//console.log (getRandomAnimal());

function App () {
    //const [count,setCount] = useState(0);
    const [animals, setAnimals] = useState([]);

    //this function called event handler or callback function
    const handleClick = () => {
        //setCount(count + 1);
    //here we create brand new array ...animals = put all existing animals in it and getRandomAnimal() = get randomly generated animals to print(show)
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });
    
    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
                        //OR
        // <div>
        //     <button onClick = {() => console.log('Button was clicked!')}>
        //         Add Animal
        //     </button>
        // </div>
    );
}

export default App;