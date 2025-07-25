import { createContext } from "react";
import type { ErrorType } from "./MessageProvider";
 
interface MessageContextType {
  showMessage: ( type: ErrorType, title: string) => Promise<boolean>;
  showConfirm: ( type: ErrorType, title: string) => Promise<boolean>;
}

export const MessageContext = createContext<MessageContextType | undefined>(undefined);
