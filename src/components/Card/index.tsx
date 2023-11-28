import React from "react";
import "./card.css";
import { LuMoreHorizontal } from "react-icons/lu";
import { Ticket, User } from "../../types";
import { getStatusIcon } from "../Board/icons";

function Card({
  ticket,
  userData,
  hideStatusIcon,
  hideProfileIcon,
}: {
  ticket: Ticket;
  userData: User;
  hideStatusIcon: boolean;
  hideProfileIcon: boolean;
}) {
  return (
    <div className="card">
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {hideProfileIcon ? null : (
          <div className="usericon-container">
            <div className="usericon-text">{userData.name[0]}</div>
            <div
              className={`user-status ${userData.available && "available"}`}
            ></div>
          </div>
        )}
      </div>
      <div className="middle-container">
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="bottom-container">
        <div className="more-icon-container">
          <LuMoreHorizontal color="#797d84" />
        </div>
        {ticket.tag.map((t: string) => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
