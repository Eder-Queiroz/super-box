import { HtmlHTMLAttributes } from "react";
import Glass from "../ui/Glass";
import { Card } from "../ui/Card";
import style from "./style.module.scss";

interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  toggle: any;
  size?: string;
}

export default function Modal({ children, toggle, size, ...rest }: ModalProps) {
  return (
    <div className={style.modalContainer} {...rest}>
      <Glass toggle={toggle} />
      <Card style={{ width: `${size}%`, zIndex: "10" }}>{children}</Card>
    </div>
  );
}
