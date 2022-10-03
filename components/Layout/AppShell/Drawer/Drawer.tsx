import { Navbar, Text, ScrollArea } from "@mantine/core";
import ThemeToggleButton from "../../../ThemeToggleButton";
import { UserCard } from "../UserCard/User";
import DrawerLinks from "./DrawerLinks";

function DrawerLayout() {
  return (
    <Navbar>
      <Navbar.Section mt="xs">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text>Depechetoa</Text>
          <ThemeToggleButton />
        </div>
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <DrawerLinks />
      </Navbar.Section>
      <Navbar.Section>
        <UserCard />
      </Navbar.Section>
    </Navbar>
  );
}

export default DrawerLayout;
