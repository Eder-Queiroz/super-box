import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthorizationError } from "./AthorizationErro";
import { signOut } from "@/context/AuthContext";

export const setupAPIClient = (ctx = undefined) => {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      Authorization: `Bearer ${cookies["@nextauth.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        // 401 - usuario não autorizado
        if (typeof window !== undefined) {
          // deslogar usuario;
          signOut();
        } else {
          return Promise.reject(new AuthorizationError());
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
};
