import { useMessage } from "./components/message_box/useMessage.ts";
import {  useState, type ChangeEvent } from "react";
import "./App.css";
 
function App() {
  const [color, setColor] = useState<string>('#fff')
  const { showMessage, showConfirm } = useMessage();


  const addToDatabase =  async () => {
    
   const response: boolean = await showConfirm('Ask', "خارج می lkjsfdljklj;lkjlk;jlk;jl;kjl;kjl;kjl;kjl;kjasdfl;jasld;fkjasl;kfjaslkjfl;sakjf;lsakjf;lkjشوید؟");
   if(response) await showMessage('Success', 'کلید اره فشرده شده')
    else await showMessage('Error', 'کلید نه فشرده شده');
  }
  return (
    <>
       <div
      style={{
        backgroundColor: "#959595",
        padding: "20px",
        display: "grid",
        gap: "20px",
        minHeight: "100vh",
      }}
    >
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setColor('#' + e.target.value)}
        style={{
          fontSize: "20px",
          padding: "10px",
          borderRadius: "10px",
        }}
        placeholder= 'color name'
      />

      <div
        style={{
          backgroundColor: color|| "#abb",
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          display: "grid",
          alignContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          border: "2px solid green",
          textAlign: "center",
        }}
      >
        
        {color}</div>

        <button
          onClick={async () => await showMessage('Success', "ثبت بkdfjal;skdjfl;kasdjfl;kjasdfl;kjasl;kfjasl;dkfl;asdkfjl;asdkjf;lkjs;lkjf;lksajdfl;kasjdf;lkjا موفقیت انجام شد!")}
        >
          +
        </button>
        <button onClick={async () => addToDatabase()}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
