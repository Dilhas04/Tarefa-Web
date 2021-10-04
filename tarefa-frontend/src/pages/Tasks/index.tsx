import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import api from '../../services/api';
import moment from 'moment';


interface ITask{
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}


const Tasks: React.FC = () => {
 
    const [tasks, setTasks] = useState<ITask[]>([])
 
    useEffect(() => {
        loadTasks()
    }, [])
 
    async function loadTasks() {
        const response = await api.get('/tasks')
        console.log(response);
        setTasks(response.data)
    }

    function formatDate (date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    
    return (
        <div className = "container">
            <br />
            <h1>Página de Tarefas</h1>
            <br />
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Títulos</th>
      <th>Data de Atualização</th>
      <th>Status</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
      {
          tasks.map(tasks => (
              <tr key={tasks.id}>
                <td>{tasks.id}</td>
                <td>{tasks.title}</td>
                <td>{formatDate(tasks.updated_at)}</td>
                <td>{tasks.finished ? "Finalizado" :
                "Pendente"}</td>
                <td>
                    <Button size="sm" variant="primary">Editar</Button>{''}
                    <Button size="sm" variant="success">Finalizar</Button>{''}
                    <Button size="sm" variant="warning">Vizualizar</Button>{''}
                    <Button size="sm" variant="danger">Remover</Button>{''}
                </td>
            </tr>
          ))
      }

    </tbody>
</Table>
</div>
    );
}

export default Tasks;