import { TableHTMLAttributes, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.scss";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  data: any[];
  columns: any[];
}

export default function Table({ data, columns, ...rest }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npages = Math.ceil(data.length / recordPerPage);
  const numbers = Array.from(Array(npages + 1).keys()).slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changCurrentPage = (number: any) => {
    setCurrentPage(number);
  };

  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div {...rest}>
      <div style={{ border: "2px solid #000" }}>
        <div style={{ overflowX: "auto" }}>
          <table className={style.table}>
            <thead>
              <tr>
                {columns.map((column, i) => (
                  <th key={i}>{column.text}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((d, i) => (
                <tr key={i}>
                  {columns.map((column, i) => (
                    <td key={i}>{d[column.title]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <nav className={style.navTable}>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Ant.
            </a>
          </li>
          {numbers.map((number, i) => (
            <li
              className={`page-item ${
                currentPage === number ? style.active : ""
              }`}
              key={i}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changCurrentPage(number)}
              >
                {number}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Prox.
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
