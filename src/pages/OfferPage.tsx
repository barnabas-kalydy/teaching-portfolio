import { useParams } from "react-router-dom";

// TODO this page will display a single offer in detail
export default function OfferPage() {
  const params = useParams();
  const offerName = params.name!;
  console.log(offerName);

  return <div>OfferPage</div>;
}
