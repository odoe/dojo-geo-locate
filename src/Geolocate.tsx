import { create, tsx } from "@dojo/framework/core/vdom";

// import geolocation from "./middleware/geolocation";

// const factory = create({ geolocation });
const factory = create();

// const Geolocate = factory(function ({ middleware: { geolocation } }) {
//   const { latitude, longitude } = geolocation();
//   return (
//     <label>Lat: {latitude.toFixed(3)} | Lon: {longitude.toFixed(3)}</label>
//   );
// });

const Geolocate = factory(function () {
  return (
    <label>Cross your fingers!</label>
  );
});

export default Geolocate;
