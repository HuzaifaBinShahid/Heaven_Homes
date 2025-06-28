import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};
export default function MapView() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  return (
    <>
      {/* API key only works on this website, if you want to use it on your own website, you need to get your own API key from Google Cloud Platform. */}
      <LoadScript googleMapsApiKey={googleMapsApiKey || ""}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          {/* Add any markers or additional features here */}
        </GoogleMap>
      </LoadScript>
    </>
  );
}
