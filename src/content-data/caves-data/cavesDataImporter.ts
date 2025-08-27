import ajanta_caves_data from "./ajanta-caves.json";
import bhaja_caves_data from "./bhaja-caves.json";
import ellora_caves_data from "./ellora-caves.json";
import junnar_caves_data from "./junnar-caves.json";
import kanheri_caves_data from "./kanheri-caves.json";
import karla_caves_data from "./karla-caves.json";

export default function cavesDataImporter() {
    return {
        ajanta: ajanta_caves_data,
        bhaja: bhaja_caves_data,
        ellora: ellora_caves_data,
        junnar: junnar_caves_data,
        kanheri: kanheri_caves_data,
        karla: karla_caves_data
    };
} 