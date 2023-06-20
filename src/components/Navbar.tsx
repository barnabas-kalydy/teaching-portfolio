import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
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
  color: "white",
});

export default function Navbar() {
  return (
    <StyledContainerDiv>
      <div>
        <StyledLink to="#aboutme" smooth>
          <StyledButton>KB</StyledButton>
        </StyledLink>
      </div>
      <div>
        <StyledLink to="#packages" smooth>
          <StyledButton>Csomagok</StyledButton>
        </StyledLink>
        <StyledLink to="#contact" smooth>
          <StyledButton>Elérhetőség</StyledButton>
        </StyledLink>
      </div>
    </StyledContainerDiv>
  );
}
