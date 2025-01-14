import {
  Box,
  Center,
  Divider,
  Group,
  Image,
  Space,
  Text,
  useMantineTheme
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import useShopServices from "../services";

export function Features() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { features } = useShopServices();

  return (
    <div>
      <Group justify="space-around" gap={mobile ? 0 : "md"}>
        <Box maw={"276px"}>
          <Center>
            <Image src={features[0].icon} w={50} h={50} />
          </Center>
          <Space h="md" />
          <Text
            size="24px"
            ta={"center"}
            fw={700}
            style={{ fontFamily: "Urbanist" }}
          >
            {features[0].title}
          </Text>
          <Space h="md" />
          <Text
            size="16px"
            c={"#737373"}
            ta={"center"}
            fw={400}
            style={{ fontFamily: "Urbanist" }}
          >
            {features[0].description}
          </Text>
          {mobile && <Center>
            <Space h="70px" />
            <Divider w={"97px"} />
          </Center>}
        </Box>
        {!mobile &&
          <Box h={"97px"} visibleFrom="sm">
            <Divider orientation="vertical" h={"97px"} />
          </Box>}
        <Box maw={"276px"}>
          <Center>
            <Image src={features[1].icon} w={50} h={50} />
          </Center>
          <Space h="md" />
          <Text
            size="24px"
            ta={"center"}
            fw={700}
            style={{ fontFamily: "Urbanist" }}
          >
            {features[1].title}
          </Text>
          <Space h="md" />
          <Text
            size="16px"
            c={"#737373"}
            ta={"center"}
            fw={400}
            style={{ fontFamily: "Urbanist" }}
          >
            {features[1].description}
          </Text>
          {mobile && <Center>
            <Space h="70px" />
            <Divider w={"97px"} />
          </Center>}
        </Box>
        {!mobile &&
          <Box h={"97px"} visibleFrom="sm">
            <Divider orientation="vertical" h={"97px"} />
          </Box>}
        <Box maw={"276px"}>
          <Center>
            <Image src={features[2].icon} w={50} h={50} />
          </Center>
          <Space h="md" />
          <Text
            size="24px"
            ta={"center"}
            fw={700}
            style={{ fontFamily: "Urbanist" }}
          >
            {features[2].title}
          </Text>
          <Space h="md" />
          <Text
            size="16px"
            c={"#737373"}
            ta={"center"}
            fw={400}
            style={{ fontFamily: "Urbanist" }}
          >
            {features[2].description}
          </Text>
        </Box>

      </Group>

      <Space h="md" />
    </div>
  );
}
