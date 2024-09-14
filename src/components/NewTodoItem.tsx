import React from "react";
// import {
//   CalendarIcon,
//   TagIcon,
//   ListBulletIcon,
//   FlagIcon,
// } from "@heroicons/react/24/outline";

import { useKeyboard } from "../hooks/useKeyboard";

interface NewTodoItemProps {
  onAdd: (title: string, notes: string) => void;
  onClose: () => void;
}

export const NewTodoItem: React.FC<NewTodoItemProps> = ({ onAdd, onClose }) => {
  const [title, setTitle] = React.useState<string>("");
  const [notes, setNotes] = React.useState<string>("");

  useKeyboard({
    onEnter: () => {
      if (title.trim().length > 0) {
        onAdd(title, notes);
        setTitle("");
        setNotes("");
      }
    },
    onEscape: () => {
      setTitle("");
      setNotes("");
      onClose();
    },
  });

  return (
    <div className="bg-white dark:bg-zinc-700 rounded-lg border border-gray-200 dark:border-zinc-900 p-4 flex justify-between items-center w-full mt-4">
      <div className="flex items-start space-x-2 w-full">
        {/* <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-gray-600 rounded"
        /> */}

        <div className="w-full">
          <input
            type="text"
            placeholder="New To-Do"
            className="text-gray-800 dark:text-white dark:bg-zinc-700 text-sm font-base outline-none w-full mb-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="text-gray-500 dark:text-gray-400 dark:bg-zinc-700 text-sm outline-none w-full"
          ></textarea>
        </div>
      </div>

      {/* <div className="flex space-x-4 text-gray-400"> */}
      {/* <CalendarIcon className="w-5 h-5" />
        <TagIcon className="w-5 h-5" />
        <ListBulletIcon className="w-5 h-5" />
        <FlagIcon className="w-5 h-5" /> */}
      {/* </div> */}
    </div>
  );
};
