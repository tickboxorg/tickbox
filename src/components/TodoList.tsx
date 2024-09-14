import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoListTitle } from "./TodoListTitle";
import { NewTodoItem } from "./NewTodoItem";
import { InboxIcon, StarIcon } from "@heroicons/react/24/solid";
import { BottomBar } from "./bottombar/BottomBar";
import { useKeyboard } from "../hooks/useKeyboard";

interface TodoListProps {
  pageTitle: string;
}

export const TodoList: React.FC<TodoListProps> = ({ pageTitle }) => {
  const [showNewTodo, setShowNewTodo] = useState<boolean>(false);

  useEffect(() => {
    const todos = window.localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useKeyboard({
    onSpaceBar: () => setShowNewTodo(true),
  });

  const [todos, setTodos] = useState<{
    titles: string[];
    notes: string[];
    createdAt: string[];
    completedAt: string[];
    cancelledAt: string[];
    isDeleted: boolean[];
  }>({
    titles: [],
    notes: [],
    createdAt: [],
    completedAt: [],
    cancelledAt: [],
    isDeleted: [],
  });

  const handleCompletedTodoItem = (idx: number) => {
    const newTodos = { ...todos };
    newTodos.completedAt[idx] = new Date().toISOString();

    setTodos(newTodos);
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleCancelTodoItem = (idx: number) => {};

  const handleAddTodoItem = (title: string, notes: string) => {
    setShowNewTodo(false);
    const newTodos = {
      titles: [...todos.titles, title],
      notes: [...todos.notes, notes],
      createdAt: [...todos.createdAt, new Date().toISOString()],
      completedAt: [...todos.completedAt, ""],
      cancelledAt: [...todos.cancelledAt, ""],
      isDeleted: [...todos.isDeleted, false],
    };
    setTodos(newTodos);
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const iconFromPageTitle = (pageTitle: string) => {
    if (pageTitle === "Today") {
      return StarIcon;
    }

    if (pageTitle === "Inbox") {
      return InboxIcon;
    }

    return StarIcon;
  };

  const icon = iconFromPageTitle(pageTitle);

  return (
    <div
      className={`p-8 h-full ${
        showNewTodo ? "bg-slate-50 dark:bg-zinc-800" : ""
      }`}
    >
      <TodoListTitle icon={icon} title={pageTitle} color="yellow" />
      {showNewTodo && (
        <NewTodoItem
          onAdd={(title: string, notes: string) =>
            handleAddTodoItem(title, notes)
          }
          onClose={() => setShowNewTodo(false)}
        />
      )}
      <ul>
        {todos.titles.map((title, idx) => (
          <TodoItem
            idx={idx}
            key={idx}
            title={title}
            completedAt={todos.completedAt[idx]}
            onComplete={handleCompletedTodoItem}
            onCancel={handleCancelTodoItem}
          />
        ))}
      </ul>
      <BottomBar onPlusIconClick={() => setShowNewTodo(true)} />
    </div>
  );
};
