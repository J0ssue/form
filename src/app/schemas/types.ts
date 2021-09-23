export type Input = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
};

export type Entry = {
  name: string;
  country: string;
  birthdate: string;
};

export type FormSchema = {
  inputs: Input[];
  button: string;
  successMessage: string;
  errorMessage: string;
  caption: string;
};
