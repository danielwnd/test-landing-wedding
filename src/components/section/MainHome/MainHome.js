"use client";
import imageBackup from "../../../assets/img/home/header-home-estatico.webp"
import { useTranslations } from "next-intl";
import ButtonInputFake from "@/components/ui/ButtonInputFake";
import breakpointConstants from "@/constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";
import FormRegister from "@/components/ui/FormRegister";
import useClientComponents from "@/hooks/useClientComponents";

const MainHome = () => {
    const textRegister = useTranslations("register");
    const textRegisterHome = useTranslations("home.header");
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
    const isClient = useClientComponents();
  return (
    <div className="main-home relative">
      <div className="main-background" style={{
        backgroundImage: `url("${imageBackup.src}")`,
      }}>
      <div className="main-background-gradient"/>
      <div className="main-background-gradient-base"/>
      </div>
      <div className="container-main">
        <div className="flex flex-col items-center container-form">
            <h1>{textRegister("main")}</h1>
            <p className="fn-roboto-light">{textRegister("subtitle")}</p>
            <p className="pt-2 pb-3"><strong>{textRegister("title")}</strong></p>
            {isClient && !isMobile && <FormRegister />}
            {isClient && isMobile && <ButtonInputFake placeholder={textRegister("name")} />}
        </div>
        <div id="lugares" className="text-center content-description">
            <h2 className="fn-beauty text-4xl title">{textRegisterHome("title")}</h2>
            <p className="fn-roboto-light text-sm description">{textRegisterHome("text")}</p>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
