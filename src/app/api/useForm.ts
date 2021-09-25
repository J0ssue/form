import { ChangeEvent, FormEvent, useState } from "react";

import { Validations, ErrorRecord } from "../schemas/types";

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: (data: { [x: string]: any }) => void;
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});

  const handleChange = (
    key: string,
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    const value = e ? e.target.value : "";
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit(data);
      // @ts-expect-error
      e.target.reset();
      // @ts-expect-error
      setData({});
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
};
