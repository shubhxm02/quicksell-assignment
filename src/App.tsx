import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import { Ticket, User } from "./types";
import { getLocalStorageItem, setLocalStorageItem } from "./utils";
import { loadGrid, mapUsersByUserId } from "./utils/board";

function App() {
  const [users, setUsers] = useState<Record<string, User>>({});
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const [grouping, setGrouping] = useState<string>("status");
  const [ordering, setOrdering] = useState<string>("priority");

  const [gridData, setGridData] = useState<Record<string, Ticket[]>>({});

  const loadSettings = () => {
    setGrouping(getLocalStorageItem("grouping") || "status");
    setOrdering(getLocalStorageItem("ordering") || "priority");
  };

  const saveGrouping = (grouping: string) => {
    setLocalStorageItem("grouping", grouping);
    setGrouping(grouping);
  };

  const saveOrdering = (ordering: string) => {
    setLocalStorageItem("ordering", ordering);
    setOrdering(ordering);
  };

  useEffect(() => {
    loadSettings();
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((resp) => resp.json())
      .then((res) => {
        const { tickets, users } = res;
        setTickets(tickets);
        setUsers(mapUsersByUserId(users));
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    if (!tickets.length) return;
    setGridData(loadGrid(tickets, grouping, ordering));
  }, [grouping, ordering, tickets]);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        ordering={ordering}
        setGrouping={saveGrouping}
        setOrdering={saveOrdering}
      />
      <Board gridData={gridData} grouping={grouping} userIdToData={users} />
    </div>
  );
}

export default App;
