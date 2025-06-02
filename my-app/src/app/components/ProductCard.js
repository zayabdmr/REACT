export const ProductCard = ({ imgSrc, productName, price, iscolor }) => {
  return (
    <div className="flex items-center flex-col w-[313px] h-[500px] bg-white rounded-xl">
      <img
        className="pt-[71px] pr-[41.5px] pb-[0px] pl-[41.5px]"
        src={imgSrc}
      ></img>
      {iscolor ? (
        <div className="pt-[25px] pr-[50px] pb-[21px] pl-[40px] flex gap-[7px]">
          <img src="blue.jpg" className="w-[12px] h-[12px]"></img>
          <img src="pink.jpg" className="w-[12px] h-[12px]"></img>
          <img src="orange.jpg" className="w-[12px] h-[12px]"></img>
        </div>
      ) : (
        <div className="pt-[25px] pr-[50px] pb-[21px] pl-[40px]"></div>
      )}

      <div className="w-full h-[110px] flex-col justify-between px-[30px] flex">
        <div>
          <h1 className="text-[#B64400]">Free Engraving</h1>
          <h1 className="text-[#1D1D1F]">{productName}</h1>
        </div>
        <h1 className="text-[#1D1D1F] text-[14px] ">{price}.00</h1>
      </div>
    </div>
  );
};
