import { Card, Space, Group, Button, Image, Text, useMantineTheme } from "@mantine/core";
import Color from "../../../../../common/theme";
import { IProduct } from "../../types";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
    p: IProduct;
};

function ProductCard({ p }: Props) {
      const theme = useMantineTheme();
      const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    return (<Card radius="md" p="md">
        <Card.Section>
            <Image src={p.image} alt={p.title} w={mobile ? "100%" : "282.3px"} h={mobile ? "192px" : "305.05px"} fit="cover" />
        </Card.Section>
        <Space h="lg" />

        <Card.Section p="xs">
            <Text lineClamp={1} size={mobile ? "12px" : "19px"} fw={700} c={"#262D33"} style={{ fontFamily: "Urbanist" }}>
                {p.title}
            </Text>
            <Space h="xs" />

            <Group justify='space-between'>

                <Text size={mobile ? "11px" : "18px"} fw={600} c={"#5D5D5D"} style={{ fontFamily: "Urbanist" }}>
                    Tsh {p.price}
                </Text>
                <Button variant="filled" size={mobile ? 'compact-xs' : "md"} color={Color.PrimaryBlue}>Add To Cart</Button>
            </Group>
        </Card.Section>
    </Card> );
}

export default ProductCard;