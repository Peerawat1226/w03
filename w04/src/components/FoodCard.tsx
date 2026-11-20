import React from "react";

// กำหนดโครงสร้างข้อมูล (Interface) ใหม่
export interface FoodItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
}

type FoodCardProps = {
  food: FoodItem;
};

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        display: "flex",
        gap: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={food.imageUrl}
        alt={food.name}
        style={{
          width: "200px",
          height: "140px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.8rem",
              backgroundColor: "#f0f4f8",
              color: "#334e68",
              padding: "4px 8px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            {food.category}
          </span>
          <span style={{ fontWeight: "bold", color: "#e65100", fontSize: "1.1rem" }}>
            ฿{food.price}
          </span>
        </div>

        <h2 style={{ margin: "8px 0", fontSize: "1.25rem", color: "#111" }}>
          {food.name}
        </h2>
        <p style={{ margin: 0, color: "#555", fontSize: "0.95rem" }}>
          {food.description}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;