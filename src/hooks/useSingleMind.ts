import { useContext } from 'react'
import { SingleMindSdkContext } from "../providers/SingleMindProvider"

export function useSingleMind() {
    const context = useContext(SingleMindSdkContext)
    if (!context) {
        throw new Error('useSingleMind must be used within an SingleMindProvider')
    }
    return context
}