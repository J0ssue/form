import { FormSchema } from "./types";

const formSchema: FormSchema = {
  inputs: [
    {
      id: "name",
      type: "text",
      label: "Name",
      placeholder: "name here",
    },
    {
      id: "surname",
      type: "text",
      label: "Surname",
      placeholder: "name here",
    },
    {
      id: "countries",
      type: "select",
      label: "Countries",
      placeholder: "Countries",
    },
    {
      id: "birthday",
      type: "date",
      label: "birthday",
      placeholder: "mm/dd/yyyy",
    },
  ],
  button: "Save",
  successMessage:
    "Hello {name} from {country}. on {day} of {month} you will have {years}",
  errorMessage: "Please fill in the inputs in red",
  caption: "Your Name and LastName",
};

export default formSchema;
