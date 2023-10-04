import { BellIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";

interface UserNavProps {
  props: string
}

const UserNav: React.FC<UserNavProps> = ({ props }: UserNavProps) => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="flex items-center justify-center text-gray-700 hover:text-gray-400 bg-white h-16 w-16 rounded-xl"
      >
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="h-11 w-6 bg-white" />
      <button
        type="button"
        className="flex items-center justify-center text-gray-700 hover:text-gray-400 bg-white h-16 w-16 rounded-xl"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="h-11 w-6 bg-white" />
      <a
        href="#"
        className="flex items-center justify-center text-gray-700 bg-white h-16 w-16 rounded-xl"
      >
        <UserCircleIcon
          className="h-10 w-10 text-gray-700 bg-[#39ab83] rounded-full hover:text-gray-400"
          aria-hidden="true"
        />
      </a>
    </div>
  );
};
export default UserNav;
