import React, { useState } from "react";
import { MdTune } from "react-icons/md";
import { LuChevronDown } from "react-icons/lu";
import "./header.css";

function Header() {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <header>
      <div className="display-dropdown">
        <div
          className="dropdown-label-container"
          onClick={() => setVisible(!visible)}
        >
          <MdTune />
          <div className="dropdown-label">Display</div>
          <LuChevronDown />
        </div>
        <div className={`dropdown-content-container ${visible && "visible"}`}>
          <div className="dropdown-content-row">
            <div className="dropdown-content-label">Grouping</div>
            <select
              name="grouping"
              id="grouping"
              // value={grouping}
              // onChange={onGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-content-row">
            <div className="dropdown-content-label">Ordering</div>
            <select
              name="ordering"
              id="ordering"
              // value={ordering}
              // onChange={onOrderingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
