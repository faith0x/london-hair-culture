import { createContext, useContext, useState, type ReactNode } from "react";

export type ServiceFocus = "hair" | "fashion";

type Ctx = {
  active: ServiceFocus;
  setActive: (c: ServiceFocus) => void;
};

const ServiceFocusCtx = createContext<Ctx | null>(null);

export function ServiceFocusProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ServiceFocus>("hair");
  return (
    <ServiceFocusCtx.Provider value={{ active, setActive }}>
      {children}
    </ServiceFocusCtx.Provider>
  );
}

export function useServiceFocus() {
  const ctx = useContext(ServiceFocusCtx);
  if (!ctx) throw new Error("useServiceFocus must be used within ServiceFocusProvider");
  return ctx;
}
