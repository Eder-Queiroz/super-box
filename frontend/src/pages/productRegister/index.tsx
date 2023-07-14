import { useState } from "react";
import Body from "@/components/Body";
import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Modal from "@/components/Modal";
import style from "./style.module.scss";

export default function ProductRegister() {
  const [modal, setModal] = useState("none");
  const [isProduct, setIsProduct] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const handleModal = (e: any, isProduct: boolean, isRegister: boolean) => {
    e.preventDefault();
    console.log(e.target.value);
    setModal(modal === "none" ? "flex" : "none");

    isProduct ? setIsProduct(true) : setIsProduct(false);
    isRegister ? setIsRegister(true) : setIsRegister(false);
  };

  return (
    <Body colorBg="#106065" colorSvg="#0C565B">
      <NavBar />
      <section className={style.productRegisterContainer}>
        <Card style={{ width: "60%" }}>
          <form className={style.formRegister}>
            <div className={style.cover}>
              <label className={style.labels}>Pesquisar categoria</label>
              <Input placeholder="Nome da categoria.." />
            </div>
            <div className={style.wrapper}>
              <Button
                onClick={(e) => {
                  handleModal(e, false, true);
                }}
              >
                Cadastrar
              </Button>
              <Button
                onClick={(e) => {
                  handleModal(e, false, false);
                }}
              >
                Editar
              </Button>
            </div>
          </form>
          <div className={style.line} />
          <form className={style.formRegister}>
            <div className={style.cover}>
              <label className={style.labels}>Pesquisar Produto</label>
              <Input placeholder="Nome do produto.." />
              <Input placeholder="Cod. de barras.." />
            </div>
            <div className={style.wrapper}>
              <Button
                onClick={(e) => {
                  handleModal(e, true, true);
                }}
              >
                Cadastrar
              </Button>
              <Button
                onClick={(e) => {
                  handleModal(e, true, false);
                }}
              >
                Editar
              </Button>
            </div>
          </form>
        </Card>
      </section>

      <Modal style={{ display: `${modal}` }} toggle={handleModal} size="60">
        <form className={style.modalFormRegister}>
          {isProduct ? (
            isRegister ? (
              <>
                <h4>Cadastrar Produto</h4>
                <Input placeholder="Nome do produto.." />
                <Input placeholder="Cod. de barras.." />
                <Input placeholder="Categoria do produto.." />
                <Input placeholder="Preço do produto.." />
                <Button>Cadastrar</Button>
              </>
            ) : (
              <>
                <h4>Editar Produto</h4>
                <Input placeholder="Nome do produto.." />
                <Input placeholder="Cod. de barras.." />
                <Input placeholder="Categoria do produto.." />
                <Input placeholder="Preço do produto.." />
                <Button>Editar</Button>
              </>
            )
          ) : isRegister ? (
            <>
              <h4>Cadastrar Categoria</h4>
              <Input placeholder="Nome da categoria.." />
              <Button>Cadastrar</Button>
            </>
          ) : (
            <>
              <h4>Editar Categoria</h4>
              <Input placeholder="Nome da categoria.." />
              <Button>Editar</Button>
            </>
          )}
        </form>
      </Modal>
    </Body>
  );
}
