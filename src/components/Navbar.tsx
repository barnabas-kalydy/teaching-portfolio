import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const StyledContainerDiv = styled("div")({
  backgroundColor: "black",
  display: "flex",
  justifyContent: "space-between",
  height: "3rem",
  alignItems: "center",
  padding: "0.5rem",
});

const StyledLink = styled(HashLink)({
  margin: "1rem",
});

const StyledButton = styled(Button)({
  color: "#15ab1f",
});

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <StyledContainerDiv>
      <div>
        <StyledLink to="/#aboutme" smooth>
          <StyledButton style={{ fontSize: "1.5rem" }}>KB</StyledButton>
        </StyledLink>
      </div>
      <div>
        <StyledLink to="/#packages" smooth>
          <StyledButton>Csomagok</StyledButton>
        </StyledLink>
        <StyledLink to="/#contact" smooth>
          <StyledButton>Elérhetőség</StyledButton>
        </StyledLink>
        <StyledButton onClick={() => navigate("/info")}>
          Tájékoztató
        </StyledButton>
      </div>
    </StyledContainerDiv>
  );
}
