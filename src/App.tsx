import React, { Suspense } from "react";
import { Global } from "@emotion/react";

import PageLoader from "./components/shared/PageLoader";

import globalStyles from "./components/design-system/_static/GlobalStyles";

// Todo: remove components once there is no need for them
import Button from "./components/design-system/_atom/Button";
import Input from "./components/design-system/_atom/Input";

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Suspense fallback={<PageLoader />}>
        <Button onClickHandler={() => console.log("here")} label="button" />
        <Input placeholder="name here" type="date" />
      </Suspense>
    </div>
  );
}

export default App;
