import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  GET_BRANCHES: `${COMMON_URL}dhiwise-team.freshteam.com/api/branches`,
  GET_TEAMS: `${COMMON_URL}dhiwise-team.freshteam.com/api/teams`,

  GET_EMPLOYEECAPABILITYSELECT: `${COMMON_URL}rpspezcanqopwgztzymx.supabase.co/rest/v1/Employee_capability`,
  GET_EMPLOYEECAPABILITYIDEQ5: `${COMMON_URL}rpspezcanqopwgztzymx.supabase.co/rest/v1/Employee_capability`,
  PATCH_EMPLOYEECAPABILITYIDEQ5: `${COMMON_URL}rpspezcanqopwgztzymx.supabase.co/rest/v1/Employee_capability`,
  POST_EMPLOYEECAPABILITY: `${COMMON_URL}rpspezcanqopwgztzymx.supabase.co/rest/v1/Employee_capability`,
  GET_EMPLOYEES: `${COMMON_URL}dhiwise-team.freshteam.com/api/employees`,
};

export const getBranches = (payload) =>
  apis.get(API_URLS.GET_BRANCHES, {
    ...payload,
    headers: {
      accept: "application/json",
      Authorization: "<Token>",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

  export const getTeams = (payload) =>
  apis.get(API_URLS.GET_TEAMS, {
    ...payload,
    headers: {
      accept: "application/json",
      Authorization: "<Token>",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const getEmployeecapabilityselect = (payload) =>
  apis.get(API_URLS.GET_EMPLOYEECAPABILITYSELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      apikey: "<api key>",
      Authorization:"<Token>",
      Range: "0-9",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });
  export const getEmployeecapabilityideq5 = (payload) => 
  apis.get(API_URLS.GET_EMPLOYEECAPABILITYIDEQ5, {
    ...payload,
    params: { id: `eq.${payload?.params.id}` },
    headers: {
       apikey: "<api key>",
      Authorization:"<Token>",
      Range: "0-9",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const patchEmployeecapabilityideq5 = (payload) =>
  apis.patch(API_URLS.PATCH_EMPLOYEECAPABILITYIDEQ5, {
    ...payload,
    params: { id: `eq.${payload?.params.id}` },
    headers: {     
       apikey: "<api key>",
      Authorization:"<Token>",
      "Content-Type": "application/json",
      Prefer: "return=representation",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const postEmployeecapability = (payload) =>
  apis.post(API_URLS.POST_EMPLOYEECAPABILITY, {
    ...payload,
    headers: {
      apikey: "<api key>",
      Authorization:"<Token>",
      "Content-Type": "application/json",
      ...payload?.headers,
    },
  });

export const getEmployees = (payload) =>
  apis.get(API_URLS.GET_EMPLOYEES, {
    ...payload,
    headers: {
      accept: "application/json",
      Authorization: "<Token>",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });
