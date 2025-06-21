import { createContext } from 'react'

type SingleMindSdkContextType = {
    clientId: string
    apiEndpoint: string
}

// Create the context
export const SingleMindSdkContext = createContext<SingleMindSdkContextType | undefined>(undefined)

// Provider component
export const SingleMindProvider = ({ children, clientId, apiEndpoint }: { children: React.ReactNode, clientId: string, apiEndpoint: string }) => {
    return (
        <SingleMindSdkContext.Provider value={{ clientId, apiEndpoint }}>
            {children}
        </SingleMindSdkContext.Provider>
    )
}

