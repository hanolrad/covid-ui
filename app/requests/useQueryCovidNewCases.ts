import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { ApiCovidParams } from "./types";

interface NewCovidCasesDate {
  date: string;
  newCases: number;
}

interface ApiCovidNewCasesResponse {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: NewCovidCasesDate[];
}

type QueryFn = () => Promise<ApiCovidNewCasesResponse>;

const qKey = ["new-cases"];

const newCasesFilters = "areaType=nation;areaName=england";
const newCasesStructure = '{"date":"date","newCases":"newCasesByPublishDate"}';

const apiCovidNewCasesParams: ApiCovidParams = {
  filters: newCasesFilters,
  structure: newCasesStructure,
};

export const fetchNewCovidCases: QueryFn = async () => {
  try {
    const response: AxiosResponse<ApiCovidNewCasesResponse> = await axios.get(
      "https://api.coronavirus.data.gov.uk/v1/data",
      {
        params: apiCovidNewCasesParams,
      },
    );
    console.log("new covid cases data:", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching COVID-19 data.");
  }
};

export const useQueryCovidNewCases = (): UseQueryResult<
  ApiCovidNewCasesResponse,
  unknown
> => {
  return useQuery(qKey, fetchNewCovidCases);
};
