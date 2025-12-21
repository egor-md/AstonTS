import './toDoCard.css'
import type { Todo } from '../model/types';

type Props = {
    todo: Todo
    isLoading?: boolean
}

export function ToDoCard({ todo, isLoading }: Props) {

    if (!todo || isLoading) {
        return <div>Загрузка...</div>;
    }
    return (
        <>
            <div className={todo.completed ? 'todosLi green' : 'todosLi red'}>
            <p>{todo.title}</p>
            <p>Завершено: {todo.completed ? 'да' : 'нет'}</p>
          </div>                  
        </>
    )
}