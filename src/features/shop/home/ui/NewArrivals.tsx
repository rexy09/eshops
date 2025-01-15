import { Carousel } from '@mantine/carousel';
import {
  Card,
  Group,
  Skeleton,
  Space,
  Text,
  useMantineTheme
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from "react";
import useShopServices from "../services";
import { IProduct } from "../types";
import ProductCard from './components/ProductCard';


export function NewArrivals() {
  const [isLoading, setLoading] = useState(false);
  const [products, setProductsData] = useState<IProduct[]>([]);

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { getProducts } = useShopServices();
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
          color: 'red',
          title: 'Error',
          message: 'Error something went wrong!',
        })
      });


  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);
  const slides = products.map((p, index) => (
    <Carousel.Slide key={index}>
      <ProductCard p={p} key={index} />
    </Carousel.Slide>

  ));
  const slidesSkeleton = Array.from({ length: 4 }).map((_, index) => (
    <Carousel.Slide key={index}>
      <Card radius="md" p="md">
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
    </Carousel.Slide>
  ));


  return (
    <div>
      <Group justify="space-between">
        <Text size="32px" fw={700} style={{ fontFamily: "Urbanist" }}>
          New Arrivals
        </Text>
       
      </Group>
      <Space h="md" />
      <Carousel
        slideSize={{ base: '50%', sm: '50%', md: '33.333333%', lg: '25%' }}
        slideGap={{ base: 'xl', sm: 2, md: 4 }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {isLoading ? slidesSkeleton : slides}
      </Carousel>

      <Space h="md" />

    </div>
  );
}
