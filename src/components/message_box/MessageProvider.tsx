import React, { useState, useCallback, useRef } from "react";
import { MessageContext } from "./MessageContext";
import logo from "../assets/react.svg";
import { IoClose } from "react-icons/io5"; // From Ionicons set
import { FaCheck, FaTimes } from "react-icons/fa";
interface Props {
  children: React.ReactNode;
}
type Color = "red" | "green" | "gray";
export type ErrorType = "Error" | "Success" | "Ask";
export const MessageProvider = ({ children }: Props) => {
  const [message, setMessage] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [, setType] = useState<ErrorType | null>(null);
  const [color, setColor] = useState<Color | null>(null);
  const [confirmMessage, setConfirmMessage] = useState<string | null>(null);
  const confirmResolveRef = useRef<(value: boolean) => void>(null);

  // const showMessage = async (msg: string) => {
  //   setMessage(msg);
  //   // setTimeout(() => setMessage(null), 3000);
  // };

  const setTitleByType = (type: ErrorType) => {
    switch (type) {
      case "Error":
        setTitle("خطا");
        setColor("red");
 
        break;
      case "Success":
        setTitle("موفق");
        setColor("green");
   
        break;
      case "Ask":
      default:
        setTitle("توجه");
        setColor("gray");
 
        break;
    }
  };
  const showMessage = useCallback(
    (type: ErrorType, msg: string): Promise<boolean> => {
      setMessage(msg);

      setTitleByType(type);
      setType(type);
      return new Promise((resolve) => {
        confirmResolveRef.current = resolve;
      });
      // throw new Error()
    },
    []
  );
  const showConfirm = useCallback(
    (type: ErrorType, msg: string): Promise<boolean> => {
      setConfirmMessage(msg);
      setTitleByType(type);
      setType(type);
      return new Promise((resolve) => {
        confirmResolveRef.current = resolve;
      });
    },
    []
  );

  const handleConfirm = (result: boolean) => {
    setConfirmMessage(null);
    setMessage(null);
    if (confirmResolveRef.current) {
      confirmResolveRef.current(result);
    }
  };

  return (
    <MessageContext.Provider value={{ showMessage, showConfirm }}>
      {children}

      {message && (
        <div
          style={{
            position: "fixed",

            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              borderRight: "10px solid " + `${color}`,

              background: "white",
              padding: 20,
              borderRadius: 8,
              //   maxWidth: 300,
              color: "#000",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={logo} alt="لوگو" />
                <strong>{title}</strong>
              </div>
              <IoClose size={24} color="#333" />
            </div>
            <hr />
            <p style={{ width: 400, wordWrap: "break-word", overflow: "wrap" }}>
              {message}
            </p>
            <button
              style={{ marginRight: 10 }}
              onClick={() => handleConfirm(true)}
            >
              <FaCheck />
              &nbsp; باشه
            </button>
          </div>
        </div>
      )}

      {confirmMessage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            zIndex: 10000,
          }}
        >
          <div
            style={{
                            borderRight: "10px solid " + `${color}`,
              background: "white",
              padding: 20,
              borderRadius: 8,
              // maxWidth: 300,

              textAlign: "center",
              color: "#000",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={logo} alt="لوگو" />
                <strong>{title}</strong>
              </div>
              <IoClose size={24} color="#333" />
            </div>
            <hr />

            <p style={{ width: 400, wordWrap: "break-word", overflow: "wrap" }}>
              {confirmMessage}
            </p>
            <button style={{ margin: 10 }} onClick={() => handleConfirm(true)}>
              <FaCheck />
              &nbsp; آره
            </button>
            <button onClick={() => handleConfirm(false)}>
              <FaTimes />
              &nbsp; نه
            </button>
          </div>
        </div>
      )}
    </MessageContext.Provider>
  );
};
