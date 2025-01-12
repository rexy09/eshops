import { Group, Space, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Icon, IconProps } from "@tabler/icons-react";
import { NavLink } from "react-router";
import Color from "../../../../theme";
import react from "react";

type Props = {
  label: string;
  target?: string;
  to: string;
  icon?: react.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & react.RefAttributes<Icon>
  >;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavLinkButton(props: Props) {
  const { hovered, ref } = useHover();
  // const colorScheme = useColorScheme();

  return (
    <NavLink
      onClick={() => props.setOpened(true)}
      target={props.target}
      to={props.to}
      style={({ isActive }) => {
        return {
          textDecoration: "none",
          borderRadius: "7px",
          color: isActive ? Color.PrimaryYellow : Color.White,
        };
      }}
      children={({ isActive }) => {
        return (
          <div
            ref={ref}
            style={{
              padding: "10px",
              borderRadius: "7px",
            }}
          >
            <Group>
              {props.icon ? (
                <props.icon
                  size="1.3rem"
                  stroke={2}
                  color={isActive || hovered ? Color.PrimaryYellow : Color.White}
                />
              ) : (
                <Space w="md" />
              )}

              <Text
                fz="16px"
                fw={400}
                c={isActive || hovered ? Color.PrimaryYellow : Color.White}
              >
                {props.label}
              </Text>
            </Group>
          </div>
        );
      }}
    />
  );
}

export default NavLinkButton;
