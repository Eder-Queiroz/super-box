import style from "./style.module.scss";

export default function Glass(props: any) {
  return <div className={style.glassontainer} onClick={props.toggle} />;
}
