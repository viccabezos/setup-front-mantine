import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Settings, User } from "tabler-icons-react";

const Pages = [
  {
    name: "Login",
    path: "/auth",
    icon: <User />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: <Home />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User />,
  },
];

function DrawerLinks() {
  const router = useRouter();

  const isRouteActive = (path: string) => {
    if (path === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(path);
  };
  return (
    <Stack>
      {Pages.map((page) => (
        <Link passHref href={page.path} key={page.path}>
          <Button
            variant={isRouteActive(page.path) ? "filled" : "subtle"}
            leftIcon={page.icon}
          >
            {page.name}
          </Button>
        </Link>
      ))}
    </Stack>
  );
}

export default DrawerLinks;
