"use client";
import SliderServices from "@/components/ui/SliderServices";
import { useTranslations } from "next-intl";

const InformationWeddingWithSlider = (props) => {
  const { items } = props;
  const texts = useTranslations("home.packages");
  return (
    <div className="information-wedding-slider container px-3 relative m-auto">
      <div className="content-description text-center px-3 pb-2 flex items-center flex-col">
        <h2 className="title text-xs fn-roboto-light">{texts("title")}</h2>
        <p className="text-xl">
          <strong className="subtitle font-bold fn-roboto-light">{texts("subtitle")}</strong>
        </p>
        <p className="description text-xs fn-roboto-light">{texts("text")}</p>
      </div>
      <SliderServices items={items} infinite={true} type={"wedding"} />
    </div>
  );
};

export default InformationWeddingWithSlider;
