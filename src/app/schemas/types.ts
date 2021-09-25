export type Input = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
};

export type Entry = {
  name: string;
  country: string;
  birthday: string;
};

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

export type ErrorRecord<T> = Partial<Record<keyof T, string>>;

export type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

export type FormSchema = {
  inputs: Input[];
  button: string;
  successMessage: string;
  errorMessage: string;
  caption: string;
  validations: Validations<{}>;
};
