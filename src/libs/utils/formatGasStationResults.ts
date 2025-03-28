import { ExtractZipAndCity } from '../interfaces/extractZipAndCity';
import {
  GasStationFetchResult,
  GasStationFetchResultFeature
} from '../interfaces/gasStation';
import { extractZipAndCity } from './extractZipAndCity';

export const formatGasStationResults = (result: GasStationFetchResult) => {
  return result.features.map((station: GasStationFetchResultFeature) => {
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
