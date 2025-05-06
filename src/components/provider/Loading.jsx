import { Spin } from "../../ui";
import React, { createContext } from "react";

const LoadingProvider = createContext();

export function Loading({ childern }) {
  const [loading, setLoading] = useState(false);
  return (
    <Spin
      style={{ fontSize: "150px" }}
      spinning={loading}
      size="larg"
      tip="صبر کنید"
      fullscreen
    />
  );
}

export const useLoading = () => useContext(LoadingProvider);
