import { useParams } from "react-router-dom";
import { getOfferByOfferName } from "../utils";

// TODO this page will display a single offer in detail
export default function OfferPage() {
  const params = useParams();
  const offerName = params.name!;
  const offer = getOfferByOfferName(offerName);
  console.log(offer);

  return <div>OfferPage</div>;
}
