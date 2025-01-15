import {
    Button,
    Card,
    Group,
    Image,
    Space,
    Text,
    useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router";
import Color from "../../../../../common/theme";
import { useCartStore } from "../../stores";
import { IProduct } from "../../types";

type Props = {
  p: IProduct;
};

function ProductCard({ p }: Props) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const cartStore = useCartStore();

  return (
    <Card radius="md" p="md">
      <Card.Section>
        <Link to={"/product_details/" + p.id}>
          <Image
            src={p.image}
            alt={p.title}
            w={mobile ? "100%" : "282.3px"}
            h={mobile ? "192px" : "305.05px"}
            fit="cover"
          />
        </Link>
      </Card.Section>
      <Space h="lg" />

      <Card.Section p="xs">
        <Link to={"/product_details/" + p.id}>
          <Text
            lineClamp={1}
            size={mobile ? "12px" : "19px"}
            fw={700}
            c={"#262D33"}
            style={{ fontFamily: "Urbanist" }}
          >
            {p.title}
          </Text>
        </Link>
        <Space h="xs" />

        <Group justify="space-between">
          <Text
            size={mobile ? "11px" : "18px"}
            fw={600}
            c={"#5D5D5D"}
            style={{ fontFamily: "Urbanist" }}
          >
            Tsh {p.price}
          </Text>
          <Button
            variant="filled"
            size={mobile ? "compact-xs" : "md"}
            color={Color.PrimaryBlue}
            onClick={() => {
              cartStore.addToCart({
                id: p.id.toString(),
                name: p.title,
                price: p.price,
                image: p.image,
                quantity: 1,
              });
            }}
          >
            Add To Cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default ProductCard;
