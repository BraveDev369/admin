// src/context/ThemeProvider.jsx
import { ConfigProvider, Spin, theme as antdTheme } from "../ui";
import JalaliProvider from "antd-jalali-v5";
import faIR from "antd/locale/fa_IR";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const AntdProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <ConfigProvider
        direction="rtl"
        locale={faIR}
        warning={{
          strict: false, // این خط باعث میشه وارنینگ غیب شه
        }}
        theme={{
          algorithm: isDark
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
          token: {
            fontFamily: "Estebdad",
          },
        }}
      >
        <ThemeContext.Provider value={{ isDark, toggleTheme, setLoading }}>
          {loading && (
            <Spin
              style={{ fontSize: "150px" }}
              spinning
              size="large"
              tip="صبر کنید"
              fullscreen
            />
          )}
          <JalaliProvider />
          {children}
        </ThemeContext.Provider>
      </ConfigProvider>
    </>
  );
};

export const useTheme = () => useContext(ThemeContext);
