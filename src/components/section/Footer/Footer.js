import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Logo from "../../../assets/img/oweddings/horizontal/color.svg";
import SocialNetworkButton from "@/components/ui/SocialNetworkButton";

const Footer = () => {
  const textWebsiteFooter = useTranslations("footer");
  const pagesLinks = [
    {
      name: textWebsiteFooter("howtoworks"),
      href: "/",
    },
    {
      name: textWebsiteFooter("packages"),
      href: "/",
    },
    {
      name: textWebsiteFooter("faqs"),
      href: "/",
    },
    {
      name: textWebsiteFooter("terms"),
      href: "/",
    },
  ];
  return (
    <footer className={`container-footer`}>
      <div className="container-body m-auto container">
        <Link href={"/"} className="flex">
          <Image
            width={125}
            height={46}
            className="logo-menu"
            alt="weddings by oasis"
            src={Logo}
          />
        </Link>
        <nav className="nav-footer">
          {pagesLinks.map((item, i) => {
            return (
              <Link href={item.href} key={i}>
                {item.name}
              </Link>
            );
          })}
          <a href={"oasishoteles.com"} target="_blank">
            {"oasishoteles.com"}
          </a>
        </nav>
          <div className="container-social">
            <SocialNetworkButton href="facebook.com" type="facebook" />
            <SocialNetworkButton href="twitter.com" type="twitter" />
            <SocialNetworkButton href="instagram.com" type="instagram" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
