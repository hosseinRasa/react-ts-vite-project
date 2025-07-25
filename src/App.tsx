import { useMessage } from "./components/message_box/useMessage.ts";
import { useEffect } from "react";
import "./App.css";
import { load } from "./utility.ts";
function App() {
  const { showMessage, showConfirm } = useMessage();
  // const [count, setCount] = useState(0)
  useEffect(() => {
    return () => {
      console.log("exit");
      load();
    };
  }, []);

  const addToDatabase =  async () => {
    
   const response: boolean = await showConfirm('Ask', "خارج می lkjsfdljklj;lkjlk;jlk;jl;kjl;kjl;kjl;kjl;kjasdfl;jasld;fkjasl;kfjaslkjfl;sakjf;lsakjf;lkjشوید؟");
   if(response) await showMessage('Success', 'کلید اره فشرده شده')
    else await showMessage('Error', 'کلید نه فشرده شده');
  }
  return (
    <>
      <div id="appRoot">
        <div id="showColor">color name</div>

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
