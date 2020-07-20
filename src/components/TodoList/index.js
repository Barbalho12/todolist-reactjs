import React, {useEffect} from 'react';
import API from '../../API';
import CreateTaskForm from '../../components/CreateTaskForm';
import BottomBar from '../../components/BottomBar';
import TaskList from '../../components/TaskList';
import AsyncService from '../../components/AsyncService';

const TodoList = ({block}) => {
    const [pageValue, setpageValue] = React.useState(0);
    const [listItens, setListItens] = React.useState([]);
    
    let temppageValue = 0;
  
    const update = () =>{
      if(temppageValue === 0){
        API.findAllByBlock(block).then(response => {
          response.json().then( list => {
            setListItens(list);
          });
        });
      } else if(temppageValue === 1){
        API.findAllLeftsByBlock(block).then(response => {
          response.json().then( list => {
            setListItens(list);
          });
        });
      } else if(temppageValue === 2){
        API.findAllCompletedsByBlock(block).then(response => {
          response.json().then( list => {
            setListItens(list);
          });
        });
      }
    }
  
    useEffect(() => {
      update();
    }, [])
  
    const checkAction = (task) => () => {
      task.completed = !task.completed;
      API.setCompleted(task.id, task.completed).then(response => {
        update();
      })
    };
  
    const createTask = (newTaskDescription) => {
      API.create(newTaskDescription, block).then( response => {
        update();
      });
    }
  
    const onPageChange = (event, newValue) => {
      setpageValue(newValue);
      temppageValue = newValue;
      update();
    }
  
    const deleteAction = (id) => {
      API.delete(id).then( response => {
        update();
      });
    }
  
    return (
      <div>
          <CreateTaskForm createTask={createTask} />
          <TaskList listItens={listItens} deleteAction={deleteAction} checkAction={checkAction} />
          <AsyncService onReceive={update}/>
          <BottomBar pageValue={pageValue} onPageChange={onPageChange}/>
        </div>
    );
}

export default TodoList;