import { Avatar, Flex, Group, Menu, Space, Text } from "@mantine/core";
import { IconChevronDown, IconHelp, IconUserCircle } from "@tabler/icons-react";
import profile from "../../../../../assets/profile.png";

import { useState } from "react";
import { useNavigate } from "react-router";
import SignOutModal from "./SignOutModal";
import Color from "../../../../theme";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { IUserData } from "../../../../../features/auth/types";
type Props = {
  showTitle?: boolean;
};
function AccountMenu({ }: Props) {
  const navigate = useNavigate();
  const authUser = useAuthUser<IUserData>();

  const [_userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Flex
      // hiddenFrom="md"
      gap="xs"
      justify="space-between"
      align="center"
      direction="row"
      wrap="nowrap"
    >

    
      <Menu
        width={260}
        position="top-start"
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
        withinPortal
        transitionProps={{ transition: "rotate-right", duration: 150 }}
      >
        <Menu.Target>
          <Flex
            gap="xs"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="nowrap"
          >
            <Group>
              <Avatar
                src={profile}
                radius="xl"
              />

              <div style={{ flex: 1 }}>
                <Text size="16px" fw={500} c={Color.Dark}>
                  {authUser?.full_name}Jumanne Paul
                </Text>
                <Space h="sm" />

                <Text size="12px" c={Color.TextTertiary2}>
                  {authUser?.role} Manager
                </Text>
              </div>
            </Group>
            <IconChevronDown size={20} stroke={2} />
          </Flex>
        </Menu.Target>
        <Menu.Dropdown p={"sm"}>
          <Menu.Item
            leftSection={<IconUserCircle size="0.9rem" stroke={1.5} />}
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Menu.Item>

          <Menu.Divider />
          <Menu.Item
            leftSection={<IconHelp size="0.9rem" stroke={1.5} />}
            onClick={() => {
              navigate("/account");
            }}
          >
            Help Center
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <SignOutModal />
    </Flex>
  );
}

export default AccountMenu;
