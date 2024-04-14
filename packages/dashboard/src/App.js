import React, { lazy, Suspense } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const DashboardLazy = lazy(() => import("./components/Dashboard"))

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Suspense fallback="Loading...">
          <DashboardLazy />
        </Suspense>
      </StylesProvider>
    </div>
  );
};
