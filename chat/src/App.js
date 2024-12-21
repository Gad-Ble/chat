import logo from './logo.svg';
import './App.css';
import './reset.css';
import Header from "./Header/Header";
import Chat from './Chat/Chat';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Chat/>
            </div>
        </BrowserRouter>
    );
}

export default App;
