import { Typography } from "@mui/material";

export default function InfoPage() {
  return (
    <div
      style={{
        padding: "3rem",
        backgroundColor: "#15ab1f",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            gap: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Typography style={{ fontSize: "1.4rem" }}>
              Hogyan néz ki velem a közös munka?
            </Typography>
            <Typography>
              A tanítási módszerem inkább egyfajta <strong>mentorálás</strong>,
              ahol ingyenes forrásokat és saját tananyagokat javaslok Neked és a
              közös órákon inkább az elakadásaidat nézzük át, mintsem hogy ott
              magyaráznám ell nulláról a tananyagot. A legtöbb esetben angol
              nyelvű tananyagokat fogok javasolni, mivel a programozásnál az
              angol tudás is alapvető készség, így az egy jó megszokás, ha már a
              tanulás közben is igyekszel az angol nyelvet használni.
            </Typography>
            <Typography>
              A közös munka megkezdése után el fogok neked küldeni egy (angol
              nyelvű) összegzést a lépésekről, amik ahhoz szükségesek, hogy
              megszerezd az első programozó állásodat. Ez a dokumentum
              végigkísér majd a tanulásban és sokszor támaszként szolgálhat ha
              elakadtál, vagy azon gondolkozol, hogy mi lehet a következő lépés
              a tanulásban.
            </Typography>
          </div>
          <img src="/infopage-cooperation.jpg" style={{ maxWidth: "40%" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
          }}
        >
          <img
            src="prof-pic.jpg"
            alt="😥"
            style={{
              maxWidth: "40%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography
              style={{
                fontSize: "1.4rem",
              }}
            >
              Mit csinálunk az első órán?
            </Typography>
            <Typography>
              Ahhoz hogy elérjünk valamit alapvetően 3 dolog szükséges:
              <ol
                style={{
                  margin: 0,
                }}
              >
                <li>tudni, hogy hol vagyunk</li>
                <li>tudni, hogy hova szeretnénk eljutni</li>
                <li>
                  megtenni a megfelelő lépéseket, hogy eljussunk a célunkhoz
                </li>
              </ol>
            </Typography>
            <Typography>
              Az első órán az első kettővel fogunk foglalkozni, mivel ez alapján
              tudjuk eldönteni, hogy mit szeretnénk majd csinálni itt az órákon.
              Azt is ez alapján tudjuk meghatározni, hogy a céljaid elérésében
              tudok-e segíteni. Ha például olyan célod van, ami túlmutat a
              jelenlegi tudásomon, akkor sajnos nem fogunk tudni együtt
              dolgozni.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
