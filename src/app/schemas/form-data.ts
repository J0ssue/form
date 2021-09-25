import { FormSchema } from "./types";

export const formSchema: FormSchema = {
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
      id: "country",
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
    "Hello {name} from {country}. on {day} of {month} you will be {years} years old.",
  errorMessage: "Please fill in the inputs in red",
  caption: "Your Name and LastName",
  validations: {
    name: {
      required: {
        value: true,
        message: "required",
      },
    },
    surname: {
      required: {
        value: true,
        message: "required",
      },
    },
    birthday: {
      required: {
        value: true,
        message: "required",
      },
    },
    country: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
