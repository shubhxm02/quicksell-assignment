import React, { useCallback, useMemo } from "react";
import "./board.css";
import Card from "../Card";
import { BiRadioCircle } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import { LuMoreHorizontal } from "react-icons/lu";
import { Ticket, User } from "../../types";
import { UserIcon, getPriorityIcon, getStatusIcon } from "./icons";

function Board({
  gridData,
  grouping,
  userIdToData,
}: {
  gridData: Record<string, Ticket[]>;
  grouping: string;
  userIdToData: Record<string, User>;
}) {
  const keys = Object.keys(gridData);

  const getTitle = (groupBy: string) => {
    if (grouping === "status") return groupBy;
    if (grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy].name;
  };

  const getIcon = (groupBy: string) => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") return getPriorityIcon(groupBy);
    if (grouping === "user")
      return (
        <UserIcon
          name={userIdToData[groupBy].name}
          available={userIdToData[groupBy].available}
        />
      );
  };

  return (
    <div className="grid">
      {keys.map((k: string) => {
        const tickets = gridData[k] as Ticket[];
        const title: string | undefined = getTitle(k);
        const icon: JSX.Element | undefined = getIcon(k);
        return (
          <div className="column">
            <div className="column-header">
              <div className="column-header-left-container">
                {icon}
                <div className="column-title">
                  {title}
                  <span className="count">{tickets.length}</span>
                </div>
              </div>
              <div className="column-header-right-container">
                <GrAdd color="#797d84" size={12} />
                <LuMoreHorizontal color="#797d84" size={14} />
              </div>
            </div>
            <div className="cards-container">
              {tickets.map((ticket: Ticket) => (
                <Card
                  key={ticket.id}
                  ticket={ticket}
                  userData={userIdToData[ticket.userId]}
                  hideStatusIcon={grouping === "status"}
                  hideProfileIcon={grouping === "user"}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Board;
