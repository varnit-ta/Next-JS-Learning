//Metadata generation for dynamix routing
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  }
}

export const generateMetadata = ({params}: Props) : Metadata =>{
  return{
    title: `Product Id: ${params.productId}`
  }
}

const ProductId = ({ params }: Props) => {
  return (
    <div>
      <h1>Product Id: {params.productId}</h1>
    </div>
  );
};

export default ProductId;
