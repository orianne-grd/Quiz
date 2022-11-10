import torrent from "./torrent.jpg"
import godfrey from "./godfrey.jpg"
import godwyn from "./godwyn.jpg"
import marika from "./marika.jpg"
import malenia from "./malenia.jpg"
import landsBetween from "./lands-between.png"
import shattering from "./elden-ring-shatter.jpg"
import margit from "./margit.jpg"

// export default {
//   torrent,
//   godfrey,
//   godwyn,
//   marika,
//   malenia,
//   landsBetween,
//   shattering,
//   margit
// }

export const Image = (ref) => {
  switch (ref) {
    case "torrent": return torrent;
    case "godfrey": return godfrey;
    case "godwyn": return godwyn;
    case "marika": return marika;
    case "malenia": return malenia;
    case "landsBetween": return landsBetween;
    case "shattering": return shattering;
    case "margit": return margit;
    default: return "";
  }
}