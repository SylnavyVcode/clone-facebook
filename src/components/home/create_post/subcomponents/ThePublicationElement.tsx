import { useEffect } from "react";
import { Stories } from "../../../stories/Stories";
import ActualityPost from "../../../ui/ActualityPost";
// ==========================================
// 3. MISE À JOUR de ThePosterView
// ==========================================
type ThePosterViewProps = {
  updateCounter: number; // ou lastUpdate: number
  userData:any
};

export const ThePosterView = ({ updateCounter, userData }: ThePosterViewProps) => {
  console.log("ThePosterView - updateCounter reçu:", updateCounter);
  
  useEffect(() => {
    console.log("ThePosterView - Mise à jour déclenchée avec compteur:", updateCounter);
    // Ici vous pouvez déclencher le rechargement des données
  }, [updateCounter]); // ✅ Se déclenche à chaque changement du compteur

  return (
    <>
      <div>
        <div className="max-w-5xl mx-auto mt-4">
          <Stories />
        </div>
        {/* ✅ Passer le compteur */}
        <ActualityPost updateCounter={updateCounter} userReceide={userData}/>
      </div>
    </>
  );
};