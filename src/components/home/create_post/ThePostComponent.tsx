import TheFluxElements from "../flux/TheFluxComponent";

const ThePostCreate = () => {
  return (
    <>
      <section id="fb_create_box">
        <div className="w-full bg-white rounded-lg px-3 mt-4 shadow-md">
          <div className="flex items-center py-3 border-b w-full">
            <a href="" className="mr-2">
              <img
                src="https://picsum.photos/id/147/300/300"
                alt="alt"
                className="rounded-full ml-1 min-w-[36px] max-w-[36px]"
              />
            </a>
            <div className="flex items-center justify-start bg-[#EFF2F5] p-2 rounded-full cursor-pointer w-full">
              <div className="text-left pl-2">placeholder</div>
            </div>
          </div>
          <div className="flex items-center py-3 border-b">
            <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
              V0 <div className=" text-[#6F7275] font-bold">Live vidéo</div>
            </button>
            <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
              v1 <div className=" text-[#6F7275] font-bold">photo/vidéo</div>
            </button>
            <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
              v2{" "}
              <div className=" text-[#6F7275] font-bold">Feeling/activity</div>
            </button>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="border-gray-300 focus-indigo-500 focus:ring-inset"
          />
        </div>
        <TheFluxElements></TheFluxElements>
      </section>
    </>
  );
};

export default ThePostCreate;
