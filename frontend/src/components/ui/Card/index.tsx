import { AllHTMLAttributes } from "react";
import style from "./style.module.scss";

interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, ...rest }: CardProps) {
  return (
    <>
      <div className={style.container} {...rest}>
        {children}
      </div>
    </>
  );
}
