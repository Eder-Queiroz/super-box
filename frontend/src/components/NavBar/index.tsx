import { useState } from "react";
import style from "./style.module.scss";
import {
  BsCartPlus,
  BsCardChecklist,
  BsClockHistory,
  BsSearch,
} from "react-icons/bs";
import { LuLogOut, LuMenu } from "react-icons/lu";
import Link from "next/link";
import { signOut } from "@/context/AuthContext";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={style.nav}>
      <span className={style.title}>Super Box</span>
      <div className={style.iconsNavResponsive}>
        <LuMenu
          size={30}
          color="#fff"
          style={{ cursor: "pointer" }}
          onClick={handleMenu}
        />
        <div className={`${style.container} ${isMenuOpen ? style.active : ""}`}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <BsCartPlus size={30} color="#000" />
            <BsSearch size={30} color="#000" />
            <BsCardChecklist size={30} color="#000" />
            <BsClockHistory size={30} color="#000" />
          </div>
          <LuLogOut size={30} color="#000" onClick={() => signOut()} />
        </div>
      </div>
      <div className={style.iconsNav}>
        <Link href="/sale">
          <BsCartPlus size={30} color="#fff" />
        </Link>
        <Link href="/productRegister">
          <BsSearch size={30} color="#fff" />
        </Link>
        <Link href="/stock">
          <BsCardChecklist size={30} color="#fff" />
        </Link>
        <Link href="/history">
          <BsClockHistory size={30} color="#fff" />
        </Link>
        <LuLogOut size={30} color="#fff" onClick={() => signOut()} />
      </div>
    </nav>
  );
}
