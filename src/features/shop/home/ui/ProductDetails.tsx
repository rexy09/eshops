import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Image,
  NumberFormatter,
  SimpleGrid,
  Skeleton,
  Space,
  Text,
  useMantineTheme
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconMinus, IconPlus, IconShoppingCartFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Color from "../../../../common/theme";
import useShopServices from "../services";
import { useCartStore } from "../stores";
import { IProduct } from "../types";
import ProductCard from "./components/ProductCard";

export function ProductDetails() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [isLoading, setLoading] = useState(false);
  const [products, setProductsData] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();

  const { getProducts, getProductDetails } = useShopServices();
  const cartStore = useCartStore();
  const existingProduct = cartStore.items.find((p) => p.id === id);

  const fetchData = (_offset?: string) => {
    setLoading(true);
    getProductDetails(id!)
      .then(function (response) {
        const responseData = response.data as IProduct;
        setProduct(responseData);
        setLoading(false);
      })
      .catch(function (_error) {
        setLoading(false);

        notifications.show({
          color: "red",
          title: "Error",
          message: "Error something went wrong!",
        });
      });
    getProducts()
      .then(function (response) {
        setLoading(false);
        const responseData = response.data as any;
        setProductsData(responseData.slice(0, 8));
      })
      .catch(function (_error) {
        setLoading(false);
        notifications.show({
          color: "red",
          title: "Error",
          message: "Error something went wrong!",
        });
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [id]);
  const slides = products.map((p, index) => <ProductCard p={p} key={index} />);
  const slidesSkeleton = Array.from({ length: 8 }).map((_, index) => (
    <Card radius="md" p="md" key={index}>
      <Card.Section>
        <Skeleton height={305.05} width={282.3} radius="md" />
      </Card.Section>
      <Space h="lg" />

      <Card.Section p="xs">
        <Skeleton height={24} width="80%" radius="sm" />
        <Space h="xs" />

        <Group justify="space-between">
          <Skeleton height={20} width="30%" radius="sm" />
          <Skeleton height={36} width={100} radius="md" />
        </Group>
      </Card.Section>
    </Card>
  ));

  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Image src={product?.image} alt={product?.title} w={mobile ? "100%" : "590px"} h={mobile ? "192px" : "502px"} fit="cover" />

        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Text size={mobile ? "22px" : "32px"} fw={700} c={"#262D33"} style={{ fontFamily: "Urbanist" }}>
            {product?.title}
          </Text>
          <Space h="md" />
          <Group>
            <Text size={"20px"} fw={600} c={"#262D33"} style={{ fontFamily: "Urbanist" }}>
              Status :
            </Text>
            <Text size={"20px"} fw={600} c={"#FCB61A"} style={{ fontFamily: "Urbanist" }}>
              In stock
            </Text>
          </Group>
          <Divider my={"md"} />
          <Text size={mobile ? "22px" : "32px"} fw={700} c={"#004B8A"} >
            Tsh <NumberFormatter value={product?.price} decimalScale={2} />
          </Text>
          <Space h="md" />
          <Text size={mobile ? "16px" : "20px"} fw={400} c={"#4F5153"} style={{ lineHeight:"30px"}} >
            {product?.description}
          </Text>
          <Space h="lg" />
          <Group>
            <Text size={"20px"} fw={700} c={"##262D33"} style={{ fontFamily: "Urbanist" }}>
              Quantity
            </Text>
          <Box bg={"#F5F5F5"} p={"xs"} style={{ borderRadius: "8px" }} maw={150}>
            <Group  justify="space-between" >
              <ActionIcon
                variant="default"
                color="#EDEDED"
                size={"md"}
                onClick={() => {
                  cartStore.removeFromCart(id!);
                }}
              >
                <IconMinus color="#1B1B1B" />
              </ActionIcon>
              <Text size="24px" fw={600} c={"#1B1B1B"}>
                {existingProduct ? existingProduct.quantity : 0}
              </Text>
              <ActionIcon
                variant="default"
                color="##1B1B1B"
                size={"md"}
                onClick={() => {
                  cartStore.addToCart({
                    id: product?.id.toString()!,
                    name: product?.title!,
                    price: product?.price!,
                    image: product?.image!,
                    quantity: 1
                  });
                }}
              >
                <IconPlus color="#1B1B1B" />
              </ActionIcon>
            </Group>
          </Box>
          </Group>
          <Space h="lg" />

          <Group justify='space-between'>

            <Button variant="filled" radius={"md"} fullWidth size={mobile ? 'md' : "lg"} color={Color.PrimaryBlue} leftSection={<IconShoppingCartFilled/>} onClick={() => {
              cartStore.addToCart({
                id: product?.id.toString()!,
                name: product?.title!,
                price: product?.price!,
                image: product?.image!,
                quantity: 1
              });
              
            }}>Add To Cart</Button>
          </Group>
        </Grid.Col>
      </Grid>
            <Space h="50px" />

      <Group justify="space-between">
        <Text size="32px" fw={700} style={{ fontFamily: "Urbanist" }}>
          Related Products
        </Text>

      </Group>
      <Space h="md" />
      <SimpleGrid
        cols={{ base: 2, sm: 3, lg: 4 }}
        spacing="sm"
        verticalSpacing="sm"
      >
        {isLoading ? slidesSkeleton : slides}
      </SimpleGrid>


    </>
  );
}
