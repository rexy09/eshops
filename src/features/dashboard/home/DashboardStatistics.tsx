import {
  ActionIcon,
  Badge,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Menu,
  Paper,
  SimpleGrid,
  Space,
  Table,
  Text,
  Image,
} from "@mantine/core";
import {
  IconAdjustmentsHorizontal,
  IconChevronDown,
  IconDots,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";
import { DonutChart, LineChart } from "@mantine/charts";
import {
  donutChartData,
  lineChartData,
  newOrdersData,
  statData,
} from "./services";
import { CustomTable } from "../../../common/components/Table/CustomTable";
export function DashboardStatistics() {
  const rows = newOrdersData.map((row, index) => (
    <Table.Tr key={index} style={{ fontSize: "20px", fontWeight: "500" }}>
      <Table.Td style={{ fontSize: "24px", fontWeight: "500" }}>
        <Group gap="xs">
          <Image
            alt="product"
            src={row.image}
          />
            {row.productName}
        </Group>
      </Table.Td>
      <Table.Td>{row.customerName}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
      <Table.Td>{row.quantity}</Table.Td>
      <Table.Td>
        <Group>
          <Badge size="7" circle color={row.statusColor}></Badge>
          <Text c={row.statusColor} >
            {row.status}
          </Text>
        </Group>

      </Table.Td>
    </Table.Tr>
  ));

  const stats = statData.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconTrendingUp : IconTrendingDown;

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

        <Group gap={2}>
          <DiffIcon
            size={16}
            stroke={1.5}
            color={stat.diff > 0 ? "#07A10D" : "#A10707"}
          />

          <Text c={stat.diff > 0 ? "#07A10D" : "#A10707"} fz="12px" fw={500}>
            <span>{stat.diff > 0 ? stat.diff : stat.diff * -1}%</span>
          </Text>
          <Text fz="12px">{stat.duration}</Text>
        </Group>
      </Paper>
    );
  });
  return (
    <div>
      <Group justify="space-between">
        <Text size="20px" fw={700}>
          Overview
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
      
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <Paper p={"md"} radius={"md"}>
            <Text size="16px" fw={500} c={"#131313BF"}>
              Overall Sales
            </Text>
            <Space h="lg" />

            <Group gap={2}>
              <Text size="24px" fw={700}>
                Tsh70.545,95
              </Text>
              <Space w="sm" />

              <Group gap={2}>
                <IconTrendingUp size={16} stroke={1.5} color={"#07A10D"} />

                <Text c={"#07A10D"} fz="12px" fw={500}>
                  <span>15%</span>
                </Text>
              </Group>
            </Group>
            <LineChart
              h={300}
              data={lineChartData}
              dataKey="date"
              withLegend
              series={[{ name: "Sales", color: "#FCB61A" }]}
              curveType="bump"
              withDots={false}
            />
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Paper p={"md"} radius={"md"}>
            <Flex
              gap="xs"
              justify="space-between"
              align="flex-start"
              direction="row"
              wrap="nowrap"
            >
              <div>
                <Text size="18px" fw={600} c={"#292D32"}>
                  Best Selling Products
                </Text>
                <Space h="xs" />
                <Text size="14px" fw={500} c={"#949494"}>
                  By Category
                </Text>
              </div>
              <IconDots size={22} stroke={1.5} />
            </Flex>
            <Center>
              <DonutChart size={250} thickness={30} data={donutChartData} />
            </Center>
            <Space h="md" />
            <SimpleGrid cols={{ base: 2 }}>
              {donutChartData.map((data) => (
                <Group>
                  <Badge size="xs" circle color={data.color}></Badge>
                  <Text size="16px" fw={400}>
                    {data.name}
                  </Text>
                </Group>
              ))}
            </SimpleGrid>
          </Paper>
        </Grid.Col>
      </Grid>
      <Space h="md" />

      <CustomTable
        title="New Orders"
        summary={
          <>
            <Menu width={220} withinPortal>
              <Menu.Target>
                <Button
                  color="#13131329"
                  variant="default"
                  radius={"md"}
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
            <ActionIcon
              variant="default"
              size="lg"
              radius="md"
              aria-label="Settings"
            >
              <IconAdjustmentsHorizontal
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          </>
        }
        rows={rows}
        colSpan={11}
        isLoading={false}
        fetchData={() => {}}
        totalData={rows.length!}
        downloading={false}
        exporData={true}
        showPagination
        columns={
          <Table.Tr>
            <Table.Th>Product Name</Table.Th>
            <Table.Th>Customer Name</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        }
      />
    </div>
  );
}
