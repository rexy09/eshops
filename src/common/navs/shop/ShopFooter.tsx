import {
  ActionIcon,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Space,
  Stack,
  Text
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import mainLogo from "../../../assets/eshop_logo_2.png";
import Color from "../../theme";
import FooterHeading from "./components/footer_heading";
import FooterText from "./components/footer_text";
import { Features } from "../../../features/shop/home/ui/Features";

export default function ShopFooter() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <Space h="50px" />
      <Divider />
      <Space h="50px" />
      <Container size="xl">
        <Features />
      </Container>
          <Space h="50px" />
      <div style={{ width: "100%", background: Color.DarkBlue }}>
        <Container size={"xl"} py="30px">
          <Space h="xl" />

          <Grid > 
            <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack align="start" maw={"400px"}>
              <Image maw={"159px"} src={mainLogo} alt="logo image" />
              <Text size="16px" fw={400} style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur. Augue quis urna
                tristique posuere. Ut a a cras vel v
              </Text>
              <Group mt="lg">
                <ActionIcon
                  color="#EDEDED"
                  variant="outline"
                  size="xl"
                  radius="xl"
                >
                  <IconBrandLinkedinFilled
                    size={20}
                    stroke={1.5}
                    color={Color.PrimaryYellow}
                  />
                </ActionIcon>
                <ActionIcon
                  color="#EDEDED"
                  variant="outline"
                  size="xl"
                  radius="xl"
                >
                  <IconBrandInstagramFilled
                    size={20}
                    stroke={1.5}
                    color={Color.PrimaryYellow}
                  />
                </ActionIcon>
                <ActionIcon
                  color="#EDEDED"
                  variant="outline"
                  size="xl"
                  radius="xl"
                >
                  <IconBrandFacebookFilled
                    size={20}
                    stroke={1.5}
                    color={Color.PrimaryYellow}
                  />
                </ActionIcon>
              </Group>
            </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
            <Group  justify="space-between">
              <Stack>
                <FooterHeading text={"Shop"} />
                <FooterText text={"Food"} />
                <FooterText text={"Beverages"} />
                <FooterText text={"Cosmetics"} />
                <FooterText text={"Home Decor"} />
              </Stack>
              <Stack>
                <FooterHeading text={"Help & Information"} />
                <FooterText text={"How to order"} url={"/how-to-order"} />
                <FooterText
                  text={"Terms & Condition"}
                  url={"/terms-and-conditions"}
                />
                <FooterText text={"Help center"} url="/help-center" />
                <FooterText text={"Term of  Use"} url="/terrm-of-use" />
              </Stack>
              <Stack>
                <FooterHeading text={"My Account"} />
                <FooterText text={"My Orders"} url="/orders" />
                <FooterText text={"Favourites"} url="/favourites" />
                <FooterText text={"Lorem ipsum"} />
                <FooterText text={"Lorem ipsum"} />
              </Stack>
            </Group>
              </Grid.Col>
          </Grid>
          <Space h="xl" />
          <Divider my="sm" />
          <Space h="lg" />
          <Group justify="center">
            <Text
              c="white"
              style={{
                lineHeight: "20px",
                fontSize: "16px",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              © Eshops {currentYear} Copyright
            </Text>
          </Group>
        </Container>
      </div>
    </>
  );
}
