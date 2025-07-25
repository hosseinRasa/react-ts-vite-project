import { useContext } from "react";
import { ActionContext } from "./ActionContext";

export function useAction() {
  const context = useContext(ActionContext);
  if (!context) {
    throw new Error("useAction must be used within ActionProvider");
  }
  return context;
}
