import {
  Button,
  Card,
  Group,
  SimpleGrid,
  Skeleton,
  Space,
  Text,
} from "@mantine/core";

import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import useShopServices from "../services";
import { IProduct } from "../types";
import ProductCard from "./components/ProductCard";
import { useNavigate } from "react-router";

export function FeaturedProducts() {
  const [isLoading, setLoading] = useState(false);
  const [products, setProductsData] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  const { getProducts } = useShopServices();
  const fetchData = (_offset?: string) => {
    setLoading(true);

    getProducts()
      .then(function (response) {
        setLoading(false);
        const responseData = response.data as any;
        setProductsData(responseData.slice(0, 12));
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
    fetchData();
  }, []);
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
    <div>
      <Group justify="space-between">
        <Text size="32px" fw={700} style={{ fontFamily: "Urbanist" }}>
          Featured Products
        </Text>
        <Button color="black" variant="default" size="md" onClick={()=>{navigate("/products")}}>
          <Text size="14px" fw={500}>
            SELL ALL
          </Text>
        </Button>
      </Group>
      <Space h="md" />
      <SimpleGrid
        cols={{ base: 2, sm: 3, lg: 4 }}
        spacing="sm"
        verticalSpacing="sm"
      >
        {isLoading ? slidesSkeleton : slides}
      </SimpleGrid>

      <Space h="md" />
    </div>
  );
}
