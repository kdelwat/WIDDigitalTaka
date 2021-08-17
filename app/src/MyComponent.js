import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import taka from "./taka.jpg";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <img src={taka} className="taka-pic" />
        <h1>Digital Taka</h1>
        <p>Welcome to the Digital Taka portal.</p>
        <p>
          You are logged in as:
          <div className="accdata">
            <AccountData
              drizzle={drizzle}
              drizzleState={drizzleState}
              accountIndex={0}
              units="ether"
              precision={3}
            />
          </div>
        </p>
      </div>

      <div className="section">
        <h2>My wallet</h2>

        <p>
          <strong>My Balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="DigitalTaka"
            method="balanceOf"
            methodArgs={[drizzleState.accounts[0]]}
          />
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="DigitalTaka"
            method="symbol"
            hideIndicator
          />
        </p>
        <h3>Send Tokens</h3>
        <ContractForm
          drizzle={drizzle}
          contract="DigitalTaka"
          method="transfer"
          labels={["To Address", "Amount to Send"]}
        />
      </div>

      <div className="section">
        <h2>Administrator functions</h2>

        {/* https://www.trufflesuite.com/docs/drizzle/react/react-components */}
        {/* total supply*/}
        {/* mint */}
      </div>
    </div>
  );
};
