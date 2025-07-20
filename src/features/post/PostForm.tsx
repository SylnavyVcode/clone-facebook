import { useEffect, useRef, useState } from "react";
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
import { set } from "zod";
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
  const [image, setImage] = useState<File | null>(null);
  const [images, setImages] = useState<Array<any> | null>(null);
  const [videos, setVideos] = useState<Array<any> | null>(null);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  // Étape 2 : Définir les règles de validation
  const schema = yup.object({
    content: yup.string().min(0, "le code doit contenir au moins 0 caractère."),
  });
  const { register, handleSubmit } = useForm<FormData | any>({
    resolver: yupResolver(schema),
  });
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImages((prev) => [...(prev || []), file]);
      setDisabledButton(false);
      // Tu peux afficher un aperçu ici si tu veux
      console.log("Image sélectionnée :", file.name);
    }
  };
  const handleClick = () => {
    inputRef.current?.click(); // ⬅️ déclenche l'ouverture du sélecteur de fichier
  };
  // Étape 3 : Gérer la soumission du formulaire
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Données du formulaire : ", data);
    const model = {
      content: data.content,
      image: images || null,
      video: videos || null,
    };
    if (
      (images?.length ?? 0) <= 0 &&
      (videos?.length ?? 0) <= 0 &&
      !data.content
    ) {
      console.error("Aucune image ou vidéo sélectionnée.");
      return;
    }

    const response = await PostService.createPost(model);
    console.log(response, "resp");

    if (
      response &&
      response.status === 201 &&
      response.statusText == "Created"
    ) {
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
      {/* <section className="w-screen h-screen bg-gray-400/40 flex justify-center items-center z-20 fixed top-0 right-0">
       */}
      <div
        id="Section_modal_post"
        className="fixed inset-0 text-white bg-black bg-opacity-50 flex items-center justify-center z-10"
      >
        <div
          id="contenuModal"
          ref={modalRef}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl w-[500px]  shadow-xl relative"
        >
          {/* Header */}
          <div className="flex justify-between items-center rounded-xl  bg-gray-50 dark:bg-gray-800  px-4 py-2">
            <h2 className="text-lg font-semibold text-center w-full">
              Create post
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          <hr className="border-gray-200 dark:border-gray-700" />
          {/* User Info */}
          <div className="flex items-center space-x-2 mt-2  px-4">
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
          <div className="w-full px-4 pb-2">
            <textarea
              {...register("content")}
              placeholder="What's on your mind, Valmy?"
              className="w-full mt-2 resize-none border-none outline-none text-white text-xl bg-transparent placeholder-gray-500 min-h-[100px]"
            ></textarea>

            {/* Add to your post */}
            <div className="mt-4 flex justify-between items-center border rounded-md p-2 bg-gray-50 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 m-auto">
                <span>Add to your post</span>
              </p>
              <div className="flex space-x-1">
                <Button
                  onClick={handleClick}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
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
              <Input
                type="file"
                name="profilePic"
                accept="image/*"
                id="profilePic"
                onChange={handleChangeImage}
                ref={inputRef}
                className="hidden"
              ></Input>
            </div>

            {/* Post button */}
            <Button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              disabled={disabledButton}
              className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-600 "
            >
              Post
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </section> */}
    </>
  );
};
