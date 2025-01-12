import {
  ActionIcon,
  Indicator,
  Menu,
  ScrollArea,
  Text
} from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

import { useState } from "react";


export default function NotificationMenu() {


  const [_userMenuOpened, setUserMenuOpened] = useState(false);



  return (
    <Menu
      width={400}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <ActionIcon variant="light" color="gray" size="xl" radius={'md'} aria-label="Settings">
          <Indicator color="#2C754E" size={10} offset={8} processing>
            <IconBell color="#3F4A3D" size="1.7rem" />
          </Indicator>
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <ScrollArea h={300}>
          <Menu.Label>Notifications</Menu.Label>

          <Text size="sm" ta="center">
            No notifications
          </Text>

        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
}
