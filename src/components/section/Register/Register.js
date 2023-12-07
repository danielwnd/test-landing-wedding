"use client";
import { useTranslations } from "next-intl";

const Register = () => {
  const textWebsiteFooter = useTranslations("register");
  return (
    <>
        <button className="block md:hidden btn-secondary text-uppercase uppercase btn-register">
          {textWebsiteFooter("btn")}
        </button>
    </>
  );
};

export default Register;
