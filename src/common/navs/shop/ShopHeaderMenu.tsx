import {
  ActionIcon,
  Burger,
  Button,
  Group,
  Image,
  Indicator,
  Text,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconChevronDown,
  IconMenu2,
  IconSearch,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
import mainLogo from "../../../assets/eshop_logo.png";
import Color from "../../theme";
import { useCartStore } from "../../../features/shop/home/stores";
import { Link, useNavigate } from "react-router";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ShopHeaderMenu({ opened, setOpened }: Props) {
  const matchesSM = useMediaQuery("(max-width: 	1024px)");
  const cartStore = useCartStore();
  const navigate = useNavigate();

  return (
    <Group h="100%" justify="space-between" bg={"white"} p={"md"}>
      <Group visibleFrom="md">
        <Link to={"/"}>
          <Image radius="md" w={"130px"} src={mainLogo} alt="logo image" />
        </Link>
      </Group>

      <Group visibleFrom="md">
        <Button
          color="#F5F5F5"
          variant="filled"
          radius={"xl"}
          size="md"
          leftSection={<IconMenu2 size={18} stroke={1.5} color="#0070CD" />}
        >
          <Text size="16px" fw={400} c="#0070CD">
            Menu
          </Text>
        </Button>
        <TextInput
          radius="xl"
          size="md"
          variant="filled"
          color={"#F5F5F5"}
          placeholder="Search"
          w={!matchesSM ? 750 : 400}
          leftSectionWidth={150}
          leftSection={
            <Button
              color="#161A34"
              variant="transparent"
              radius={"md"}
              rightSection={<IconChevronDown size={18} stroke={1.5} />}
            >
              <Text size="14px" fw={400} pr={20}>
                All Items
              </Text>
            </Button>
          }
        />
      </Group>
      <Group visibleFrom="md">
        <Link to={"/products"} >
        <ActionIcon color="#EDEDED" variant="outline" size="lg" radius="xl">
          <IconSearch size={20} stroke={1.5} color="#0070CD" />
        </ActionIcon>
        </Link>
        <Link to={"/cart"} >
          <Indicator color="#D91F11" size={15} offset={8} disabled={cartStore.totalItems > 0 ? false : true} label={cartStore.totalItems }>
          <ActionIcon color="#EDEDED" variant="outline" size="lg" radius="xl" onClick={() => { navigate("/cart"); }}>
            <IconShoppingBag size={20} stroke={1.5} color="#0070CD" />
          </ActionIcon>
        </Indicator>
        </Link>
        <ActionIcon color="#EDEDED" variant="outline" size="lg" radius="xl">
          <IconUser size={20} stroke={1.5} color="#0070CD" />
        </ActionIcon>
      </Group>
      <Group hiddenFrom="md">
        <Group>
          <Burger
            color={Color.PrimaryBlue}
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="md"
          />
        </Group>
      </Group>
      <Group hiddenFrom="md">
        <Link to={"/"} onClick={() => {
          if (opened) {
            setOpened(false);
          }

        }} >
          <Image radius="md" w={"130px"} src={mainLogo} alt="logo image" />
        </Link>
      </Group>
      <Group hiddenFrom="md">
        <Link to={"/products"} onClick={() => {
          if (opened) {
            setOpened(false);
          }

        }} >
          <IconSearch size={24} stroke={1.5} color="#262D33" />
        </Link>
      </Group>
    </Group>
  );
}
