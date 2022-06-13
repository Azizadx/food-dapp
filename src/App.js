/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { login, logout as destroy, accountBalance } from "./utils/near";
import Wallet from "./components/wallet";
import { Notification } from "./components/utils/Notifications";
import Products from "./components/marketplace/Products";
import Cover from "./components/utils/cover";
import coverImg from "/Users/azizamed/Documents/Development/near-blockchain/learning/near-marketplace-ui/src/asset/img/sandwich.jpg";
import "./App.css";

const App = function AppWrapper() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    const getBalance = async function getBalance() {
      if (account.accountId) {
        setBalance(await accountBalance());
      }
    };
    getBalance();
  }, []);
  return (
    <>
      <Notification />
      {account.accountId ? (
        <Container fluid="md">
          <Nav className="justify-content-end pt-3 pb-5">
            <Nav.Item>
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <main><Products /></main>
        </Container>
      ) : (
        <Cover name="Street Food" login={login} coverImg={coverImg} />
      )}
    </>
  );
}

export default App;