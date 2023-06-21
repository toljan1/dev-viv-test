/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=";

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

function request<T>(
  url: string,
  method: RequestMethod = "GET",
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };
  }
  return new Promise<void>((resolve) => {
    resolve();
  })
    .then(() => fetch(BASE_URL + url, options))
    .then((response) => response.json());
}

// eslint-disable-next-line import/prefer-default-export
export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, "POST", data),
  patch: <T>(url: string, data: any) => request<T>(url, "PATCH", data),
  delete: (url: string) => request(url, "DELETE"),
};
