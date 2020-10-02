import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  return <div>This is a page of the product {router.query.id}</div>;
};

export default ProductItem;
