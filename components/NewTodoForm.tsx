import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <form action={newTodo}>
      <input
        type="text"
        className="border border-gray-500"
        placeholder="Enter a new todo"
        name="content"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
