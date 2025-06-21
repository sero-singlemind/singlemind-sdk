(function(t,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("react"),require("axios")):typeof define=="function"&&define.amd?define(["exports","react","axios"],r):(t=typeof globalThis<"u"?globalThis:t||self,r(t.SingleMindSdk={},t.React,t.axios))})(this,function(t,r,S){"use strict";const i=r.createContext(void 0),h=({children:e,clientId:l,apiEndpoint:u})=>React.createElement(i.Provider,{value:{clientId:l,apiEndpoint:u}},e);function m(){const e=r.useContext(i);if(!e)throw new Error("useSingleMind must be used within an SingleMindProvider");return e}const E=()=>{const e=r.useContext(i);if(!e)throw new Error("useClientId must be used within SingleMindProvider");return e.clientId},P=()=>{const e=r.useContext(i);if(!e)throw new Error("useApiEndpoint must be used within SingleMindProvider");return e.apiEndpoint},v=`
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
`,w=()=>{const e=E(),l=P(),[u,c]=r.useState(!1);return{fetchWalletProfile:async s=>{var f,p;if(!(s!=null&&s.trim()))return{success:!1,error:{message:"Wallet address is required",code:"INVALID_INPUT"}};c(!0);const M=`${l}/graphql`,y={address:s,clientId:e};try{const n=await S.post(M,{query:v,variables:y},{timeout:1e4,headers:{"Content-Type":"application/json"}});if(n.data.errors)throw new Error(((f=n.data.errors[0])==null?void 0:f.message)||"Failed to fetch wallet profile");if(!((p=n.data.data)!=null&&p.getPortfolio))throw new Error("No data received from server");return{success:!0,data:n.data.data.getPortfolio}}catch(n){const o=n;let a="Failed to fetch wallet profile",d=n instanceof Error?n.message:typeof n=="string"?n:"UNKNOWN_ERROR";o.response?(a=`Server responded with status ${o.response.status}`,d=`HTTP_${o.response.status}`):o.request?(a="No response from server",d="NO_RESPONSE"):o.code==="ECONNABORTED"&&(a="Request timeout",d="TIMEOUT");const g=new Error(a);throw g.code=d,g}finally{c(!1)}},isLoading:u}};t.SingleMindProvider=h,t.useSingleMind=m,t.useSingleMindWalletProfile=w,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=singlemind-sdk.umd.js.map
