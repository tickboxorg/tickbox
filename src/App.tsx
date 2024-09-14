import { TodoList } from "./components/TodoList";
import { Sidebar } from "./components/sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 grid grid-cols-[14rem_1fr] h-screen items-start">
      <Sidebar />
      <TodoList pageTitle="Today" />
    </div>
  );
};

export default App;
