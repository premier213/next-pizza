"use client";

import { useContext } from "react";
import { MyBasket } from "./stateProvider";
import Link from "next/link";

export function BasketButton() {
  const { state } = useContext(MyBasket);
  return (
     <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href="/cart">
      <span>سبد خرید</span>
      {state.length > 0 ? <span>({state.length})</span> : ""}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  );
}
