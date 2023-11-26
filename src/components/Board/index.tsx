import React, { useCallback, useMemo } from "react";
import "./board.css";
import Card from "../Card";
import { BiRadioCircle } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import { LuMoreHorizontal } from "react-icons/lu";
// import Column from "../Column/Column";
// import { Ticket, User } from "../../interfaces";

function Board({}) {
  // const keys: string[] = useMemo(() => Object.keys(gridData), [gridData]);

  return (
    <div className="grid">
      {/* {keys.map((k: string) => (
        <Column
          key={k}
          tickets={gridData[k] as Ticket[]}
          grouping={grouping}
          groupBy={k}
          userIdToData={userIdToData}
        />
      ))} */}
      {/* <div className="column">
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
      </div> */}
      <div className="column">
        <div className="column-header">
          <div className="column-header-left-container">
            <BiRadioCircle color="#e2e2e2" size={24} />
            <div className="column-title">
              Todo
              <span className="count">3</span>
            </div>
          </div>
          <div className="column-header-right-container">
            <GrAdd color="#797d84" size={12} />
            <LuMoreHorizontal color="#797d84" size={14} />
          </div>
        </div>
        <Card />
        <Card />
      </div>
      <div className="column">
        <div className="column-header">
          <div className="column-header-left-container">
            <BiRadioCircle color="#e2e2e2" size={24} />
            <div className="column-title">
              Todo
              <span className="count">3</span>
            </div>
          </div>
          <div className="column-header-right-container">
            <GrAdd color="#797d84" size={12} />
            <LuMoreHorizontal color="#797d84" size={14} />
          </div>
        </div>
        <Card />
        <Card />
      </div>
      <div className="column">
        <div className="column-header">
          <div className="column-header-left-container">
            <BiRadioCircle color="#e2e2e2" size={24} />
            <div className="column-title">
              Todo
              <span className="count">3</span>
            </div>
          </div>
          <div className="column-header-right-container">
            <GrAdd color="#797d84" size={12} />
            <LuMoreHorizontal color="#797d84" size={14} />
          </div>
        </div>
        <Card />
        <Card />
      </div>
      <div className="column">
        <div className="column-header">
          <div className="column-header-left-container">
            <BiRadioCircle color="#e2e2e2" size={24} />
            <div className="column-title">
              Todo
              <span className="count">3</span>
            </div>
          </div>
          <div className="column-header-right-container">
            <GrAdd color="#797d84" size={12} />
            <LuMoreHorizontal color="#797d84" size={14} />
          </div>
        </div>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Board;
