import { useParams } from "react-router-dom";

export const Detail = () => {
  const { detail } = useParams();
  console.log(detail);
  return <div>Detail</div>;
};

export default Detail;
