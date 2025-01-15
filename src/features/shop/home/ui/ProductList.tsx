import {
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Menu,
  SimpleGrid,
  Skeleton,
  Space,
  Text,
  TextInput,
} from "@mantine/core";

import { notifications } from "@mantine/notifications";
import { IconChevronDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Color from "../../../../common/theme";
import useShopServices from "../services";
import { IProduct } from "../types";
import ProductCard from "./components/ProductCard";

export function ProductList() {
  const [isLoading, setLoading] = useState(false);
  const [products, setProductsData] = useState<IProduct[]>([]);

  const { getProducts, categories } = useShopServices();
  const fetchData = (_offset?: string) => {
    setLoading(true);

    getProducts()
      .then(function (response) {
        setLoading(false);
        const responseData = response.data as any;
        setProductsData(responseData);
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
    <Grid>
      <Grid.Col span={3}>
        <Card withBorder radius={"md"}>
          <Space h="lg" />
          <Text
            size="24px"
            fw={700}
            c={"#262D33"}
            style={{ fontFamily: "Urbanist" }}
          >
            Categories
          </Text>
          <Divider my="md" />

          <Text size="19px" fw={600} c={Color.PrimaryBlue}>
            All
          </Text>
          <Space h="md" />

          {categories.map((item, index) => (
            <div key={index}>
              <Text size="19px" fw={500} c={"#262D33"}>
                {item.name}
              </Text>
              <Space h="md" />
            </div>
          ))}
        </Card>
        <Space h="lg" />
        <Card withBorder radius={"md"}>
          <Space h="lg" />
          <Text
            size="24px"
            fw={700}
            c={"#262D33"}
            style={{ fontFamily: "Urbanist" }}
          >
            Price
          </Text>
          <Divider my="md" />
          <Text size="15px" fw={500} c={"#262D33"}>
            Lowest
          </Text>
          <Space h="sm" />
          <TextInput placeholder="Lowest price" radius={"xl"} />
          <Space h="md" />
          <Text size="15px" fw={500} c={"#262D33"}>
            Highest
          </Text>
          <Space h="sm" />
          <TextInput placeholder="Highest price" radius={"xl"} />
          <Space h="md" />
          <Button fullWidth size="lg" radius={"md"} color={Color.PrimaryBlue}>
            Apply
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col span={9}>
        <Group justify="space-between">
          <Text size="32px" fw={700} style={{ fontFamily: "Urbanist" }}>
            Products
          </Text>
          <Menu width={220} withinPortal>
            <Menu.Target>
              <Button
                color="black"
                variant="default"
                rightSection={<IconChevronDown size={18} stroke={1.5} />}
                pr={12}
              >
                <Text size="14px" fw={500}>
                  Sort By
                </Text>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Jan - Jul, 2024</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <Space h="md" />
        <SimpleGrid
          cols={{ base: 2, sm: 3, lg: 3 }}
          spacing="sm"
          verticalSpacing="sm"
        >
          {isLoading ? slidesSkeleton : slides}
        </SimpleGrid>

        <Space h="md" />
      </Grid.Col>
    </Grid>
  );
}
