import { useParams } from 'react-router-dom';
import { useGetTodosByUserIdQuery } from '../../entities/todo/api/todosApi';
import './UserTodosPage.css'

export function UserTodosPage() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  useGetTodosByUserIdQuery(userId);
    const { data: todos, isLoading } = useGetTodosByUserIdQuery(userId);   

  if (isLoading || !todos) return <div>Загрузка...</div>;

  return (
    <ul className="toDoList">
      <h1>ToDo</h1>
      {
        todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'todosLi green' : 'todosLi red'}>
            <p>{todo.title}</p>
            <p>Завершено: {todo.completed ? 'да' : 'нет'}</p>
          </li>
        )
        )
      }
    </ul>
  );
}