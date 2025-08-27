import buddhist_circuit_data from "./buddhist-circuit-tour.json";
import buddhist_india_tourData from "./buddhist-india-tour.json";
import buddhist_pilgrimage_tourData from "./buddhist-pilgrimage-tour.json";
import buddhist_tourData from "./buddhist-tour.json";
import footstep_of_buddha_tourData from "./footstep-of-buddha-tour.json";
import ganga_sailing_tourData from "./ganga-sailing-tour.json";
import golden_triangle_tourData from "./golden-triangle-tour.json";
import india_buddhist_tourData from "./india-buddhist-tour.json";
import india_nepal_buddhist_tourData from "./india-nepal-buddhist-tour.json";
import land_of_buddha_tourData from "./land-of-buddha-tour.json";
import way_to_enlightenment_tourData from "./way-to-enlightenment-tour.json";

export default function dayWiseDataTourDataImporter() {
    return {
        buddhist_circuit: buddhist_circuit_data,
        buddhist_india: buddhist_india_tourData,
        buddhist_pilgrimage: buddhist_pilgrimage_tourData,
        buddhist: buddhist_tourData,
        footstep_of_buddha: footstep_of_buddha_tourData,
        ganga_sailing: ganga_sailing_tourData,
        golden_triangle: golden_triangle_tourData,
        india_buddhist: india_buddhist_tourData,
        india_nepal_buddhist: india_nepal_buddhist_tourData,
        land_of_buddha: land_of_buddha_tourData,
        way_to_enlightenment: way_to_enlightenment_tourData
    };
}
