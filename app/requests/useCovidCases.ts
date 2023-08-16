import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

interface CovidCasesDate {
  date: string;
  newCases: number;
}

interface ApiCovidResponse {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: CovidCasesDate[];
}

type QueryFn = () => Promise<ApiCovidResponse>;

const qKey = ['cases'];

type ApiCovidParams = {
  filters: string;
  structure: string;
}

const casesFilters = "areaType=nation;areaName=england"
const casesStructure = '{"date":"date","newCases":"newCasesByPublishDate"}'

const apiCovidParams: ApiCovidParams = {
  filters: casesFilters,
  structure: casesStructure
}

export const fetchCovidCases: QueryFn = async () => {
  try {
    const response: AxiosResponse<ApiCovidResponse> = await axios.get(
      'https://api.coronavirus.data.gov.uk/v1/data', {
        params: apiCovidParams
  });
    console.log("covid cases data:", response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching COVID-19 data.');
  }
};

export const useCovidCases = (): UseQueryResult<ApiCovidResponse, unknown> => {
  return useQuery(qKey, fetchCovidCases);
};

// export default useCovidCases;
