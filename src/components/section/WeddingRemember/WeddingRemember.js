"use client"
import Image from "next/image";
import imageSeo from "../../../assets/img/home/seo-home.jpg";
import { useTranslations } from "next-intl";
const WeddingRemember = () => {
    const texts = useTranslations("home.description");

    return ( 
        <div className="wedding-remember">
            <Image src={imageSeo} alt="weddings" />
            <div className="content-description">
                <h2 className="title">{texts("title")}</h2>
                <p className="description">{texts("text")}</p>
            </div>
        </div>
     );
}
 
export default WeddingRemember;