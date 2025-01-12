import {
  Menu,
  Text,
  Button,
  ActionIcon,
  Table,
  Image,
  Badge,
  Group,
} from "@mantine/core";
import {
  IconChevronDown,
  IconAdjustmentsHorizontal,
  IconDots,
} from "@tabler/icons-react";
import { CustomTable } from "../../../common/components/Table/CustomTable";
import { productData } from "./services";
import Color from "../../../common/theme";

function ProductTable() {
  const rows = productData.map((row, index) => (
    <Table.Tr key={index} style={{ fontSize: "20px", fontWeight: "500" }}>
      <Table.Td style={{ fontSize: "24px", fontWeight: "500" }}>
        <Group gap="xs">
          <Image alt="product" src={row.image} />
          {row.productName}
        </Group>
      </Table.Td>
      <Table.Td>{row.vendorName}</Table.Td>
      <Table.Td>{row.category}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
      <Table.Td>{row.quantity}</Table.Td>
      <Table.Td>
        <Group>
          <Badge size="7" circle color={row.statusColor}></Badge>
          <Text c={row.statusColor}>{row.status}</Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <IconDots size={22} stroke={1.5} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <CustomTable
        title="New Orders"
              subtitle="List of all Products"
        summary={
          <>
            <Button variant="filled" size="md" radius="md" color={Color.PrimaryBlue}>
              New Product
            </Button>
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
            <Table.Th>Vendor Name</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        }
      />
    </>
  );
}

export default ProductTable;
