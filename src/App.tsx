import React, { Suspense } from "react";
import { Global } from "@emotion/react";

import PageLoader from "./components/shared/PageLoader";

import globalStyles from "./components/design-system/_static/GlobalStyles";

import FormComp from "./modules/FormComp";

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Suspense fallback={<PageLoader />}>
        <FormComp />
      </Suspense>
    </div>
  );
}

export default App;
