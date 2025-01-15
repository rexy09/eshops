import { Carousel } from "@mantine/carousel";
import {
  Card,
  Center,
  Group,
  Image,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import useShopServices from "../services";

export function ShopByCategory() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { categories } = useShopServices();

  const slides = categories.map((p, index) => (
    <Carousel.Slide key={index}>
      <Center>
        <Card radius="md" p="md" bg={"transparent"}>
          <Card.Section>
            <Image
              src={p.image}
              alt={p.name}
              w={"172.28px"}
              h={"186.07px"}
              fit="cover"
            />
          </Card.Section>

          <Card.Section p="xs">
            <Text
              ta={"center"}
              size="18px"
              fw={500}
              c={"#262D33"}
              style={{ fontFamily: "Urbanist" }}
            >
              {p.name}
            </Text>
            <Space h="xs" />
          </Card.Section>
        </Card>
      </Center>
    </Carousel.Slide>
  ));

  return (
    <div>
      <Group justify="space-between">
        <Text size="32px" fw={700} style={{ fontFamily: "Urbanist" }}>
          Shop by Category
        </Text>
      </Group>
      <Space h="md" />
      <Carousel
        slideSize={{ base: "50%", sm: "25%", md: "25%", lg: "16.666666667%" }}
        slideGap={{ base: "xl", sm: 2, md: 4 }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        loop
      >
        {slides}
      </Carousel>

      <Space h="md" />
    </div>
  );
}
