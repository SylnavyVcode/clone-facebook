/**
 * Created by Sylnavy Valmy MABIKA
 * Auth Class
 */

import axios from "axios";
import { config } from "../config/config";

export class Auth {
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
      const response = await axios.post(`${config.base_url}/auth/reset`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la vérification du compte :", error);
    }
  }
  static async resetPassword(data: any) {
    console.log("data password ====>", data);

    try {
      const response = await axios.post(
        `${config.base_url}/auth/reset-password`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la vérification du compte :", error);
    }
  }

  static async validateReset(data: string) {
    console.log("validation reset =====>>>>", data);

    try {
      const response = await axios.get(
        `${config.base_url}/auth/validate-reset-password`,
        {
          params: { token: data }, // Ajoutez les données dans "params"
        }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la vérification du compte :", error);
    }
  }

  static async getUserData(token:string){
    try {
      const response = await axios.get(
        `${config.base_url}/auth/validate-reset-password`,
        {
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
