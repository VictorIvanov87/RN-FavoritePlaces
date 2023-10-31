const GOOGLE_MAPS_KEY = "AIzaSyAJUWPXMNVvJvMfbAtywTMV8nWgJhidVvc";
const GOOGLE_GEOLOCATION_KEY = "AIzaSyA3yG5xT343bFOu1xjW0Ulh-y8_boz6_SM";

export const getMapPreview = ({ lat, lng }) => {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
  &markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAPS_KEY}`;

  return url;
};

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_GEOLOCATION_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;

  return address;
};
