import { PropsWithChildren, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Drawer,
  ScrollArea,
  Avatar,
} from "@mantine/core";
import ThemeToggleButton from "./ThemeToggleButton";
import { UserCard } from "./Layout/AppShell/UserCard/User";
import DrawerLayout from "./Layout/AppShell/Drawer/Drawer";

function Layout({ children }: PropsWithChildren<{}>) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbar={
        <Drawer opened={opened} onClose={() => setOpened(false)}>
          <DrawerLayout />
        </Drawer>
      }
      footer={
        <Footer height={60} p="md">
          We can add a footer if we like
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />

            <Text>Depechetoa</Text>
            <ThemeToggleButton />
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
export default Layout;
