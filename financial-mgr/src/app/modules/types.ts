export interface Asset {
  amount: number;
  currency: string;
  liquidityClass: "liquid" | "yield" | "volatile" | "illiquid";
  lockedUntil?: Date;
  volatility: number;
  baseValue?: number;
}

export interface WalletState {
  balance: number;
  assets: Asset[];
  liabilities: Liability[];
}

export interface Liability {
  principalBalance: number;
  interestRate: number;
  minimumPayment?: number;
}

export interface ExchangeRates {
  [key: string]: number | Date; // e.g., "USD/EUR": 0.92, timestamp: Date
  timestamp: Date;
}
