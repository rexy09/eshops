import {
  CloseButton,
  Group,
  Image,
  Paper,
  ScrollArea,
  Space,
  Stack,
} from "@mantine/core";
import {
  IconBuildingStore,
  IconLayoutDashboardFilled,
  IconLogout,
  IconPackage,
  IconSettings,
  IconShoppingCart,
  IconUsers,
  IconX
} from "@tabler/icons-react";
import mainLogo from "../../../../assets/eshop_logo_2.png";

import { useMediaQuery } from "@mantine/hooks";
import Color from "../../../theme";
import classes from "./sidenav.module.css";
import NavLinkButton from "./ui/nav_link";
import AccountMenu from "../header/ui/AccountMenu";
import NotificationMenu from "../header/ui/NotificationMenu";

type SidebarProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ setOpened }: SidebarProps) {
  const matches = useMediaQuery("(min-width: 62em)");

  return (
    <nav className={classes.navbar} style={{ backgroundColor: Color.DarkBlue }}>
      <Group justify="flex-end" hiddenFrom="md">
        <CloseButton
          title="Close"
          size="xl"
          iconSize={20}
          icon={<IconX  color="white" stroke={1.5} />}
          onClick={() => setOpened(true)}
        />
      </Group>

      <Stack
        h={matches ? "95vh" : "90vh"}
        align="stretch"
        justify="space-between"
        gap="xs"
      >
        <ScrollArea h={"100vh"}>
          <div>
            <Group mt={"xs"}>
              <Image radius="md" w={"200px"} src={mainLogo} alt="logo image" />
            </Group>
            <Space h="md" />
            <Group hiddenFrom="md">
              <Paper p={"md"} radius="md" w={"100%"}>
                <Group justify="space-between">
                <AccountMenu />
                   <NotificationMenu />
                </Group>
              </Paper>
            </Group>
            <Space h="sm" />
            <NavLinkButton
              setOpened={setOpened}
              to={"/dashboard"}
              label={"Dashboard"}
              icon={IconLayoutDashboardFilled}
            />
            <Space h="sm" />
            <NavLinkButton
              setOpened={setOpened}
              to={"/Orders"}
              label={"Orders"}
              icon={IconShoppingCart}
            />
            <Space h="sm" />
            <NavLinkButton
              setOpened={setOpened}
              to={"/inventory"}
              label={"Inventory"}
              icon={IconPackage}
            />
            <Space h="sm" />
            <NavLinkButton
              setOpened={setOpened}
              to={"/Vendors"}
              label={"Vendors"}
              icon={IconBuildingStore}
            />
            <Space h="sm" />
            <NavLinkButton
              setOpened={setOpened}
              to={"/Customers"}
              label={"Customers"}
              icon={IconUsers}
            />
            <Space h="sm" />
            <NavLinkButton
              setOpened={setOpened}
              to={"/Settings"}
              label={"Settings"}
              icon={IconSettings}
            />
            <Space h="30px" />
            <NavLinkButton
              setOpened={setOpened}
              to={"/logout"}
              label={"Log Out"}
              icon={IconLogout}
            />
            <Space h="lg" />
           
          </div>
        </ScrollArea>
      </Stack>
    </nav>
  );
}

export default Sidebar;
