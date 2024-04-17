import './App.css'
import Navbar from "./components/navbar";
import Home from "./pages/home";
import {Fragment} from "react";

function App() {

    return (
        <Fragment>
            <Navbar/>
            <Home/>
        </Fragment>
    )
}

export default App
