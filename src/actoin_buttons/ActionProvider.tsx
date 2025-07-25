// import { ReactNode } from "react";
import { ActionContext, type FormAction } from "./ActionContext";

type ActionProviderProps = {
  children: React.ReactNode;
  onAction: (action: FormAction, values: Record<string, string | null>) => void;
};

export function ActionProvider({ children, onAction }: ActionProviderProps) {
  return (
    <ActionContext.Provider value={{ onAction }}>
      {children}
    </ActionContext.Provider>
  );
}
