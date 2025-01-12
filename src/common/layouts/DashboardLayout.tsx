import { AppShell, Box } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import HeaderMenu from "../navs/dashboard/header/HeaderMenu";
import Sidebar from "../navs/dashboard/sidebar/Sidebar";
import DasboardFooter from "../navs/dashboard/DasboardFooter";

export default function DashboardLayout() {

  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 250, breakpoint: "md", collapsed: { mobile: !opened } }}
      padding="0"
      style={{
        backgroundColor: "#f9f9f9",
      }}
    >
      <AppShell.Navbar p="0px">
        <Sidebar opened={opened} setOpened={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>
        <HeaderMenu opened={opened} setOpened={toggle} />
        <Box
          style={{
            minHeight: "90vh",
          }}
        >
          <Outlet />
        </Box>
        <DasboardFooter />
      </AppShell.Main>
    </AppShell>
  );
}
