import React, { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard";

interface TodoItemProps {
  idx: number;
  title: string;
  completedAt: string;
  onComplete: (idx: number) => void;
  onCancel: (idx: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  idx,
  title,
  completedAt,
  onComplete,
  onCancel,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(completedAt !== "");
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    if (isChecked) {
      setTimeout(() => onComplete(idx), 500);
    }
  }, [isChecked]);

  useKeyboard({
    // onOptionCommandPeriod() {
    //   onCancel(idx);
    // },
  });

  return (
    <li className={`flex items-center p-2 cursor-pointer`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        onClick={(e) => e.stopPropagation()} // prevent li selection when checkbox is clicked
        className="form-checkbox mr-2 h-4 w-5 text-gray-600"
      />
      <label
        className={`text-sm text-gray-800 ${
          isChecked ? "line-through text-gray-400" : ""
        }`}
      >
        {title}
      </label>
    </li>
  );
};
