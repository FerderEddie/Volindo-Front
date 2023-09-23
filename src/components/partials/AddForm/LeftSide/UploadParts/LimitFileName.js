export const limitFileName = (name, limit = 10) => {
  if(!name) return ''; // handle undefined or null name

  let extension = name.split(".").pop(); // Getting the extension
  let baseName = name.replace(`.${extension}`, ""); // Removing the extension

  // Automatically fix the filename by replacing multiple spaces with a single space
  baseName = baseName.replace(/\s+/g, " ");

  // Remove any periods from the baseName and then append only one period for the extension.
  baseName = baseName.replace(/\./g, "");

  if (baseName.length <= limit) return `${baseName}.${extension}`;

  // Return the first 'limit' characters, then '...', then the file extension
  return `${baseName.substring(0, limit)}... .${extension}`;
};
