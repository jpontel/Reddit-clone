import './App.css'
import Navbar from "./components/navbar";
import Home from "./pages/home";
import {Fragment} from "react";
import LeftMenu from "./components/left-menu";

function App() {

    return (
        <Fragment>
            <Navbar/>
            <div className="flex h-full">
                <LeftMenu />
                <Home />
            </div>
        </Fragment>
    );
}

export default App
