import { useParams } from 'react-router-dom';
import { useGetTodosByUserIdQuery } from '../../entities/todo/api/todosApi';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import type { Todo } from '../../entities/todo/model/types';
import { ToDoCard } from '../../entities/todo/ui/ToDoCard';

export function UserTodosPage() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  useGetTodosByUserIdQuery(userId);
  const { data: todos, isLoading } = useGetTodosByUserIdQuery(userId);

  if (isLoading || !todos) return <div>Загрузка...</div>;

  return (
    <ItemList<Todo>
      items={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={(todo) => <ToDoCard todo={todo} />}
    />
  );
}