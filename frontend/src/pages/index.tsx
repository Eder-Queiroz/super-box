import { canSSRGuest } from "@/utils/canSSRGuest";

import { useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Body from "@/components/Body";
import style from "./style.module.scss";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { toast } from "react-toastify";

import { AuthContext } from "@/context/AuthContext";

import logoCaixa from "../images/superboxcaixafrutasv.svg";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (name === "" || password === "") {
      toast.warning("Preencha todos os campos!");
      return;
    }

    const credentials = {
      name,
      password,
    };

    await signIn(credentials)
      .then(() => setLoading(true))
      .catch(() => setLoading(false));
  };

  return (
    <Body colorBg="#10654E" colorSvg="#0C5B45">
      <section className={style.containerLogin}>
        <h1 className={style.title}>Super Box</h1>
        <Card style={{ width: "40%" }}>
          <form className={style.formLogin} onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              placeholder="Insira seu usuário..."
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              placeholder="Insira sua senha..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button loading={loading}>Acessar</Button>
          </form>
          <div className={style.register}>
            <span>=========</span>
            <a>CADASTRAR-SE</a>
          </div>
        </Card>
        <Image src={logoCaixa} alt="logo caixa" />
      </section>
    </Body>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {
      context: {},
    },
  };
});
