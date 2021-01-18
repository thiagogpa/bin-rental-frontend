import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      Bin rental
      &copy; 2020.
    </CFooter>
  );
};

export default React.memo(TheFooter);
