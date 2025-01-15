import {
  ActionIcon,
  Group,
  Indicator,
  ScrollArea,
  Space,
  Stack
} from "@mantine/core";
import {
  IconSearch,
  IconShoppingBag,
  IconUser
} from "@tabler/icons-react";

import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router";
import { useCartStore } from "../../../../features/shop/home/stores";
import Color from "../../../theme";
import classes from "./sidenav.module.css";

type SidebarProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ setOpened }: SidebarProps) {
  const matches = useMediaQuery("(min-width: 62em)");
  const cartStore = useCartStore();
  const navigate = useNavigate();
  return (
    <nav className={classes.navbar} style={{ backgroundColor: Color.White }}>
      

      <Stack
        h={matches ? "95vh" : "90vh"}
        align="stretch"
        justify="space-between"
        gap="xs"
      >
        <ScrollArea h={"100vh"}>
          <div>
            <Group >
              <ActionIcon color="#EDEDED" variant="outline" size="lg" radius="xl" onClick={() => { navigate("/products"); setOpened(false); }}>
                <IconSearch size={20} stroke={1.5} color="#0070CD" />
              </ActionIcon>
              <Indicator color="#D91F11" size={15} offset={8} label={cartStore.totalItems}>
                <ActionIcon color="#EDEDED" variant="outline" size="lg" radius="xl" onClick={() => { navigate("/cart"); setOpened(false); }}>
                  <IconShoppingBag size={20} stroke={1.5} color="#0070CD" />
                </ActionIcon>
              </Indicator>
              <ActionIcon color="#EDEDED" variant="outline" size="lg" radius="xl">
                <IconUser size={20} stroke={1.5} color="#0070CD" />
              </ActionIcon>
            </Group>
            
           
            <Space h="lg" />
           
          </div>
        </ScrollArea>
      </Stack>
    </nav>
  );
}

export default Sidebar;
