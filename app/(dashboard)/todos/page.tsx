import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany({});
  console.log(todos);

  return todos;
};

const TodosPage = async () => {
  const todos = await getData();
  return (
    <div>
      <h1>Todos Page</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
