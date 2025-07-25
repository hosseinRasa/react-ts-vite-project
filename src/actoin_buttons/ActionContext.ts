import { createContext } from "react";

export type FormAction = "add" | "edit" | "delete";

export type ActionContextType = {
  onAction: (action: FormAction, values: Record<string, string | null>) => void;
};

export const ActionContext = createContext<ActionContextType | undefined>(undefined);
