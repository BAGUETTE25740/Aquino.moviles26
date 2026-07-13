import React, { createContext, useState } from "react";

type Usuario = {
  nombre: string;
};

type AuthContextType = {
  usuario: Usuario | null;
  login: (nombre: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  usuario: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = (nombre: string) => {
    setUsuario({ nombre });
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}