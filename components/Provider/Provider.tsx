"use client";
import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </div>
  );
};

export default ReduxProvider;
