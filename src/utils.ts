import { offers } from "./data";

export const getOfferByOfferName = (offerName: string) => {
  return offers.filter((offer) => offer.name === offerName)[0];
};
