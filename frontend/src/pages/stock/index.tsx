import { useState } from "react";
import Body from "@/components/Body";
import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/Card";
import style from "./style.module.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Filter from "@/components/Filter";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import { BsFilter } from "react-icons/bs";
import Glass from "@/components/ui/Glass";

export default function StockPage() {
  const [filter, setFilter] = useState("none");
  const [add, setAdd] = useState("none");

  const handleFilter = () => {
    filter === "none" ? setFilter("block") : setFilter("none");
  };

  const handleAdd = () => {
    add === "none" ? setAdd("flex") : setAdd("none");
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
      title: "validade",
      text: "Validade",
    },
  ];

  const data = [
    {
      nome: "Feijão",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      validade: "10/10/2021",
    },
    {
      nome: "Arroz",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      validade: "10/10/2021",
    },
    {
      nome: "Feijão",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      validade: "10/10/2021",
    },
    {
      nome: "Batata",
      quantidade: "2",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      validade: "10/10/2021",
    },
    {
      nome: "Cenoura",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      validade: "10/10/2021",
    },
    {
      nome: "Abacate",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      tipo: "10/10/2021",
    },
    {
      nome: "Feijão",
      quantidade: "5",
      data: "10/10/2021",
      preco: "R$ 5,00",
      categoria: "Alimento",
      validade: "10/10/2021",
    },
  ];

  return (
    <Body colorBg="#203139" colorSvg="#263D46">
      <NavBar />
      <div className={style.containerStock}>
        <Card type="fullscreen">
          <Filter />
        </Card>
        <div className={style.mobileScreen} style={{ display: `${filter}` }}>
          <Filter toglle={handleFilter} />
        </div>
        <div className={style.stockCard}>
          <Card>
            <div className={style.filters}>
              <Button className="filters" onClick={handleFilter}>
                <BsFilter size={30} />
                <span>Filtros</span>
              </Button>
            </div>
            <h2>Estoque</h2>
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
            <div className={style.wrapperButton}>
              <Button onClick={handleAdd}>Adicionar</Button>
              <Button>Exportar</Button>
            </div>
            <div style={{ width: "100%" }}>
              <Table columns={columns} data={data} />
            </div>
          </Card>
        </div>
      </div>

      <Modal style={{ display: `${add}` }} toggle={handleAdd}>
        <div className={style.addProduct}>
          <h4>Adicionar produto ao estoque</h4>
          <form>
            <Input placeholder="Nome do produto..." />
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Input placeholder="Quantidade..." />
              <Button>+</Button>
              <Button>-</Button>
            </div>
            <Input type="date" />
            <Button>Adicionar</Button>
          </form>
        </div>
      </Modal>
    </Body>
  );
}
