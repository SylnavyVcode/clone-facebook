import { useEffect, useRef } from "react";
import { Button } from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostService } from "../../services/post/post";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  X,
  Smile,
  Users,
  Image as ImageIcon,
  MapPin,
  MoreHorizontal,
  Gift,
} from "lucide-react";
interface PostModalProps {
  showModal: boolean;
  onClose: () => void;
}
interface FormData {
  content: string;
  image: Array<string> | null;
  video: Array<string> | null;
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
    if (response && response.status === 201 && response.data.length > 0) {
      console.log("response ====>>>> content===", response);
      onClose(); // Ferme le modal après la soumission
      // Vous pouvez également réinitialiser le formulaire ici si nécessaire
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
          <div className="fixed inset-0 text-white bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-md p-4 shadow-xl relative">
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-semibold">Create post</h2>
                <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-2 mt-3">
                <img
                  src="/avatar.jpg"
                  alt="Valmy Mabika"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">Valmy Mabika</p>
                  <button className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                    <Users className="h-3 w-3" />
                    <span>Specific friends</span>
                  </button>
                </div>
              </div>

              {/* Input */}
              <textarea
                placeholder="What's on your mind, Valmy?"
                className="w-full mt-4 resize-none border-none outline-none text-white text-lg bg-transparent placeholder-gray-500 min-h-[100px]"
              ></textarea>

              {/* Add to your post */}
              <div className="mt-4 flex justify-between items-center border rounded-md p-2 bg-gray-50 dark:bg-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 m-auto">
                  <span>Add to your post</span>
                </p>
                <div className="flex space-x-1">
                  <Button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <ImageIcon className="text-green-500" />
                  </Button>
                  <Button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Users className="text-blue-500" />
                  </Button>
                  <Button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Smile className="text-yellow-500" />
                  </Button>
                  <Button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MapPin className="text-red-500" />
                  </Button>
                  <Button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Gift className="text-teal-500" />
                  </Button>
                  <Button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MoreHorizontal className="text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Post button */}
              <Button className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:opacity-50">
                Post
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
