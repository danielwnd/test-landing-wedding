"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Header = () => {
    const textWebsiteMenu = useTranslations("menu");
    const x = useState(false);

  return (
    <header className="container-header">
      <nav className="flex">
        <div>sandwitgh mobile</div>
        <div>logo</div>
        <div>{"(nav) - movile"}</div>
        <button className="btn btn-primary">{textWebsiteMenu("btn-login")}</button>
      </nav>
    </header>
  );
};

export default Header;
