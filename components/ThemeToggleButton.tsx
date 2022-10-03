import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Moon, Sun } from "tabler-icons-react";

function ThemeToggleButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title={"toggle color scheme"}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </ActionIcon>
  );
}

export default ThemeToggleButton;
