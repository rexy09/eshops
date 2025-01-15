import { Container, Space } from "@mantine/core";
import { ProductList } from "../../features/shop/home/ui/ProductList";

export default function ProductPage() {
  return (
    <>
      <Space h="50px" />
      <Container size="xl">
        <ProductList />
      </Container>
    </>
  );
}
