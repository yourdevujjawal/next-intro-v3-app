'use client';
import { completeTodo } from '@/utils/actions';
import { useTransition } from 'react';

interface TodoProps {
  todo: {
    content: string;
    id: string;
    completed: boolean;
  };
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-600' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
