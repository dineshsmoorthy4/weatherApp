export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const formatTemperature = (temp: number) => {
    return `${Math.round(temp)}°C`;
  };