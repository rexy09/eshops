import { Burger, Group, Image, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import mainLogo from "../../../../assets/eshop_logo.png";
import Color from "../../../theme";
import AccountMenu from "./ui/AccountMenu";
import NotificationMenu from "./ui/NotificationMenu";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function HeaderMenu({ opened, setOpened }: Props) {
  const matchesSM = useMediaQuery("(max-width: 	1024px)");

  return (
    <Group h="100%" justify="space-between" bg={"white"} p={"md"}>
      <Group hiddenFrom="md">
        <Group>
          <Image radius="md" w={"130px"} src={mainLogo} alt="logo image" />

        </Group>
      </Group>
      <Group visibleFrom="md">
        <TextInput
          radius="md"
          size="md"
          variant="filled"
          placeholder="Search ..."
          w={!matchesSM ? 750 : 400}
          rightSectionWidth={42}
          leftSection={<IconSearch size={18} stroke={1.5} />}

        />
      </Group>
      <Group>
        <Group visibleFrom="sm">
          <IconSearch size={20} stroke={1.5} />
          <NotificationMenu />
          <AccountMenu />
        </Group>
        <Group hiddenFrom="md">
          <IconSearch size={20} stroke={1.5} />
        </Group>
        <Group>
          <Burger
            color={Color.PrimaryBlue}
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="md"
          />
        </Group>
      </Group>
    </Group>
  );
}
