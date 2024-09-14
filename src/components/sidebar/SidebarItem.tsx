import React from "react";

interface SidebarItemProps {
  icon: JSX.Element;
  label: string;
  count?: number;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  count,
}) => {
  return (
    <div className="flex items-center justify-between py-2 px-4 hover:bg-slate-200 dark:hover:bg-zinc-800 cursor-pointer rounded-md">
      <div className="flex items-center">
        {icon}
        <span className="ml-2 text-sm font-semibold text-slate-800 dark:text-white">
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className="text-zinc-400 text-sm font-semibold">{count}</span>
      )}
    </div>
  );
};
