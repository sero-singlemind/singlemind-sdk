(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react/jsx-runtime"),require("react"),require("axios")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","axios"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.SingleMindSdk={},t.jsxRuntime,t.React,t.axios))})(this,function(t,n,o,m){"use strict";const s=o.createContext(void 0),h=({children:e,clientId:u,apiEndpoint:c})=>n.jsx(s.Provider,{value:{clientId:u,apiEndpoint:c},children:e});function E(){const e=o.useContext(s);if(!e)throw new Error("useSingleMind must be used within an SingleMindProvider");return e}const P=()=>{const e=o.useContext(s);if(!e)throw new Error("useClientId must be used within SingleMindProvider");return e.clientId},v=()=>{const e=o.useContext(s);if(!e)throw new Error("useApiEndpoint must be used within SingleMindProvider");return e.apiEndpoint},x=`
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
`,w=()=>{const e=P(),u=v(),[c,f]=o.useState(!1);return{fetchWalletProfile:async a=>{var p,g;if(!(a!=null&&a.trim()))return{success:!1,error:{message:"Wallet address is required",code:"INVALID_INPUT"}};f(!0);const M=`${u}/graphql`,y={address:a,clientId:e};try{const r=await m.post(M,{query:x,variables:y},{timeout:1e4,headers:{"Content-Type":"application/json"}});if(r.data.errors)throw new Error(((p=r.data.errors[0])==null?void 0:p.message)||"Failed to fetch wallet profile");if(!((g=r.data.data)!=null&&g.getPortfolio))throw new Error("No data received from server");return{success:!0,data:r.data.data.getPortfolio}}catch(r){const i=r;let d="Failed to fetch wallet profile",l=r instanceof Error?r.message:typeof r=="string"?r:"UNKNOWN_ERROR";i.response?(d=`Server responded with status ${i.response.status}`,l=`HTTP_${i.response.status}`):i.request?(d="No response from server",l="NO_RESPONSE"):i.code==="ECONNABORTED"&&(d="Request timeout",l="TIMEOUT");const S=new Error(d);throw S.code=l,S}finally{f(!1)}},isLoading:c}};t.SingleMindProvider=h,t.useSingleMind=E,t.useSingleMindWalletProfile=w,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=singlemind-sdk.umd.js.map
