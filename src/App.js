import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Back to the kitchen');

    function handleChange(event) {
        setTitle(event.target.value);
    }

    let message;
    if (title.length < 5) {
        message = "Tutuł jest za krótki. Nagrywają takie filmy?";
    } else if (title.length < 15) {
        message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
    } else {
        message = "Tytuł niczym z inwazji jakotakich na takowych.";

    }

// ...
    {
        title.length > 0 && <div>{message}</div>
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>Movie to watch today</h2>
            <div>{message}</div>
            <input type="text" value={title} onChange={handleChange}/>
            <button type="button" onClick={() => alert(title)}>
                Pokaż tytuł filmu
            </button>
        </div>);

}
export default App;
