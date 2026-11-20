import React from "react";
import FoodCard, { FoodItem } from "../components/FoodCard";

// ชุดข้อมูลใหม่
const menuItems: FoodItem[] = [
  {
    id: 1,
    name: "ผัดไทยกุ้งสด",
    category: "อาหารจานเดียว",
    price: 85,
    description:
      "เส้นจันท์เหนียวนุ่มผัดกับซอสมะขามสูตรเข้มข้น เสิร์ฟพร้อมกุ้งแม่น้ำตัวโต ถั่วงอกสด และมะนาวซีก",
    imageUrl:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "ต้มยำกุ้งน้ำข้น",
    category: "ต้ม / แกง",
    price: 150,
    description:
      "น้ำซุปต้มยำรสจัดจ้าน หอมกลิ่นสมุนไพรข่า ตะไคร้ ใบมะกรูด ใส่มันกุ้งและเห็ดฟาง",
    imageUrl:
      "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "ข้าวเหนียวมะม่วง",
    category: "ของหวาน",
    price: 90,
    description:
      "มะม่วงน้ำดอกไม้สุกหวานฉ่ำ ทานคู่กับข้าวเหนียวมูนกะทิสด ราดด้วยน้ำกะทิเค็มมันและถั่วทองคั่ว",
    imageUrl:
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
        เมนูอาหารไทยแนะนำ
      </h1>
      {menuItems.map((item) => (
        <FoodCard key={item.id} food={item} />
      ))}
    </main>
  );
}