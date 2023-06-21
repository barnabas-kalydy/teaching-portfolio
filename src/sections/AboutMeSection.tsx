import { Typography } from "@mui/material";

export default function AboutMeSection() {
  return (
    <div id="aboutme">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
            }}
          >
            Üdv! A nevem <strong>Kalydy Barnabás</strong> és magánoktatással
            foglalkozom
          </Typography>
          <Typography>
            Azért dolgozom, hogy a lehető legtöbb diáknak a lehető legjobb
            minőségben tudjak segíteni elsajátítani a programozás alapjait. A
            tanítás régóta a hobbim és részben a munkám is. Eddig több, mint
            <strong> 150 diákkal dolgoztam</strong> együtt magánórák és
            csoportos órák keretében egyaránt.
          </Typography>
          <Typography>
            Tanítottam már középiskolai matematikát, egyetemi alapozó tárgyakat
            (Analízis, algebra, programozás alapjai), mostanában viszont inkább
            csak programozás oktatással foglalkozom, mivel jelenleg ez áll
            hozzám a legközelebb.
          </Typography>
        </div>
        <img src="prof-pic.jpg" style={{ maxWidth: "30%" }} />
      </div>
    </div>
  );
}
