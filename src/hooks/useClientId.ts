import { useContext } from 'react'
import { SingleMindSdkContext } from '../providers/SingleMindProvider'

export const useClientId = () => {
  const context = useContext(SingleMindSdkContext)
  if (!context) throw new Error('useClientId must be used within SingleMindProvider')
  return context.clientId
}