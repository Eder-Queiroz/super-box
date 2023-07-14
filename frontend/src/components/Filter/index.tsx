import { useState } from "react";
import { BsFilter, BsCheck } from "react-icons/bs";
import style from "./style.module.scss";
import Select from "react-select";

export default function Filter(props: any) {
  const [displayDate, setdisplayDate] = useState("none");
  const [displayAmount, setdisplayAmount] = useState("none");
  const [displayPrice, setdisplayPrice] = useState("none");
  const [displayCategory, setdisplayCategory] = useState("none");

  const handleChack = (e: any) => {
    e.target.children[0].style.display =
      e.target.children[0].style.display === "none" ? "block" : "none";

    switch (e.target.id) {
      case "dateId":
        setdisplayDate(displayDate === "none" ? "flex" : "none");
        break;
      case "amountId":
        setdisplayAmount(displayAmount === "none" ? "flex" : "none");
        break;
      case "priceId":
        setdisplayPrice(displayPrice === "none" ? "flex" : "none");
        break;
      case "categoryId":
        setdisplayCategory(displayCategory === "none" ? "flex" : "none");
        break;
    }
  };

  const options = [
    {
      value: "alimento",
      label: "Alimento",
    },
    {
      value: "bebida",
      label: "Bebida",
    },
    {
      value: "limpeza",
      label: "Limpeza",
    },
    {
      value: "higiene",
      label: "Higiene",
    },
    {
      value: "outros",
      label: "Outros",
    },
    {
      value: "compra",
      label: "Compra",
    },
  ];

  return (
    <>
      <div className={style.filterWrapper} onClick={props.toglle}>
        <BsFilter size={46} />
        <h4>Filtros</h4>
      </div>
      <form className={style.filterForm}>
        <div className={style.wrapper}>
          <input type="checkbox" name="date" id="date" />
          <label htmlFor="date" onClick={handleChack} id="dateId">
            <BsCheck size={20} style={{ display: "none" }} id="dateId" />
          </label>
          <span>{"Data"}</span>
        </div>
        <div
          className={`${style.filterChecked} ${style.wrapper}`}
          style={{ display: `${displayDate}` }}
        >
          <input type="date" name="firstDate" id="firstDate" />
          <span>//</span>
          <input type="date" name="lastDate" id="lastDate" />
        </div>
        <div className={style.wrapper}>
          <input type="checkbox" name="amount" id="amount" />
          <label htmlFor="amount" onClick={handleChack} id="amountId">
            <BsCheck size={20} style={{ display: "none" }} id="amountId" />
          </label>
          <span>{"Quantidade"}</span>
        </div>
        <div
          className={`${style.filterChecked} ${style.wrapper}`}
          style={{ display: `${displayAmount}` }}
        >
          <input
            type="number"
            name="currentAmount"
            id="currentAmount"
            defaultValue={0}
          />
        </div>
        <div className={style.wrapper}>
          <input type="checkbox" name="price" id="price" />
          <label htmlFor="price" onClick={handleChack} id="priceId">
            <BsCheck size={20} style={{ display: "none" }} id="priceId" />
          </label>
          <span>{"Preço"}</span>
        </div>
        <div
          className={`${style.filterChecked} ${style.wrapper}`}
          style={{ display: `${displayPrice}` }}
        >
          <input
            type="text"
            name="currentPrice"
            id="currentPrice"
            defaultValue={"0,00"}
          />
        </div>
        <div className={style.wrapper}>
          <input type="checkbox" name="category" id="category" />
          <label htmlFor="category" onClick={handleChack} id="categoryId">
            <BsCheck size={20} style={{ display: "none" }} id="categoryId" />
          </label>
          <span>{"Categoria"}</span>
        </div>
        <div
          className={style.filterChecked}
          style={{ display: `${displayCategory}` }}
        >
          <Select options={options} />
        </div>
      </form>
    </>
  );
}
