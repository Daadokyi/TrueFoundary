import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./Components/Header";
import { DndProvider } from "react-dnd";
import Backendd from "react-dnd-html5-backend";


const App = () => {
    return (
        <DndProvider Backend={Backendd}>
            <Header/>
             <Homepage />
        </DndProvider>
        
    );
};

export default App;