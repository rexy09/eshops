import {
  Button,
  Group,
  Menu,
  Paper,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";
import { IconChevronDown, IconDots } from "@tabler/icons-react";
import { inventoryStats } from "./services";
export function InventoryStatistics() {
  const stats = inventoryStats.map((stat) => {
    return (
      <Paper p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="16px" c="#13131399" fw={500}>
            {stat.title}
          </Text>
          <IconDots size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text fw={700} size="24px">
            {stat.value}
          </Text>
        </Group>
        <Space h="sm" />
      </Paper>
    );
  });
  return (
    <div>
      <Group justify="space-between">
        <Text size="20px" fw={700}>
          Inventory
        </Text>
        <Menu width={220} withinPortal>
          <Menu.Target>
            <Button
              color="black"
              variant="white"
              rightSection={<IconChevronDown size={18} stroke={1.5} />}
              pr={12}
            >
              <Text size="14px" fw={500}>
                Jan - Jul, 2024
              </Text>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Jan - Jul, 2024</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
      <Space h="md" />

      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
      <Space h="md" />
    </div>
  );
}
