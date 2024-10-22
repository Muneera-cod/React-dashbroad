import React, { useState } from "react";
import Customerlist from "./Customerlist";
import CustomerInfo from "./Customer/CustomerInfo";

import Navbaranalytics from "./Navbaranalytics";

import AddCustomerForm from "./AddCustomer/AddCustomerForm";

export const Analytics = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-row min-w-screen h-full">
      <div className="w-full flex flex-col p-6 gap-5">
        <Navbaranalytics active={active} setActive={setActive} />
        <Customerlist />
      </div>

      {active && <AddCustomerForm active={active} setActive={setActive} />}
      {!active && <CustomerInfo  />}

    </div>
  );
};
