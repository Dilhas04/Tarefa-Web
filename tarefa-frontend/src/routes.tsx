import React from "react";
import { Switch, Route} from "react-router";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TasksForm from './pages/Tasks/Form';


const Routes: React.FC = () => {
    return(
        <switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/tarefas" exact component={Tasks}></Route>
            <Route path="/tarefas_cadastro" exact component={TasksForm} />
            <Route path="/tarefas_cadastro/:id" exact component={TasksForm} />

        </switch>
    );
}

export default Routes;