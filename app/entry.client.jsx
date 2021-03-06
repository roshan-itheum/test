import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import { useState } from "react";
import { hydrate } from "react-dom";
import { ClientStyleContext } from "./store/chakraContext";
import createEmotionCache from "./utils/createEmotionCache";

function ClientCacheProvider({ children }) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
