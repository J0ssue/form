import React from "react";
import { slice } from "lodash";

import Form from "components/design-system/_organism/Form";
import formSchema from "app/schemas/form-data";
import useAxios from "app/api/useAxios";
import PageLoader from "components/shared/PageLoader";

const FormComp = () => {
  const { response, error, loading } = useAxios({ method: "get" });

  if (loading || error) {
    return <PageLoader />;
  }

  return (
    <Form
      formSchema={formSchema}
      // @ts-ignore
      options={slice(response, 0, 10).map((i) => i.translations.por.common)}
      onFormSubmit={() => console.log("submit")}
      onSubmitSuccess={false}
      onSubmitError={false}
    />
  );
};

export default FormComp;
