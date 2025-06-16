/**
 * Created by Sylnavy Valmy MABIKA
 * Session Class
 */
import axios from "axios";
import { config } from "../config/config";

export class Session {
  static async getSession() {
    const session = localStorage.getItem("cookie");
    console.log(session);
  }

  static async login(data: any) {
    console.log(data);

    try {
      const response = await axios.post(`${config.base_url}/auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du compte :", error);
    }
  }
}
