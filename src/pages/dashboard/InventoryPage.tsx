import { InventoryStatistics } from "../../features/dashboard/inventory/InventoryStatistics";
import ProductTable from "../../features/dashboard/inventory/ProductTable";

export default function InventoryPage() {
  return (
    <div style={{ padding: "20px" }}>
      <InventoryStatistics />
      <ProductTable />
    </div>
  );
}
