interface ReviewPageProps {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ReviewPage: React.FC<ReviewPageProps> = ({
  params,
}) => {
  return (
    <div>
      <h1>Product id {params.productId}</h1>
      <h1>Review id {params.reviewId}</h1>
    </div>
  );
};

export default ReviewPage;
