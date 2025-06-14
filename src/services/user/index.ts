import axios from "axios";
import { config } from "../config/config";

/**
 * Created by Sylnavy Valmy MABIKA
 * Auth Class
 */

export class Users {
  /**
   * Récupère le token stocké
   */
  static getAuthHeaders() {
    const token = localStorage.getItem("token"); // Récupération du token
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  }

  /**
   * Sylnavy Mabika Get One User
   * @param id_user
   * @returns
   */
  static async getUser() {
    // console.log("id user =========", id_user);

    try {
      const response = await axios.get(
        `${config.base_url}/users/`,
        this.getAuthHeaders()
      );
      console.log("response get user ==========", response);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du compte :", error);
    }
  }

  /**
   * Sylnavy Mabika Update User
   * @param id_user
   * @param data
   * @returns
   */
  static async updateUser(id_user: string, data: any) {
    console.log("id user =========", id_user);

    try {
      const response = await axios.patch(
        `${config.base_url}/users/${id_user}`,
        data,
        this.getAuthHeaders()
      );
      console.log("response update user ==========", response);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du compte :", error);
    }
  }

  /**
   * Sylnavy Mabika get all Users
   * @returns
   */
  static async getAllUsers() {
    try {
      const response = await axios.get(
        `${config.base_url}/users/`,
        this.getAuthHeaders()
      );
      console.log("response get all users ==========", response);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
  }
}
