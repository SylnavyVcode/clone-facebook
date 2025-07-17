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
    console.log(">>>>>>post>>>>>", postData);

    try {
      const response = await axios.post(
        `${config.base_url}/post/message`,
        postData,
        this.getpostHeaders()
      );
      console.log(response);

      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du compte :", error);
    }
  }

  /**
   * GET Posts
   * @param token
   * @returns
   */
  static async getAllPostData(token: string) {
    try {
      const response = await axios.get(`${config.base_url}/post/`, {
        ...this.getpostHeaders(),
        params: { token: token }, // Ajoutez les données dans "params"
      });
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la vérification du compte :", error);
    }
  }
}
