import buddhismInNepal from "./buddhism-in-nepal.json";
import buddhismInOrrisa from "./buddhism-in-orrisa.json";
import buddhismInGujarat from "./buddhism-in-gujarat.json";
import buddhismInArunachal from "./buddhism-in-arunachal-pradesh.json";
import buddhismInSikkim from "./buddhism-in-sikkim.json";
import buddhismInJK from "./buddhism-in-jk.json";
import buddhismInMaharashtra from "./buddhism-in-maharashtra.json";
import buddhistFestival from "./buddhist-festival-in-india.json";
import buddhismInUP from "./buddhism-in-uttarpradesh.json";
import buddhismInBihar from "./buddhism-in-bihar.json";
import buddhismInHimachal from "./buddhism-in-himachal.json";
import buddhistTemples from "./buddhist-temples-monuments.json";

export default function buddhismTripsDataImporter() {
    return {
        nepal: buddhismInNepal,
        orrisa: buddhismInOrrisa,
        gujarat: buddhismInGujarat,
        arunachal: buddhismInArunachal,
        sikkim: buddhismInSikkim,
        jk: buddhismInJK,
        maharashtra: buddhismInMaharashtra,
        festivals: buddhistFestival,
        up: buddhismInUP,
        bihar: buddhismInBihar,
        himachal: buddhismInHimachal,
        temples: buddhistTemples
    };
} 