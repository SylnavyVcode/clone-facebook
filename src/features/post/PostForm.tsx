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
  const [content, setContent] = useState<string>("");
  const [step, setStep] = useState<number>(0);
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
  const hundleChangeStep = () => {
    setStep((prev) => (prev === 0 ? 1 : 0));
  };
  const handleClick = () => {
    inputRef.current?.click(); // ⬅️ déclenche l'ouverture du sélecteur de fichier
  };
  const ChangeContent = () => {
    const contentValue = (
      document.getElementById("content") as HTMLTextAreaElement
    ).value;
    setContent(contentValue);
    setDisabledButton(
      !contentValue && !(images?.length ?? 0) && !(videos?.length ?? 0)
    );
  };
  // Étape 3 : Gérer la soumission du formulaire
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Données du formulaire : ", data);
    const model = {
      content: data.content,
      image: images ? URL.createObjectURL(images[0]) : null,
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
        className="fixed inset-0 text-white bg-black bg-opacity-70 flex items-center justify-center z-10"
      >
        {step == 0 && (
          <div
            id="contenuModal"
            ref={modalRef}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl w-[550px] p-1 shadow-xl relative"
          >
            {/* Header */}
            <div className="flex justify-between items-center rounded-xl  bg-gray-50 dark:bg-gray-800  px-4 py-2">
              <h2 className="text-2xl font-semibold text-center w-full py-2">
                Create post
              </h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <X className="h-8 w-8" />
              </button>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
            {/* User Info */}
            <div className="flex items-center space-x-2 mt-2  px-4">
              <img
                src="src\assets\images\tuat.jpg"
                alt="Valmy Mabika"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-md">Valmy Mabika</p>
                <button className="flex items-center space-x-1 text-sm text-gray-100 bg-gray-700 px-2 py-1 rounded-md">
                  <Users className="h-5 w-5" />
                  <span>Specific friends</span>
                </button>
              </div>
            </div>

            {/* Input */}

            <div className="w-full px-4 pb-2 my-2">
              {images && images.length > 0 && (
                <textarea
                  id="content"
                  {...register("content")}
                  rows={1}
                  onChange={ChangeContent}
                  placeholder="What's on your mind, Valmy?"
                  className="w-full mt-2 resize-none border-none outline-none text-white text-2xl bg-transparent placeholder-gray-500 min-h-[100px]"
                ></textarea>
              )}
              {!images && (
                <textarea
                  id="content"
                  {...register("content")}
                  rows={5}
                  onChange={ChangeContent}
                  placeholder="What's on your mind, Valmy?"
                  className="w-full mt-2 resize-none border-none outline-none text-white text-2xl bg-transparent placeholder-gray-500 min-h-[100px]"
                ></textarea>
              )}
              {images && images.length > 0 && (
                <img
                  src={URL.createObjectURL(images[0])}
                  alt="Selected"
                  className="mt-2 w-full h-[200px] rounded-lg object-cover"
                />
              )}

              {/* Add to your post */}
              <div className="mt-4 flex justify-between items-center border rounded-md p-2 bg-gray-50 dark:bg-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 m-auto cursor-pointer">
                  <span>Add to your post</span>
                </p>
                <div className="flex space-x-1 text-lg">
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
                  <Button
                    onClick={hundleChangeStep}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
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
                className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-600 my-2  text-md"
              >
                Post
              </Button>
            </div>
          </div>
        )}
        {step == 1 && (
          <section className="bg-gray-50 dark:bg-gray-800 rounded-xl w-[550px]  shadow-xl">
            <div className="flex justify-between items-center rounded-xl  bg-gray-50 dark:bg-gray-800  px-4 py-2">
              <button
                onClick={hundleChangeStep}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                {/* <X className="h-5 w-5" /> */}
              </button>
              <h2 className="text-2xl font-semibold text-center w-full py-2">
                Add to your post
              </h2>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
            <div className="mt-4 grid grid-cols-2 gap-2 p-4 bg-gray-50 dark:bg-gray-800 text-lg rounded-xl">
              <Button
                onClick={handleClick}
                className="flex gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ImageIcon className="text-green-500 h-7 w-7" /> Image
              </Button>
              <Button className="flex gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Users className="text-blue-500" />
                Add friends
              </Button>
              <Button className="flex gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Smile className="text-yellow-500 h-7 w-7" /> Emoji
              </Button>
              <Button className="flex gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <MapPin className="text-red-500 h-7 w-7" /> add location
              </Button>
              <Button className="flex gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Gift className="text-teal-500 h-7 w-7" /> Gif
              </Button>
              {/* <Button className="flex gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <MoreHorizontal className="text-gray-600 h-7 w-7" />
              </Button> */}

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
          </section>
        )}
      </div>
      {/* </div> */}
      {/* </section> */}
    </>
  );
};
