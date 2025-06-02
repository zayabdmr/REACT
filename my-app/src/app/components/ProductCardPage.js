import { ProductCard } from "./ProductCard";

export const ProductCardPage = () => {
  return (
    <div className="flex gap-[20px] flex-wrap">
      <ProductCard
        imgSrc="airpods.jpg"
        productName="AirPods Max - Purple"
        price="549"
        iscolor={true}
      />
      <ProductCard
        imgSrc="airpodPro.jpg"
        productName="Airpods Pro 2"
        price="249"
      />
      <ProductCard
        imgSrc="airpods4.jpg"
        productName="AirPods 4 with Active Noise Cancellation"
        price="179"
      />
      <ProductCard
        imgSrc="pen.jpg"
        productName="Apple Pencil Pro"
        price="129"
      />
    </div>
  );
};
