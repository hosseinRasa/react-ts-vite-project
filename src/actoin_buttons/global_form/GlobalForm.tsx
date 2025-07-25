import { useState,type ChangeEvent } from "react";
import { useAction } from "../useAction";

export 
type Field = { name: string; label: string; type: "text" | "number" | "email" };
type FormAction = "add" | "edit" | "delete";

type GlobalFormProps = {
  fields: Field[];
  actions: FormAction[];
};

export function GlobalForm({ fields, actions }: GlobalFormProps) {
  const { onAction } = useAction();
  const [values, setValues] = useState<Record<string, string | null>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form className="p-4 border rounded">
      {fields.map((field) => (
        <div key={field.name} className="mb-2">
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            onChange={handleChange}
            className="border p-1 w-full"
          />
        </div>
      ))}

      <div className="flex gap-2 mt-4">
        {actions.includes("add") && (
          <button type="button" onClick={() => onAction("add", values)} className="bg-green-500 text-white px-3 py-1 rounded">
            Add
          </button>
        )}
        {actions.includes("edit") && (
          <button type="button" onClick={() => onAction("edit", values)} className="bg-blue-500 text-white px-3 py-1 rounded">
            Edit
          </button>
        )}
        {actions.includes("delete") && (
          <button type="button" onClick={() => onAction("delete", values)} className="bg-red-500 text-white px-3 py-1 rounded">
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
