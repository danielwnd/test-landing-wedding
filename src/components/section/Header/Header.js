"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/img/oweddings/horizontal/color-blanco.svg";
import Link from "next/link";

const Header = () => {
  const textWebsiteMenu = useTranslations("menu");
  const x = useState(false);

  return (
    <header className="container-header container mx-auto absolute">
      <nav className="flex container-header-nav">
        <div className="flex content-logo">
          <button className="btn-menu">
            <i className="icon icon-menu" />
          </button>
          <Link href={"/"}>
            <Image className="logo-menu" alt="weddings by oasis" src={Logo} />
          </Link>
        </div>
        <div className="flex">
          <div className="hidden sm:block nav-links align-center items-center ">
            <Link href={"/"}>{textWebsiteMenu("home")}</Link>
            <Link href={"#lugares"}>{textWebsiteMenu("places")}</Link>
            <Link href={"#lugares"}>{textWebsiteMenu("packages")}</Link>
            <Link href={"/"}>{textWebsiteMenu("gallery")}</Link>
            <Link href={"/"}>{textWebsiteMenu("howtoworks")}</Link>
            <Link href={"/"}>{textWebsiteMenu("faqs")}</Link>
          </div>
          <button className="btn btn-primary btn-login">
            <span>{textWebsiteMenu("btn-login")}</span>
            <i className="icon icon-exit" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
