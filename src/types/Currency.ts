export interface Currency {
  code: string;
  value: number;
}

export interface AllCurrency {
  [key: string]: Currency;
}
