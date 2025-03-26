import { extractZipAndCity, ExtractZipAndCity } from './extractZipAndCity';

export const formatGasStationResults = (result: any) => {
  return result.features.map((station: any) => {
    const street =
      station.attributes.adresse.split('(')[0]?.trim() ||
      station.attributes.adresse;
    const zipCodeAndCity: ExtractZipAndCity = extractZipAndCity(
      station.attributes.adresse
    );
    return {
      address: {
        street,
        zipCode: zipCodeAndCity.zipCode,
        city: zipCodeAndCity.city
      },
      objectId: station.attributes.objectid
    };
  });
};
