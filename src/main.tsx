import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MessageProvider } from "./components/message_box/MessageProvider.tsx";
import type { FormAction } from "./actoin_buttons/ActionContext.ts";
import { ActionProvider } from "./actoin_buttons/ActionProvider.tsx";
const handleGlobalAction = (action: FormAction, values: Record<string, string | null>) => {
  if (action === "add") console.log("Global Add:", values);
  if (action === "edit") console.log("Global Edit:", values);
  if (action === "delete") console.log("Global Delete:", values);
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MessageProvider>
        <ActionProvider onAction={handleGlobalAction}>

      <App />
        </ActionProvider>
    </MessageProvider>
  </StrictMode>
);
