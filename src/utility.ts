 
export const load = () => {
 
  const body = document.getElementById("appRoot") as HTMLDivElement;
  body.style.backgroundColor = "#959595";
  body.style.padding = "20px";
  body.style.display = "grid";
  body.style.gap = "20px";

  
  //   const root = document.querySelector('root') as HTMLDivElement
  //   root.style.backgroundColor = 'blue'
  const colorDiv = document.getElementById("showColor") as HTMLDivElement;
  console.log(colorDiv);
  if (colorDiv) {
    colorDiv.style.backgroundColor = "#fff";
    colorDiv.style.width = "300px";
    colorDiv.style.height = "300px";
    colorDiv.style.borderRadius = "10px";
    colorDiv.style.display = "grid";
    colorDiv.style.color = "white";
    colorDiv.style.fontWeight = "bold";
    colorDiv.style.fontSize = "20px";

    colorDiv.style.alignContent = "center";
    colorDiv.style.border = "2px solid green";
  }

  const input = document.createElement("input") as HTMLInputElement;
  input.setAttribute("type", "text");
  input.style.fontSize = "20px";
  input.style.padding = "10px";
  input.style.borderRadius = "10px";
  
    input.addEventListener("input", (e: Event) => {
       colorDiv.textContent = '#' + (e.target as HTMLInputElement).value;
        
       if(
        colorDiv.textContent.trim() === '#'
       )
       {
            colorDiv.textContent.replaceAll('#', '')
           colorDiv.style.backgroundColor = `#fff`;
        }
      else {colorDiv.style.backgroundColor = `${colorDiv.textContent}`
      }
    });
  body.appendChild(input);
};
