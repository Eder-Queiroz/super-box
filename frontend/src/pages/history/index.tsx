import { useState } from "react";
import Body from "@/components/Body";
import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/Card";
import style from "./style.module.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Filter from "@/components/Filter";
import Table from "@/components/Table";
import { BsFilter } from "react-icons/bs";

export default function HistoryPage() {
  const [filter, setFilter] = useState("none");

  const handleFilter = () => {
    filter === "none" ? setFilter("block") : setFilter("none");
  };

  const columns = [
    {
      title: "nome",
      text: "Nome",
    },
    {
      title: "quantidade",
      text: "Quantidade",
    },
    {
      title: "data",
      text: "Data",
    },
    {
      title: "preco",
      text: "Preço",
    },
    {
      title: "categoria",
      text: "Categoria",
    },
    {
      title: "tipo",
      text: "Tipo",
    },
  ];

  const data = [
    {
      nome: "Feijão",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      tipo: "compra",
    },
    {
      nome: "Arroz",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      tipo: "compra",
    },
    {
      nome: "Feijão",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      tipo: "compra",
    },
    {
      nome: "Batata",
      quantidade: "2",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      tipo: "compra",
    },
    {
      nome: "Cenoura",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      tipo: "compra",
    },
    {
      nome: "Abacate",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      tipo: "compra",
    },
    {
      nome: "Feijão",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      tipo: "compra",
    },
  ];

  return (
    <Body colorBg="#104C65" colorSvg="#0C3D52">
      <NavBar />
      <div className={style.historyContainer}>
        <Card type="fullscreen">
          <Filter />
        </Card>
        <div className={style.mobileScreen} style={{ display: `${filter}` }}>
          <Filter toglle={handleFilter} />
        </div>
        <Card type="responsive">
          <div className={style.containerBtn}>
            <Button onClick={handleFilter}>
              <BsFilter size={30} />
              <span>Filtros</span>
            </Button>
          </div>
          <h2>Histórico</h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Input placeholder="Digite o nome do produto.." />
            <Button>Pesquisar</Button>
          </div>
          <Button>Exportar</Button>
          <div style={{ width: "100%" }}>
            <Table columns={columns} data={data} />
          </div>
        </Card>
      </div>
    </Body>
  );
}
