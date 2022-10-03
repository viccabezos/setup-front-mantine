import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useLocalStorage } from "@mantine/hooks";
import { ColorScheme, MantineProvider } from "@mantine/core";
import ThemeProvider from "../components/ThemeProvider";
import { NotificationsProvider } from "@mantine/notifications";
import { PropsWithChildren } from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });

  return (
    <ThemeProvider colorScheme={colorScheme} setColorScheme={setColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          fontFamily: "Roboto, sans-serif",
          loader: "bars",
        }}
      >
        <NotificationsProvider>
          {/* authentication should wrap comoponent page props */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </ThemeProvider>
  );
}

//TODO: Add authentication, see if Apollo or react Query, apollo has his own query hook

// function Authentication({children}:PropsWithChildren<{}>){

// }

export default MyApp;
