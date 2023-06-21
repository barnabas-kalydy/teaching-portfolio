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
import { offers } from "../data";
import { useNavigate } from "react-router-dom";

const StyledContainerDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  gap: "8%",
  alignItems: "center",
});

export default function OffersSection() {
  const navigate = useNavigate();

  return (
    <div id="packages">
      <Typography sx={{ fontSize: "1.5rem" }}>
        Ha szeretnél együtt dolgozni velem, a következők szerint van lehetőséged
      </Typography>
      <StyledContainerDiv>
        {offers.map((offer, index) => (
          <Card
            key={offer.name}
            style={{ width: index === 1 ? "40%" : "30%" }}
            onClick={() => navigate(`/offer/${offer.name}`)}
          >
            <CardActionArea>
              <CardMedia component="img" image={offer.imgPath} alt="😥" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {offer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {offer.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </StyledContainerDiv>
    </div>
  );
}
