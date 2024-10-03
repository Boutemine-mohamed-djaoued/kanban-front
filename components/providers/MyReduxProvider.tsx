"use client";

// this file is created seprately to avoid turn the hole app into client side
// so we provide the state for all the components
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ReactNode } from "react";
const MyReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default MyReduxProvider;
