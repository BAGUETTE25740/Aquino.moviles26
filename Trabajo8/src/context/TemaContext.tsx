import React, { createContext, useState } from "react";

type Tema = "claro" | "oscuro";

type TemaContextType = {
  tema: Tema;
  alternarTema: () => void;
};

export const TemaContext = createContext<TemaContextType>({
  tema: "claro",
  alternarTema: () => {},
});

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<Tema>("claro");

  const alternarTema = () => {
    setTema(tema === "claro" ? "oscuro" : "claro");
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}