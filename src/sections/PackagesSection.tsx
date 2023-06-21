import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardContent,
  styled,
} from "@mui/material";
import { Offer } from "../types";

const StyledContainerDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  gap: "8%",
});

const offers: Offer[] = [
  {
    name: "Alap csomag",
    description: "Ez lesz az alap csomag",
    imgPath: "/static/images/prof-pic.jpg",
  },
  {
    name: "Eggyel jobb csomag",
    description: "Ez lesz az alap csomag",
    imgPath: "/static/images/prof-pic.jpg",
  },
  {
    name: "VIP csomag",
    description: "Ez lesz az alap csomag",
    imgPath: "/static/images/prof-pic.jpg",
  },
];

export default function PackagesSection() {
  return (
    <div id="packages">
      <Typography sx={{ fontSize: "1.5rem" }}>
        Ha szeretnél együtt dolgozni velem, a következők szerint van lehetőséged
      </Typography>
      <StyledContainerDiv>
        {offers.map((offer) => (
          <Card key={offer.name}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={offer.imgPath}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {offer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {offer.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        ))}
      </StyledContainerDiv>
    </div>
  );
}
