import { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./style.module.scss";
import { FiLoader } from "react-icons/fi";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <button className={style.buttons} disabled={loading} {...rest}>
      {loading ? <FiLoader></FiLoader> : children}
    </button>
  );
}
