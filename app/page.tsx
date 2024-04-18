import NewTodoForm from '@/components/NewTodoForm';

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { data: ['1', '2', '3'] };
};

const Home = async () => {
  const data = await getData();

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
