const GOOGLE_API_KEY = "AIzaSyAJUWPXMNVvJvMfbAtywTMV8nWgJhidVvc";

export const getMapPreview = ({ lat, lng }) => {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
  &markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  return url;
};
