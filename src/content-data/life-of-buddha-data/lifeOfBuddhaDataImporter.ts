import birthOfBuddha from "./birth-of-buddha.json";
import childhoodOfBuddha from "./childhood-of-buddha.json";
import departureFromPalace from "./departure-from-palace.json";
import enlightenmentOfBuddha from "./enlightenment-of-buddha.json";
import fourEncounterOfBuddha from "./four-encounter-of-buddha.json";
import parinirvanaOfBuddha from "./parinirvana-of-buddha.json";
import teachingsOfBuddha from "./teachings-of-buddha.json";

export default function lifeOfBuddhaDataImporter() {
    return {
        birth: birthOfBuddha,
        childhood: childhoodOfBuddha,
        departure: departureFromPalace,
        enlightenment: enlightenmentOfBuddha,
        fourEncounter: fourEncounterOfBuddha,
        parinirvana: parinirvanaOfBuddha,
        teachings: teachingsOfBuddha
    };
} 