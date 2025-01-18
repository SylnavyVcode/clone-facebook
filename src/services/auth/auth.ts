// import React from "react";
import axios from "axios";
import { config } from "../config";

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
}
