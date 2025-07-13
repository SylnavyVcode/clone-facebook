/**
 * Created by Sylnavy V. Mabika M.
 */

export const CardLink = () => {
  return (
    <>
      <a
        href="#"
        className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
      >
        <img
          src="src/assets/images/group-img-4.jpg"
          alt="Profile picture"
          className="rounded-full w-7 h-7"
        ></img>
        <span className="font-semibold">Nihon Koi</span>
      </a>
    </>
  );
};
