import { Text } from "react-native";
import PlacesList from "../components/places/PlacesList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const place = await fetchPlaces();
      setLoadedPlaces(place);
    }
    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((curPlace) => [...curPlace, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
