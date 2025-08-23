/**
 * Created by Sylnavy Valmy MABIKA
 * POST Class
 */

import axios from "axios";
import { config } from "../config/config";

export class PostService {
  static getpostHeaders() {
    const token = localStorage.getItem("token");
    console.log("token", token);
    // Récupération du token
    return {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  }

  /**
   * Create Post to Facebook
   * @param postData
   * @returns
   */
  static async createPost(postData: any) {
  const formData = new FormData();
  
  // 1. Ajouter les fichiers
  if (postData.image && postData.image.length > 0) {
    Array.from(postData.image).forEach((file) => {
      formData.append("images", file as File);
    });
  }
  
  // 2. Ajouter les autres données (texte, etc.)
  if (postData.content) {
    formData.append("content", postData.content);
  }
  // Ajoutez ici tous les autres champs que vous envoyez
  
  // 3. Headers sans Content-Type pour FormData
  const token = localStorage.getItem("token");
  const headers = {
    authorization: `Bearer ${token}`,
    // Ne pas mettre Content-Type, axios le fait automatiquement
  };

  try {
    // 4. Envoyer formData au lieu de postData
    const response = await axios.post(
      `${config.base_url}/post/message`,
      formData,  // ← Maintenant on envoie formData
      { headers }
    );
    return response;
  } catch (error) {
    console.error("Erreur:", error);
  }
}

  /**
   * GET Posts
   * @param token
   * @returns
   */
  static async getAllPostDataWithPagination(page = 1, limit = 10) {
    try {
      const response = await axios.get(`${config.base_url}/post`, {
        ...this.getpostHeaders(),
        params: { page, limit },
      });

      return response.data; // Doit ressembler à { data: [...], hasMore: true }
    } catch (error) {
      console.error("Erreur lors de la récupération des posts :", error);
      return { data: [], hasMore: false };
    }
  }
}
