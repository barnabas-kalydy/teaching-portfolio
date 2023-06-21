import { Typography } from "@mui/material";

export default function InfoPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "2rem",
        backgroundColor: "#15ab1f",
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
          A tanítási módszerem inkább egyfajta <strong>mentorálás</strong>, ahol
          ingyenes forrásokat és saját tananyagokat javaslok Neked és a közös
          órákon inkább az elakadásaidat nézzük át, mintsem hogy ott magyaráznám
          ell nulláról a tananyagot. A legtöbb esetben
          <strong> angol nyelvű </strong>tananyagokat fogok javasolni, mivel a
          programozásnál az angol tudás is alapvető készség, így az egy jó
          megszokás, ha már a tanulás közben is igyekszel az angol nyelvet
          használni.
        </Typography>
        <Typography>
          A közös munka megkezdése után el fogok neked küldeni egy (angol
          nyelvű) összegzést a lépésekről, amik ahhoz szükségesek, hogy
          megszerezd az első programozó állásodat. Ez a dokumentum végigkísér
          majd a tanulásban és sokszor támaszként szolgálhat ha elakadtál, vagy
          azon gondolkozol, hogy mi lehet a következő lépés a tanulásban.
        </Typography>
      </div>
      <img
        src="/infopage-cooperation.jpg"
        style={{ maxWidth: "40%", borderRadius: "3%" }}
      />
    </div>
  );
}
