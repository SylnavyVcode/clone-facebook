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
