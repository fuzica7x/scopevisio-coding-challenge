import { createContext } from 'react';
import { FilterContextInterface } from '../interfaces/filter';

export const FilterContext = createContext<FilterContextInterface | undefined>(
  undefined
);
