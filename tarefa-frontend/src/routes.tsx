import React from "react";
import { Switch, Route} from "react-router";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

const Routes: React.FC = () => {
    return(
        <switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/tarefas" exact component={Tasks}></Route>
        </switch>
    );
}

export default Routes;