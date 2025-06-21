import { useState } from 'react'
import { useClientId } from './useClientId'
import { useApiEndpoint } from './useApiEndpoint'
import axios, { type AxiosError } from 'axios';
import { type WalletPortfolio } from '../types/type';

type ApiError = {
  message: string;
  code?: string;
  details?: unknown;
};

type WalletProfileResult = {
  data?: WalletPortfolio;
  error?: ApiError;
  success: boolean;
};


const PORTFOLIO_QUERY = `
query PortfolioData($address: String!, $clientId: String!) {
  getPortfolio(
    data: {
      address: $address,
      clientId: $clientId
    }
  ) {
    tvlUSD
    profile {
      avatar
      username
      xAccount
      displayName
      description
    }
    topChains {
      name
      tvlUSD
    }
    topTokens {
      balance
      balanceInUSD
      name
      symbol
      tokenAddress
    }
    topCategories {
      name
      tvlUSD
    }
    walletAgeInDays
    walletAddress
  }
}
`;
export const useSingleMindWalletProfile = () => {
  const clientId = useClientId()
  const apiEndpoint = useApiEndpoint()
  const [isLoading, setLoading] = useState(false)
  
  const fetchWalletProfile = async (walletAddress: string): Promise<WalletProfileResult> => {
    // Input validation
    if (!walletAddress?.trim()) {
      return {
        success: false,
        error: {
          message: 'Wallet address is required',
          code: 'INVALID_INPUT'
        }
      };
    }

    setLoading(true);
    const url = `${apiEndpoint}/graphql`;
    const variables = {
      address: walletAddress,
      clientId: clientId
    };

    try {
      const response = await axios.post<{ data?: { getPortfolio: WalletPortfolio }, errors?: Array<{ message: string }> }>(
        url,
        {
          query: PORTFOLIO_QUERY,
          variables
        },
        {
          timeout: 10000, // 10 second timeout
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle GraphQL errors
      if (response.data.errors) {

        //throw error
        throw new Error(response.data.errors[0]?.message || 'Failed to fetch wallet profile');    
        
      }


      if (!response.data.data?.getPortfolio) {
        //throw error
        throw new Error('No data received from server');    
      }


      return {
        success: true,
        data: response.data.data.getPortfolio
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      let errorMessage = 'Failed to fetch wallet profile';
      let errorCode = 'UNKNOWN_ERROR';

      if (axiosError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = `Server responded with status ${axiosError.response.status}`;
        errorCode = `HTTP_${axiosError.response.status}`;
      } else if (axiosError.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server';
        errorCode = 'NO_RESPONSE';
      } else if (axiosError.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout';
        errorCode = 'TIMEOUT';
      }

      //throw error
      throw new Error(errorMessage);    
     
    } finally {
      setLoading(false);
    }




  }

  return {
    fetchWalletProfile,
    isLoading
  }
}