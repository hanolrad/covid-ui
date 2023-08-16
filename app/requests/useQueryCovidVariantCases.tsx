import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { ApiCovidParams } from './types';

interface VariantsDate {
  date: string;
  variants: VariantShare[];
}

interface VariantShare {
  cumWeeklySequenced: number;
  newWeeklyPercentage: number;
  variant: string;
}

interface ApiCovidVariantsResponse {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: VariantsDate[];
}

type QueryFn = () => Promise<ApiCovidVariantsResponse>;

const qKey = ['variant-cases'];

const variantCasesFilters = "areaType=nation;areaName=england"
const variantCasesStructure = '{"date":"date","variants":"variants"}'

const variantCasesParams: ApiCovidParams = {
  filters: variantCasesFilters,
  structure: variantCasesStructure
}

export const fetchCovidVariantsCases: QueryFn = async () => {
  try {
    const response: AxiosResponse<ApiCovidVariantsResponse> = await axios.get(
      'https://api.coronavirus.data.gov.uk/v1/data', {
        params: variantCasesParams
  });
    console.log("variant cases data:", response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching COVID-19 data.');
  }
};

export const useQueryCovidVariantCases = (): UseQueryResult<ApiCovidVariantsResponse, unknown> => {
  return useQuery(qKey, fetchCovidVariantsCases);
};
