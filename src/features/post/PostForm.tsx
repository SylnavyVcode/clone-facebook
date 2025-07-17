import { useEffect, useRef } from "react";
import { Button } from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostService } from "../../services/post/post";
import { yupResolver } from "@hookform/resolvers/yup";
interface PostModalProps {
  showModal: boolean;
  onClose: () => void;
}
interface FormData {
  content: string;
}
export const PostModal = ({ showModal = false, onClose }: PostModalProps) => {
  // Étape 2 : Définir les règles de validation
  const schema = yup.object({
    content: yup.string().min(0, "le code doit contenir au moins 0 caractère."),
  });
  const { register, handleSubmit } = useForm<FormData | any>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Données du formulaire : ", data);

    const response = await PostService.createPost(data);
    if (response) {
      console.log("response ====>>>> content===", response);
    }
  };
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(); // appel au parent pour fermer le modal
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, onClose]);

  if (!showModal) return null;

  return (
    <>
      <section
        id="Section_modal_post"
        className="w-screen h-screen bg-gray-400/40 flex justify-center items-center z-20 fixed top-0 right-0"
      >
        <div
          id="contenuModal"
          ref={modalRef}
          className="w-[500px] bg-slate-800 p-8 rounded-lg"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
            BONJOUR LE MONDE
            <Input
              id="text_post"
              placeholder="What's on you mind Valmy"
              {...register("content")}
              className="bg-transparent ring-0 ring-offset-0 border-none "
            ></Input>
            <Button
              type="submit"
              className="bg-[#1877f2] text-white rounded-lg w-full text-center text-md shadow-sm px-4 py-1 font-semibold"
            >
              Post
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};
