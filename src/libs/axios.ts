// src/lib/axios.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000', // URL de ton back NestJS
  withCredentials: true, // Indispensable pour envoyer les cookies (sessions)
});