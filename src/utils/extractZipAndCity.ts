import { ExtractZipAndCity } from '../interfaces/extractZipAndCity';

export const extractZipAndCity = (adresse: string): ExtractZipAndCity => {
  const match = adresse.match(/\((\d{5})\s(.+?)\)/);
  return match
    ? { zipCode: match[1], city: match[2] }
    : { zipCode: '', city: '' };
};
