import { AppShell, Box } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import ShopHeaderMenu from "../navs/shop/ShopHeaderMenu";
import ShopFooter from "../navs/shop/ShopFooter";

export default function ShopLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 80, md: 70, lg: 80 } }}
      padding="0"
      style={{
        backgroundColor: "#ffffff",
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
        <ShopFooter />
      </AppShell.Main>
    </AppShell>
  );
}
