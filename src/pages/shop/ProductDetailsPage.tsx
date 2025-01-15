import { Container, Space } from "@mantine/core";
import { ProductDetails } from "../../features/shop/home/ui/ProductDetails";

export default function ProductDetailsPage() {
  return (
    <>
      <Space h="50px" />
      <Container size="xl">
        <ProductDetails />
      </Container>
    </>
  );
}
