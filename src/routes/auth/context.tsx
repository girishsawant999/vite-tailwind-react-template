import React, { createContext, useContext } from "react";

type TAuthContext = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  } | null;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Add your provider logic here

  return (
    <AuthContext.Provider
      value={{
        user: {
          firstName: "Girish",
          lastName: "Sawant",
          email: "girish@gmail.com",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be within Auth");
  }
  return context;
};
