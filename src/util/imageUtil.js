import torrent from "../img/torrent.jpg"
import godfrey from "../img/godfrey.jpg"
import godwyn from "../img/godwyn.jpg"
import marika from "../img/marika.jpg"
import malenia from "../img/malenia.jpg"
import landsBetween from "../img/lands-between.png"
import shattering from "../img/elden-ring-shatter.jpg"
import margit from "../img/margit.jpg"
import aiguille from "../img/aiguille.jpg"
import blackKnives from "../img/black-knives.jpg"
import church from "../img/church.png"
import fia from "../img/fia.jpg"
import lord from "../img/lord.jpg"
import miquella from "../img/miquella.jpg"
import mohg from "../img/mohg.jpg"
import morgott from "../img/morgott.jpg"
import nokron from "../img/nokron.png"
import placidusax from "../img/placidusax.png"
import radagon from "../img/radagon.jpg"
import radahn from "../img/radahn.jpg"
import ranni from "../img/ranni.jpg"
import regression from "../img/regression.jpg"
import rennala from "../img/rennala.jpg"
import runeOfDeath from "../img/rune-of-death.jpg"
import runeMajeure from "../img/runes-majeures.jpg"
import tiche from "../img/tiche.jpg"

export const Image = (ref) => {
  switch (ref) {
    case "torrent": return torrent;
    case "godfrey": return godfrey;
    case "godwyn": return godwyn;
    case "marika": return marika;
    case "malenia": return malenia;
    case "landsBetween": return landsBetween;
    case "shattering": return shattering;
    case "aiguille": return aiguille;
    case "blackKnives": return blackKnives;
    case "church": return church;
    case "fia": return fia;
    case "lord": return lord;
    case "miquella": return miquella;
    case "mohg": return mohg;
    case "morgott": return morgott;
    case "nokron": return nokron;
    case "placidusax": return placidusax;
    case "radagon": return radagon;
    case "radahn": return radahn;
    case "ranni": return ranni;
    case "regression": return regression;
    case "rennala": return rennala;
    case "runeOfDeath": return runeOfDeath;
    case "runeMajeure": return runeMajeure;
    case "tiche": return tiche;
    case "margit": return margit;
    default: return "";
  }
}