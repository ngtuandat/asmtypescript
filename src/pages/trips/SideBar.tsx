import * as React from "react";
import { Link } from "react-router-dom";

const SideBar = (props: { children: React.ReactElement }) => {
  return (
    <div className="flex">
      <div className="w-[256px] h-screen bg-[#F9FAFB] px-3 space-y-3">
        <div className="mt-5 flex flex-col">
          <Link
            to=""
            className="hover:cursor-pointer hover:bg-[#ccc] px-3 rounded-lg py-1"
          >
            Dashboard
          </Link>
          <Link
            to="trip"
            className="hover:cursor-pointer hover:bg-[#ccc] px-3 rounded-lg py-1"
          >
            Trips
          </Link>
          <Link
            to=""
            className="hover:cursor-pointer hover:bg-[#ccc] px-3 rounded-lg py-1"
          >
            Inbox
          </Link>
          <Link
            to=""
            className="hover:cursor-pointer hover:bg-[#ccc] px-3 rounded-lg py-1"
          >
            Users
          </Link>
          <Link
            to=""
            className="hover:cursor-pointer hover:bg-[#ccc] px-3 rounded-lg py-1"
          >
            Products
          </Link>
          <Link
            to=""
            className="hover:cursor-pointer hover:bg-[#ccc] px-3 rounded-lg py-1"
          >
            Sign in
          </Link>
          <Link
            to=""
            className="hover:cursor-pointer hover:bg-[#ccc] px-3 rounded-lg py-1"
          >
            sign up
          </Link>
        </div>
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default SideBar;
