# SingleMind SDK

[![npm version](https://img.shields.io/npm/v/@serotonin/single-mind-sdk.svg?style=flat)](https://www.npmjs.com/package/@serotonin/single-mind-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React SDK for interacting with Serotonin's SingleMind wallet and portfolio services.

## Features

- 🔌 Easy integration with React applications
- 💼 Fetch wallet portfolio data
- 🔒 Secure API communication
- 🎛️ TypeScript support

## Installation

```bash
npm install singlemind-sdk
# or
yarn add singlemind-sdk
```

## Usage

### Provider Setup

Wrap your application with the `SingleMindProvider`:

```tsx
import { SingleMindProvider } from 'singlemind-sdk';

function App() {
  return (
    <SingleMindProvider 
      clientId="YOUR_CLIENT_ID" 
      apiEndpoint="https://api.your-service.com/graphql"
    >
      <YourApp />
    </SingleMindProvider>
  );
}
```

### Using the Wallet Profile Hook

```tsx
import { useSingleMindWalletProfile } from 'singlemind-sdk';

function WalletProfile() {
  const { fetchWalletProfile, isLoading } = useSingleMindWalletProfile();
  
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchWalletProfile("WALLET_ADDRESS");
        console.log('Wallet Profile:', profile);
      } catch (error) {
        console.error('Error fetching wallet profile:', error);
      }
    };
    
    loadProfile();
  }, []);
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {/* Render your wallet profile data here */}
    </div>
  );
}
```

## API Reference

### SingleMindProvider

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `clientId` | string | Yes | Your application's client ID |
| `apiEndpoint` | string | Yes | The GraphQL API endpoint |
| `children` | ReactNode | Yes | Your application components |

### useSingleMindWalletProfile

A hook to fetch wallet profile data.

#### Returns

| Property | Type | Description |
|----------|------|-------------|
| `fetchWalletProfile` | `(address: string) => Promise<WalletPortfolio>` | Function to fetch wallet profile |
| `isLoading` | `boolean` | Loading state |
| `error` | `Error | null` | Error object if request fails |

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Serotonin](https://github.com/serotonin)
