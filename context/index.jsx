import { createContext, useEffect, useState } from "react";
import featureFlagDataService from "../data";

export const featureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlag, setEnabledFlag] = useState({});

  async function fetchFeatureFlag() {
    try {
      setLoading(true);
      const response = await featureFlagDataService();
      setEnabledFlag(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlag();
  }, []);

  return (
    <featureFlagContext.Provider value={{ loading, enabledFlag }}>
      {children}
    </featureFlagContext.Provider>
  );
}
