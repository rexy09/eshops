import order_1 from "../../../assets/order_1.png";
import order_2 from "../../../assets/order_2.png";
export const statData = [
  {
    title: "Total Sales",
    duration: "from last month",
    value: "Tsh 390,751.95",
    diff: 15,
  },
  {
    title: "New Orders",
    duration: "from Yesterday",
    value: "76,243",
    diff: -10,
  },
  {
    title: "Total Products",
    duration: "from last month",
    value: "751.95",
    diff: 16,
  },
  { title: "Total Users", duration: "from last month", value: "571", diff: 5 },
];

export const lineChartData = [
  { date: "Jan", Sales: 50000 },
  { date: "Feb", Sales: 30000 },
  { date: "Mar", Sales: 80000 },
  { date: "Apr", Sales: 100000 },
  { date: "May", Sales: 95000 },
  { date: "Jun", Sales: 90000 },
  { date: "Jul", Sales: 150000 },
  { date: "Aug", Sales: 140000 },
  { date: "Sep", Sales: 200000 },
  { date: "Oct", Sales: 250000 },
  { date: "Nov", Sales: 200000 },
  { date: "Dec", Sales: 150000 },
];

export const donutChartData = [
  { name: "Food & Beverages", value: 20, color: "#317FF4" },
  { name: "Cosmetics", value: 20, color: "#FCB61A" },
  { name: "Nuts & Spices", value: 60, color: "#24437E" },
  { name: "Home Decor", value: 0, color: "#9EF1A2" },
];

export const newOrdersData = [
  {
    productName: "Spice Jiko",
    customerName: "John Kivuli",
    price: "Tsh 12,000",
    quantity: "9 pcs",
    status: "Cancelled",
    statusColor: "#A10707",
    image: order_1,
  },
  {
    productName: "Coconut Oil",
    customerName: "Aisha Juma",
    price: "Tsh 34,000",
    quantity: "5 pcs",
    status: "Paid",
    statusColor: "#07A10D",
    image: order_2,
  },
];
