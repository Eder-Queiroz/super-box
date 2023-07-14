import { createContext, ReactNode, useState } from "react";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "@/service/apiClient";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps;
  isAuth: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
};

type UserProps = {
  id: string;
  name: string;
  password: string;
  role: string;
};

type SignInProps = {
  name: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

export const signOut = () => {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch (err) {
    console.log("erro ao deslogar, vai ficar ai!");
  }
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const isAuth = !!user;

  const signIn = async ({ name, password }: SignInProps) => {
    try {
      const response = await api.post("/signin", { name, password });

      const { id, role, token } = response.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 1 mes
        path: "/", // global
      });

      setUser({ id, name, password, role });

      // passar para as próximas requisições o token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Login realizado com sucesso!");

      // redirecionar o usuario
      Router.push("/sale");
    } catch (err) {
      toast.error("Erro ao logar!");
      console.log("Erro ao logar", err);
      return Promise.reject(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
