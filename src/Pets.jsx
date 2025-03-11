import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/pets")
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