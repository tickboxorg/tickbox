import React from "react";

// Define props for the PageHeader component
interface TodolistTitleProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  color: string;
}

// PageHeader component
export const TodoListTitle: React.FC<TodolistTitleProps> = ({
  icon: Icon,
  title,
  color,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Icon className={`w-6 h-6 text-${color}-500`} />
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
    </div>
  );
};
