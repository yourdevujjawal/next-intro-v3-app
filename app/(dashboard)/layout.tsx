import NewTodoForm from '@/components/NewTodoForm';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>Dashboard Layout</h1>
      </header>
      <div>
        <NewTodoForm />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
