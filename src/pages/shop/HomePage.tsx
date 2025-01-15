import {
  BackgroundImage,
  Button,
  Container,
  Group,
  Space,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import home_bg from "../../assets/home_bg.png";
import Color from "../../common/theme";
import { FeaturedProducts } from "../../features/shop/home/ui/FeaturedProducts";
import { NewArrivals } from "../../features/shop/home/ui/NewArrivals";
import { ShopByCategory } from "../../features/shop/home/ui/ShopByCategory";
export default function HomePage() {
  const theme = useMantineTheme();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <>
      <BackgroundImage src={home_bg} p={0}>
        <div>
          <Stack
            pl={"xl"}
            h={"50vh"}
            align="flex-start"
            justify="center"
            gap="0"
          >
            <div
              style={{
                width: mobile ? "100%" : "527px",
              }}
            >
              <Text
                size="16px"
                fw={500}
                c={"#FCB61A"}
                style={{ lineHeight: "19px" }}
              >
                UP TO 30% OFF TODAY
              </Text>
              <Space h="md" />
              <Text
                size="48px"
                fw={800}
                c={"white"}
                style={{ lineHeight: "58px" }}
              >
                Spice Nyanya
              </Text>
              <Space h="lg" />
              <Text
                size="18px"
                fw={500}
                c={"white"}
                style={{ lineHeight: "24px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt
              </Text>
              <Space h="lg" />
              <Button variant="filled" color="#FCB61A" size="lg" radius="md">
                <Text
                  size="16px"
                  fw={500}
                  c={"white"}
                  style={{ lineHeight: "20px" }}
                >
                  Shop Now
                </Text>
              </Button>
              <Space h="50px" />
            </div>
          </Stack>
          <Group justify="center">
            <div
              style={{
                width: "30px",
                height: "8px",
                borderRadius: "100px",
                backgroundColor: Color.PrimaryBlue,
              }}
            ></div>
            <div
              style={{
                width: "30px",
                height: "8px",
                borderRadius: "100px",
                backgroundColor: "#CED1D8",
              }}
            ></div>
            <div
              style={{
                width: "30px",
                height: "8px",
                borderRadius: "100px",
                backgroundColor: "#CED1D8",
              }}
            ></div>
          </Group>
          <Space h="50px" />
        </div>
      </BackgroundImage>
      <Space h="50px" />
      <Container size="xl">
        <NewArrivals />
      </Container>
      <Space h="50px" />
      <div style={{ backgroundColor: "#FCB61A17", padding: "50px 0" }}>
        <Container size="xl">
          <ShopByCategory />
        </Container>
      </div>
      <Space h="50px" />
      <Container size="xl">
        <FeaturedProducts />
      </Container>
    </>
  );
}
