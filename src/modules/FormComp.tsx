import React, { useState } from "react";
import { slice } from "lodash";

import useAxios from "app/api/useAxios";
import { formSchema } from "app/schemas/form-data";
import { Entry } from "app/schemas/types";
import {
  getSuccessMessageFromEntry,
  getSuccessMessageFromData,
  getEntry,
} from "./utils";

import Form from "components/design-system/_organism/Form";
import PageLoader from "components/shared/PageLoader";

const FormComp = () => {
  const { response, error, loading } = useAxios({ method: "get" });

  const [entries, setEntries] = useState<Entry[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const successMessageHandler = (message: string) => {
    if (message) {
      setSuccessMessage(message);
    }

    const id = setTimeout(() => {
      setSuccessMessage(null);
      clearTimeout(id);
    }, 3000);
  };

  const submitForm = (data: { [x: string]: any }) => {
    const message = getSuccessMessageFromData(formSchema.successMessage, data);

    const entry = getEntry(data);

    setEntries([...entries, entry]);

    successMessageHandler(message);
  };

  if (loading || error) {
    return <PageLoader />;
  }

  return (
    <Form
      formSchema={formSchema}
      options={slice(response, 0, 10).map(
        (i: any) => i.translations.por.common
      )}
      onFormSubmit={(data) => submitForm(data)}
      entries={entries}
      successMessage={successMessage}
      entryClickHandler={(entry: Entry) =>
        successMessageHandler(
          getSuccessMessageFromEntry(formSchema.successMessage, entry)
        )
      }
      initialValues={{
        name: "",
        surname: "",
        country: "",
        birthday: "",
      }}
    />
  );
};

export default FormComp;
