import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies } from "nookies";

// função para páginas que só podem ser acessadas por usuários não logados

export const canSSRGuest = <P>(fn: GetServerSideProps<{ context: P }>) => {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<{ context: P }>> => {
    const cookies = parseCookies(context); // pega os cookies da página

    // se tentar acessar a página, porém já estiver logado, redireciona para a página inicial

    if (cookies["@nextauth.token"]) {
      return {
        redirect: {
          destination: "/sale",
          permanent: false,
        },
      };
    }

    return await fn(context);
  };
};
