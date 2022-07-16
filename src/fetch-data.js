import sourceData from "@/data.json";

function fetchDestinations() {
  return sourceData.destinations;
}

function fetchCrew() {
  return sourceData.crew;
}

function fetchTechnology() {
  return sourceData.technology;
}

export { fetchDestinations, fetchCrew, fetchTechnology };
