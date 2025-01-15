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
  Space,
  Text,
  TextInput
} from "@mantine/core";

import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import selcom from "../../../../assets/selcom.png";
import Color from "../../../../common/theme";
import { useCartStore } from "../stores";

export function MyCart() {
  const cartStore = useCartStore();

  const items = cartStore.items.map((p, index) => (
    <div key={index}>
      <Group justify="space-between">
        <Group>
          <Image
            src={p.image}
            alt={p.name}
            w={"191px"}
            h={"187px"}
            fit="cover"
          />
          <div>
            <Box w={200}>
              <Text size="24px" fw={600} c={"#1B1B1B"} lineClamp={2}>
                {p.name}
              </Text>
            </Box>
            <Space h="md" />

            <Text size="16px" fw={500} c={"#7E8492"}>
              Unit : -
            </Text>
            <Space h="md" />

            <Button
              leftSection={<IconTrash size={16} />}
              variant="subtle"
              color="red"
              onClick={() => {
                cartStore.removeItemFromCart(p.id);
              }}
            >
              Remove
            </Button>
          </div>
        </Group>
        <div>
          <Text size="14px" fw={600} c={"#1B1B1B"}>
            Quantity
          </Text>
          <Space h="xs" />
          <Box bg={"#F5F5F5"} p={"xs"} style={{ borderRadius: "8px" }} maw={150}>
            <Group justify="space-between" >
              <ActionIcon
                variant="default"
                color="#EDEDED"
                size={"md"}
                onClick={() => {
                  cartStore.removeFromCart(p.id);
                }}
              >
                <IconMinus color="#1B1B1B" />
              </ActionIcon>
              <Text size="24px" fw={600} c={"#1B1B1B"}>
                {p.quantity}
              </Text>
              <ActionIcon
                variant="default"
                color="##1B1B1B"
                size={"md"}
                onClick={() => {
                  cartStore.addToCart(p);
                }}
              >
                <IconPlus color="#1B1B1B" />
              </ActionIcon>
            </Group>
          </Box>
          <Space h="xs" />
          <Text size="24px" fw={600} c={"#1B1B1B"}>
            Tsh {p.price}
          </Text>
          <Space h="md" />
        </div>
      </Group>
      <Divider my="md" />
    </div>
  ));

  return (
    <div>
      <Grid>
        <Grid.Col span={8}>{items}</Grid.Col>
        <Grid.Col span={4}>
          <Card withBorder radius={"md"}>
            <Space h="lg" />
            <Text size="24px" fw={600} c={"#1B1B1B"}>
              Order Summery
            </Text>
            <Space h="xl" />

            <Group justify="space-between">
              <TextInput placeholder="Discount Voucher" radius={"md"} w={260} />
              <Button w={100} variant="light" color="gray">
                Apply
              </Button>
            </Group>
            <Space h="md" />

            <Group justify="space-between">
              <Text size="16px" fw={500} c={"#7E8492"}>
                Sub Total
              </Text>
              <Text size="16px" fw={600} c={"#1B1B1B"}>
                Tsh <NumberFormatter value={cartStore.totalPrice} decimalScale={2} />
              </Text>
            </Group>
            <Space h="md" />

            <Group justify="space-between">
              <Text size="16px" fw={500} c={"#7E8492"}>
                Discount (10%)
              </Text>
              <Text size="16px" fw={600} c={"#46B277"}>
                Tsh 0
              </Text>
            </Group>
            <Divider my="md" variant="dashed" />

            <Group justify="space-between">
              <Text size="24px" fw={600} c={"#1B1B1B"}>
                Grand Total
              </Text>
              <Text size="18px" fw={600} c={"#1B1B1B"}>
                Tsh <NumberFormatter value={cartStore.totalPrice} decimalScale={2} />
              </Text>
            </Group>
            <Space h="md" />
            <Button fullWidth size="lg" radius={"md"} color={Color.PrimaryBlue}>Checkout Now</Button>
            <Space h="md" />
          </Card>
          <Space h="lg" />

          <Text size="20px" fw={500} c={"#1B1B1B"}>
            Supported Payment Method
          </Text>
          <Space h="md" />
          <Image
            src={selcom}
            alt={"selcom"}
            w={"90px"}
            fit="cover"
          />
        </Grid.Col>
      </Grid>

      <Space h="md" />
    </div>
  );
}
