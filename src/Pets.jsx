import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BACKEND_URL from './config';
const Pets = () => {
    const [pets, setPets] = useState([]);
// comment
    useEffect(() => {
        axios.get(`${BACKEND_URL}pets`)
            .then(response => setPets(response.data))
            .catch(error => console.error("Error fetching pets:", error));
    }, []);

  return (
    <div>
            <h1>Pet Store</h1>
            <ul>
                {pets.map(pet => (
                    <li key={pet._id}>
                        <h2>{pet.name}</h2>
                        <p>{pet.description}</p>
                        <p>Price: ${pet.price}</p>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Pets