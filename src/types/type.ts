export type WalletPortfolio = {
  tvlUSD: number;
  profile: {
    avatar: string | null;
    username: string | null;
    xAccount: string | null;
    displayName: string | null;
    description: string | null;
  } | null;
  topChains: {
    name: string;
    tvlUSD: number;
  }[];
  topTokens: {
    balance: number;
    balanceInUSD: number;
    name: string;
    symbol: string;
    tokenAddress: string;
  }[];
  topCategories: {
    name: string;
    tvlUSD: number;
  }[];
  walletAgeInDays: number;
  walletAddress: string;
};