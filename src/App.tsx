import React, { Suspense } from "react";
import { Global } from "@emotion/react";

import PageLoader from "./components/shared/PageLoader";

import globalStyles from "./components/design-system/_static/GlobalStyles";

// Todo: remove components once there is no need for them
import Button from "./components/design-system/_atom/Button";
import Input from "./components/design-system/_atom/Input";
import SelectInput from "./components/design-system/_atom/SelectInput";
import MessageBox from "./components/design-system/_atom/MessageBox";
import InformationBox from "./components/design-system/_molecule/InformationBox";

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Suspense fallback={<PageLoader />}>
        <Button onClickHandler={() => console.log("here")} label="button" />
        <Input placeholder="name here" type="date" />
        <SelectInput
          options={["portugal", "mexico"]}
          onChangeHandler={() => console.log("here")}
        />
        <MessageBox
          message="Hello {name} from {country}. on {day} of {month} you will have {years}"
          type="error"
        />
        <InformationBox
          entries={[
            {
              name: "mariano suarez",
              country: "argentina",
              birthdate: "12/5/1989",
            },
            { name: "jose kim", country: "argentina", birthdate: "11/5/1989" },
          ]}
          caption="Your name and last name"
        />
      </Suspense>
    </div>
  );
}

export default App;
