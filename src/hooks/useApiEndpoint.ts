import { useContext } from 'react'
import { SingleMindSdkContext } from '../providers/SingleMindProvider'

export const useApiEndpoint = () => {
  const context = useContext(SingleMindSdkContext)
  if (!context) throw new Error('useApiEndpoint must be used within SingleMindProvider')
  return context.apiEndpoint
}