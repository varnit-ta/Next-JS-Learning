interface ProductIdInterface {
  params: { productId: string };
}

const ProductId: React.FC<ProductIdInterface> = ({ params }) => {
  return (
    <div>
      <h1>Product Id: {params.productId}</h1>
    </div>
  );
};

export default ProductId;
