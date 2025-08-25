import { ListsFriends } from "../../../data/listFriends";
import { Button } from "../../ui/Button";

interface Props {
  data?: any;
}


const TheRightAside = ({data}:Props) => {
  console.log("data dans TheRightAside =====>>>", data);
  return (
    <>
      <div className="group pt-6 pb-12 hidden md:flex items-end  xl:block w-full ">
        <div className="h-full overflow-hidden group-hover:overflow-y-auto pr-2 scrollbar-thin-fb">
          <div className="flex justify-between items-center px-4 pt-4">
            <span className="font-semibold text-gray-500 text-md dark:text-dark-txt">
              Firend requests
            </span>
            <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md">
              See All
            </span>
          </div>
          <div className="p-2 border-b">
            <a
              href="#"
              className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all"
            >
              <img
                src="src/assets/images/avt.jpg"
                alt="Profile picture"
                className="w-14 h-14 rounded-full"
              ></img>
              <div className="flex-1 h-full text-[14px]">
                <div className="dark:text-dark-txt">
                  <span className="font-semibold">Sakura Hinata</span>
                  <span className="float-right">6d</span>
                </div>
                <div className="lg:flex items-center justify-center gap-3 mt-2">
                  <Button
                    id="btn-confirm-friendship"
                    className="w-full lg:w-1/2 bg-blue-500 cursor-pointer py-1 mb-1 text-center font-semibold text-white rounded-lg"
                  >
                    Confirm
                  </Button>
                  <Button
                    id="btn-confirm-friendship"
                    className="w-full lg:w-1/2 bg-gray-300 cursor-pointer py-1 mb-1 text-center font-semibold text-black rounded-lg"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- CONTACTS --> */}
          <div className=" flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
            <h2 className="font-semibold text-md">Contacts</h2>
          </div>
          <ul className="h-full p-2 text-[14px]">
            {ListsFriends.map((friend) => (
              <li key={friend.id}>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src={friend.profilePic}
                      alt={`${friend.name} profile`}
                      className="rounded-full w-7 h-7 object-cover"
                    />
                    {friend.online && (
                      <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                    )}
                  </div>
                  <div>
                    <span className="font-semibold">{friend.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* <!-- END CONTACTS --> */}
        </div>
      </div>
    </>
  );
};

export default TheRightAside;
