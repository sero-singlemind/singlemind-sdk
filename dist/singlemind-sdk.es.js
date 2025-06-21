import { createContext as E, useContext as l, useState as h } from "react";
import S from "axios";
const i = E(void 0), x = ({ children: e, clientId: a, apiEndpoint: d }) => /* @__PURE__ */ React.createElement(i.Provider, { value: { clientId: a, apiEndpoint: d } }, e);
function y() {
  const e = l(i);
  if (!e)
    throw new Error("useSingleMind must be used within an SingleMindProvider");
  return e;
}
const v = () => {
  const e = l(i);
  if (!e) throw new Error("useClientId must be used within SingleMindProvider");
  return e.clientId;
}, w = () => {
  const e = l(i);
  if (!e) throw new Error("useApiEndpoint must be used within SingleMindProvider");
  return e.apiEndpoint;
}, P = `
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
`, M = () => {
  const e = v(), a = w(), [d, c] = h(!1);
  return {
    fetchWalletProfile: async (o) => {
      var u, f;
      if (!(o != null && o.trim()))
        return {
          success: !1,
          error: {
            message: "Wallet address is required",
            code: "INVALID_INPUT"
          }
        };
      c(!0);
      const g = `${a}/graphql`, m = {
        address: o,
        clientId: e
      };
      try {
        const t = await S.post(
          g,
          {
            query: P,
            variables: m
          },
          {
            timeout: 1e4,
            // 10 second timeout
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        if (t.data.errors)
          throw new Error(((u = t.data.errors[0]) == null ? void 0 : u.message) || "Failed to fetch wallet profile");
        if (!((f = t.data.data) != null && f.getPortfolio))
          throw new Error("No data received from server");
        return {
          success: !0,
          data: t.data.data.getPortfolio
        };
      } catch (t) {
        const r = t;
        let n = "Failed to fetch wallet profile", s = t instanceof Error ? t.message : typeof t == "string" ? t : "UNKNOWN_ERROR";
        r.response ? (n = `Server responded with status ${r.response.status}`, s = `HTTP_${r.response.status}`) : r.request ? (n = "No response from server", s = "NO_RESPONSE") : r.code === "ECONNABORTED" && (n = "Request timeout", s = "TIMEOUT");
        const p = new Error(n);
        throw p.code = s, p;
      } finally {
        c(!1);
      }
    },
    isLoading: d
  };
};
export {
  x as SingleMindProvider,
  y as useSingleMind,
  M as useSingleMindWalletProfile
};
//# sourceMappingURL=singlemind-sdk.es.js.map
