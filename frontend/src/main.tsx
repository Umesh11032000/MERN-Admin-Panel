import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RoutesApp } from "./router.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/layout/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="system">
      <Toaster richColors position="top-center" duration={3000} />
      <StrictMode>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </StrictMode>
    </ThemeProvider>
  </Provider>
);
