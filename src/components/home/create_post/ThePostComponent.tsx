// ==========================================
// 1. SOLUTION DANS ThePostCreate - Utiliser un compteur
// ==========================================
import { useState } from "react";
import ThePostForm from "./subcomponents/TheFormPostComponent";
import { ThePosterView } from "./subcomponents/ThePublicationElement";

const ThePostCreate = () => {
  // ✅ Utiliser un compteur au lieu d'un boolean
  const [updateCounter, setUpdateCounter] = useState<number>(0);

  const updateData = () => {
    // ✅ Incrémenter le compteur à chaque appel
    setUpdateCounter(prev => prev + 1);
    console.log("updateData appelée - nouveau compteur:", updateCounter + 1);
  }

  return (
    <>
      <div className="pt-12 lg:pt-12 w-full bg-[#F1F2F5] h-full">
        <ThePostForm onUpdateDateForm={updateData} />
        <ThePosterView updateCounter={updateCounter} />
      </div>
    </>
  );
};

export default ThePostCreate;