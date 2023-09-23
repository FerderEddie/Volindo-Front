export function computeTopStyle(uploadedFiles) {
    return {
      base: uploadedFiles.length <= 3
        ? "51.2%"
        : uploadedFiles.length >= 4 && uploadedFiles.length <= 6
        ? "52.5%"
        : uploadedFiles.length >= 7 && uploadedFiles.length <= 9
        ? "55%"
        : uploadedFiles.length === 10
        ? "56.5%"
        : "51.2%",
  
      sm: uploadedFiles.length <= 3
        ? "51.5%"
        : uploadedFiles.length >= 4 && uploadedFiles.length <= 6
        ? "52.5%"
        : uploadedFiles.length >= 7 && uploadedFiles.length <= 9
        ? "53.5%"
        : uploadedFiles.length === 10
        ? "54.5%"
        : "51.5%",
  
      md: uploadedFiles.length <= 3
        ? "54%"
        : uploadedFiles.length >= 4 && uploadedFiles.length <= 6
        ? "55%"
        : uploadedFiles.length >= 7 && uploadedFiles.length <= 9
        ? "56.5%"
        : uploadedFiles.length === 10
        ? "57.5%"
        : "54%",
  
      lg: uploadedFiles.length <= 3
        ? "77.5%"
        : uploadedFiles.length >= 4 && uploadedFiles.length <= 6
        ? "78.5%"
        : uploadedFiles.length >= 7 && uploadedFiles.length <= 9
        ? "79.5%"
        : uploadedFiles.length === 10
        ? "80%"
        : "77.5%",
  
      xl: uploadedFiles.length <= 3
        ? "78.5%"
        : uploadedFiles.length >= 4 && uploadedFiles.length <= 6
        ? "79.5%"
        : uploadedFiles.length >= 7 && uploadedFiles.length <= 9
        ? "80.5%"
        : uploadedFiles.length === 10
        ? "81.5%"
        : "81.5%",
    };
  }
  