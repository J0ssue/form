import { Input } from "./types";

const formSchema: { inputs: Input[]; button: string; successMessage: string } =
  {
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
    ],
    button: "Save",
    successMessage:
      "Hello {name} from {country}. on {day} of {month} you will have {years}",
  };

export default formSchema;
