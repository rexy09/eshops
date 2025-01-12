import {
  Box,
  Card,
  Center,
  Group,
  Loader,
  Pagination,
  ScrollArea,
  Table,
  Text
} from "@mantine/core";
import Color from "../../theme";
interface TableProps {
  columns: React.ReactNode;
  summary?: JSX.Element;
  rows: JSX.Element[];
  title?: string;
  subtitle?: string;
  colSpan: number;
  totalData: number;
  isLoading: boolean;
  showPagination?: boolean;
  fetchData?: (offset: string) => void;
  downloadData?: () => void;
  downloading?: boolean;
  exporData?: boolean;
}

export function CustomTable({
  rows,
  columns,
  colSpan,
  isLoading,
  totalData,
  fetchData,
  showPagination,
  title,
  subtitle,
  summary,
}: TableProps) {
  const totalPages = () => Math.ceil(totalData / 10);
  return (
    <Card  radius="md" p={0}>
      {((title != null) || (subtitle != null) || (summary != null)) && (
        <Box p={"lg"}>
          <Group justify="space-between">
            <div>

            <Text fz="24px" fw={700} c={"#131313"}>
              {title}
            </Text>
            <Text fz="14px" fw={500} c={"#13131399"}>
              {subtitle}
            </Text>
            </div>
            <Group>{summary}</Group>
          </Group>
        </Box>
      )}
      <ScrollArea
        p={"10px"}
        style={{
          background: "#ffffff",
          borderRadius: "7px",
        }}
      >
        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="sm" fz="xs" highlightOnHover>
            <Table.Thead style={{
              color: "#13131399", fontWeight: 500,
              fontSize: "16px"
            }}>
              {columns}
            </Table.Thead>
            <Table.Tbody>
              {isLoading ? (
                <Table.Tr>
                  <Table.Td colSpan={colSpan}>
                    <Center maw={400} h={100} mx="auto">
                      <Loader variant="dots" />
                    </Center>
                  </Table.Td>
                </Table.Tr>
              ) : rows.length > 0 ? (
                rows
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={colSpan}>
                    <Text fw={400} ta="center">
                      Nothing found
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
          {/* </div> */}
        </Table.ScrollContainer>
        {showPagination ? (
          <Group justify="flex-start" p="md">
            <Pagination
              size="xs"
              style={() => ({
                control: {
                  "&[data-active]": {
                    backgroundColor: Color.PrimaryBlue,
                    border: 0,
                  },
                },
              })}
              total={totalPages()}
              onChange={(value: number) => {
                const offset = (value - 1) * 10;
                fetchData ? fetchData(`${offset}`) : null;
              }}
              radius="xl"
            />{" "}
            <Text fw={600} fz="16px">
              Total Count: {totalData}
            </Text>
          </Group>
        ) : null}
      </ScrollArea>
    </Card>
  );
}
