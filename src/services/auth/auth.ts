/**
 * Created by Sylnavy Valmy MABIKA
 * Auth Class
 */

import axios from "axios";
import { config } from "../config/config";

export class Auth {
  static getAuthHeaders() {
    const token = localStorage.getItem("token"); // Récupération du token
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  }

  static async createAccount(accountData: any) {
    console.log(">>>>>>ACCOUNT>>>>>", accountData);

    try {
      const response = await axios.post(
        `${config.base_url}/auth/register`,
        accountData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du compte :", error);
    }
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

  static async reset(data: any) {
    console.log(data);

    try {
      const response = await axios.post(
        `${config.base_url}/auth/reset`,
        { data },
        this.getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la vérification du compte :", error);
    }
  }
  static async resetPassword(newPassword: any, OTP?: any) {
    try {
      const response = await axios.post(
        `${config.base_url}/auth/reset-password`,
        { newPassword, OTP },
        this.getAuthHeaders()
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la vérification du compte :", error);
    }
  }

  static async validateReset(data: string) {
    try {
      const response = await axios.get(
        `${config.base_url}/auth/validate-reset-password`,
        {
          ...this.getAuthHeaders(),
          params: { token: data }, // Ajoutez les données dans "params"
        }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la vérification du compte :", error);
    }
  }

  static async getUserData(token: string) {
    try {
      const response = await axios.get(
        `${config.base_url}/auth/validate-reset-password`,
        {
          ...this.getAuthHeaders(),
          params: { token: token }, // Ajoutez les données dans "params"
        }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la vérification du compte :", error);
    }
  }
}
