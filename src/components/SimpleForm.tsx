 
import { GlobalForm, type Field} from '../actoin_buttons/global_form/GlobalForm'
const fields: Field[]= [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "age", label: "Age", type: "number" }
  ];
function SimpleForm() {
    
  return (
         <GlobalForm fields={fields} actions={["add", "edit", "delete"]} />
  )
}

export default SimpleForm