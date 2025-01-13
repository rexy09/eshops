import { AppShell, Box } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import DasboardFooter from "../navs/dashboard/DasboardFooter";
import ShopHeaderMenu from "../navs/shop/ShopHeaderMenu";

export default function ShopLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      padding="0"
      style={{
        backgroundColor: "#f9f9f9",
      }}
    >
      <AppShell.Header>
        <ShopHeaderMenu opened={opened} setOpened={toggle} />
      </AppShell.Header>
      <AppShell.Main>
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
