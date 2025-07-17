import { Button } from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export const PostModal = (showModal: boolean) => {
  return (
    <>
      {showModal && (
        <section
          id="Section_modal_post"
          className="w-screen h-screen bg-slate-400/40 flex justify-center items-center"
        >
          <div className="w-[500px]">
            BONJOUR LE MONDE
            <Input id="text_post" name="contentPost" placeholder="What's on you mind Valmy"></Input>
            <Button
              type="submit"
              className="bg-[#1877f2] text-white rounded-lg w-full text-center text-[20px] shadow-sm px-4 py-3 font-semibold"
              disabled
            >
              Post
            </Button>
          </div>
        </section>
      )}
    </>
  );
};
