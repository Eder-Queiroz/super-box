import { useState } from "react";
import Body from "@/components/Body";
import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Modal from "@/components/Modal";
import style from "./style.module.scss";
import Table from "@/components/Table";
import Image from "next/image";
import LogoBox from "@/images/superboxcaixafrutasv.svg";
import { BsCheck } from "react-icons/bs";

export default function SalePage() {
  const [payment, setPayment] = useState("none");
  const [value, setValue] = useState("none");

  const handlePayment = (e: any) => {
    e.preventDefault();
    setPayment(payment === "none" ? "flex" : "none");
  };

  const handleCheck = (e: any) => {
    e.target.children[0].style.display =
      e.target.children[0].style.display === "none" ? "block" : "none";

    if (e.target.id === "moneyId") {
      setValue(value === "none" ? "block" : "none");
    }
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
      title: "preco",
      text: "Preço",
    },
    {
      title: "categoria",
      text: "Categoria",
    },
  ];

  const data = [
    {
      nome: "Feijão",
      quantidade: "5",
      preco: "R$ 5,00",
      categoria: "Alimento",
    },
    {
      nome: "Arroz",
      quantidade: "5",
      preco: "R$ 5,00",
      categoria: "Alimento",
    },
    {
      nome: "Feijão",
      quantidade: "5",
      preco: "R$ 5,00",
      categoria: "Alimento",
    },
    {
      nome: "Batata",
      quantidade: "2",
      preco: "R$ 5,00",
      categoria: "Alimento",
    },
    {
      nome: "Cenoura",
      quantidade: "5",
      preco: "R$ 5,00",
      categoria: "Alimento",
    },
    {
      nome: "Abacate",
      quantidade: "5",
      preco: "R$ 5,00",
      categoria: "Alimento",
    },
    {
      nome: "Feijão",
      quantidade: "5",
      preco: "R$ 5,00",
      categoria: "Alimento",
    },
  ];

  return (
    <Body colorBg="#392035" colorSvg="#462643">
      <NavBar />
      <div className={style.containerSale}>
        <Card style={{ width: "90%" }}>
          <form className={style.formWrapper}>
            <div className={style.containerInputs}>
              <div className={style.wrapperInputs} style={{ width: "70%" }}>
                <Input placeholder="Cod. de Barras" />
                <Input placeholder="Quantidade" />
                <Input placeholder="Desconto" />
              </div>
              <div className={style.wrapperInputs} style={{ width: "30%" }}>
                <Input placeholder="Qtd. Itens" disabled />
                <Input placeholder="Total" disabled />
                <Image
                  style={{ position: "absolute", bottom: 0 }}
                  alt="Incone Caixa"
                  src={LogoBox}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <Button onClick={handlePayment}>Pagamento</Button>
          </form>
        </Card>

        <Card style={{ width: "90%" }}>
          <Table columns={columns} data={data} style={{ width: "100%" }} />
        </Card>
      </div>

      <Modal style={{ display: `${payment}` }} toggle={handlePayment}>
        <div className={style.modalInputsSale}>
          <Input placeholder="Total" disabled />
          <div>
            <span>Forma de pagamento:</span>
            <div className={style.wrapper}>
              <input type="checkbox" name="money" id="money" />
              <label htmlFor="money" id="moneyId" onClick={handleCheck}>
                <BsCheck size={20} style={{ display: "none" }} id="moneyId" />
              </label>
              <span>Dinheiro</span>
              <Input
                placeholder="R$ 0,00"
                style={{
                  width: "160px",
                  textAlign: "center",
                  display: `${value}`,
                }}
              />
            </div>
            <div className={style.wrapper}>
              <input type="checkbox" name="pix" id="pix" />
              <label htmlFor="pix" id="pixId" onClick={handleCheck}>
                <BsCheck size={20} style={{ display: "none" }} id="pixId" />
              </label>
              <span>PIX</span>
            </div>
            <div className={style.wrapper}>
              <input type="checkbox" name="credito" id="credito" />
              <label htmlFor="credito" id="creditoId" onClick={handleCheck}>
                <BsCheck size={20} style={{ display: "none" }} id="creditoId" />
              </label>
              <span>Crédito</span>
            </div>
            <div className={style.wrapper}>
              <input type="checkbox" name="debito" id="debito" />
              <label htmlFor="debito" id="debitoId" onClick={handleCheck}>
                <BsCheck size={20} style={{ display: "none" }} id="debitoId" />
              </label>
              <span>Débito</span>
            </div>
          </div>
          <Input placeholder="Troco" disabled style={{ display: `${value}` }} />
          <Button>Finalizar</Button>
        </div>
      </Modal>
    </Body>
  );
}
