import { useState } from 'react'
const Home = () => {
 
    const [name, setName] = useState('danny')
    const [age, setAge] = useState(20)
    
    const handleClick = () => {
       setName('daniel')
       setAge(21)
    }
    return (
        <div className="home">
            <h2> Who is Coding </h2>
            <p> {name} is {age} </p>
            <button onClick={handleClick}> Click Me</button>
        </div>
    );
};
export default Home;