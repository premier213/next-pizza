"use client";

import { ReactNode, createContext, useState } from "react";

export const MyBasket = createContext<string[]>([]);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<string[]>([]);
  return (
    <MyBasket.Provider value={{ state, setState }}>
      {children}
    </MyBasket.Provider>
  );
}
