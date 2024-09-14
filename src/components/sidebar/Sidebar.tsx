import {
  //   DocumentCheckIcon,
  //   InboxIcon,
  StarIcon,
  //   TrashIcon,
} from "@heroicons/react/24/solid"; // Import solid versions of icons
import { SidebarItem } from "./SidebarItem";

export const Sidebar: React.FC = () => {
  return (
    <div className="w-56 bg-slate-100 dark:bg-zinc-900 h-screen border-r border-gray-200 dark:border-gray-950">
      {/* <div className="py-4">
        <SidebarItem
          icon={<InboxIcon className="w-5 h-5 text-blue-500" />} // Use solid Heroicons' InboxIcon
          label="Inbox"
        />
      </div> */}

      <div className="py-4">
        <SidebarItem
          icon={<StarIcon className="w-5 h-5 text-yellow-500" />} // Use solid Heroicons' StarIcon
          label="Today"
          //   count={10}
        />
      </div>

      {/* <div className="py-4">
        <SidebarItem
          icon={<DocumentCheckIcon className="w-5 h-5 text-green-500" />} // Use solid Heroicons' StarIcon
          label="Logbook"
        />
        <SidebarItem
          icon={<TrashIcon className="w-5 h-5 text-gray-400" />} // Use solid Heroicons' StarIcon
          label="Trash"
        />
      </div> */}
    </div>
  );
};
