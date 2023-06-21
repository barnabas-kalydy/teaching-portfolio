import { Typography, styled } from "@mui/material";

const StyledContainerDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
});

export default function AboutMeSection() {
  return (
    <div id="aboutme">
      <StyledContainerDiv>
        <div>
          <Typography
            sx={{
              fontSize: "1.3rem",
            }}
          >
            Üdv! A nevem Kalydy Barnabás és magánoktatással foglalkozom
          </Typography>
          <Typography>
            Azért dolgozom, hogy a lehető legtöbb diáknak a lehető legjobb
            minőségben tudjak segíteni elsajátítani a programozás alapjait. A
            tanítás régóta a hobbim és részben a munkám is. Eddig több, mint
            <strong> 150 </strong>diákkal dolgoztam együtt magánórák és
            csoportos órák keretében egyaránt.
          </Typography>
        </div>
        <img src="/static/images/prof-pic.jpg" style={{ maxWidth: "30%" }} />
      </StyledContainerDiv>
    </div>
  );
}
