import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const StyledDiv = styled("div")({
  backgroundColor: "red",
  display: "flex",
  justifyContent: "space-between",
  height: "3rem",
  alignItems: "center",
});

const StyledButton = styled(Button)({
  color: "black",
  margin: "2rem",
});

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <StyledDiv>
        <div>
          <StyledButton onClick={() => navigate("/")}>KB</StyledButton>
        </div>
        <div>
          <HashLink to="#packages" smooth>
            Csomagok
          </HashLink>
          <HashLink to="#contact" smooth>
            Elérhetőség
          </HashLink>
        </div>
      </StyledDiv>
    </>
  );
}
