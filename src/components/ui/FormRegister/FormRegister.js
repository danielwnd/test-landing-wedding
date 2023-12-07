"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const FormRegister = (props) => {
  const [ dataClient, setDataClient ] = useState({
    name: "",
    lastname: "",
    company: "",
    category: "",
    phone: "",
    email: "",
    country: "",
    password: "",
  });
  const textRegister = useTranslations("register");
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="form-register grid grid-cols-2 gap-3">
      <div>
        <input
          type="text"
          value={dataClient.name}
          placeholder={textRegister("name")}
          onChange={(e) => {
            setDataClient({ ...dataClient, name: e.target.value });
          }}
        />
      </div>
      <div>
      <input
          type="text"
          value={dataClient.lastname}
          placeholder={textRegister("surname")}
          onChange={(e) => {
            setDataClient({ ...dataClient, lastname: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={dataClient.company}
          placeholder={textRegister("company")}
          onChange={(e) => {
            setDataClient({ ...dataClient, company: e.target.value });
          }}
        />
      </div>
      <div>
      <input
          type="text"
          value={dataClient.category}
          placeholder={textRegister("category")}
          onChange={(e) => {
            setDataClient({ ...dataClient, category: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={dataClient.phone}
          placeholder={textRegister("phone")}
          onChange={(e) => {
            setDataClient({ ...dataClient, phone: e.target.value });
          }}
        />
      </div>
      <div>
      <input
          type="text"
          value={dataClient.email}
          placeholder={textRegister("email")}
          onChange={(e) => {
            setDataClient({ ...dataClient, email: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={dataClient.country}
          placeholder={textRegister("country")}
          onChange={(e) => {
            setDataClient({ ...dataClient, country: e.target.value });
          }}
        />
      </div>
      <div>
      <input
          type="text"
          value={dataClient.password}
          placeholder={textRegister("password")}
          onChange={(e) => {
            setDataClient({ ...dataClient, password: e.target.value });
          }}
        />
      </div>
      <div>
        <button type="submit">{textRegister("btn")}</button>
      </div>
    </form>
  );
};

export default FormRegister;
