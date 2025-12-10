import { useParams } from "react-router-dom";
import { useToDo } from "../../features/PostList/model/hooks/useToDo";
import './UserTodosPage.css'


export function UserTodosPage() {
  const { id } = useParams();

  const { data, loading, error } = useToDo(id);


  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Нет данных</div>;
  console.log(data);
  
  return (
    <ul className="toDoList">
      <h1>ToDo</h1>
      {
        data.map(todo => (
          <li key={todo.id} className='todosLi'>
            <p>{todo.title}</p>
            <p>Завершено: {todo.completed ? 'да'  : 'нет'}</p>
          </li>
        )
        )
      }
    </ul>
  );
}