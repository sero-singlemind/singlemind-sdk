import { useEffect } from 'react'
import './App.css'
import { SingleMindProvider } from './providers/SingleMindProvider'
import { useSingleMindWalletProfile } from './hooks/useWalletProfile'



const TestComponent = () => {
  const {fetchWalletProfile,isLoading} = useSingleMindWalletProfile()

  const fetchIt = async () => {
    const data = await fetchWalletProfile("")
    console.log(data)

  }
  useEffect(()=>{
    fetchIt()
  },[])
  return <div>
    {isLoading ? "Loading..." : "Not Loading"}
  </div>
}
function App() {

  return (
    <>
      <SingleMindProvider clientId="" apiEndpoint="">
        <TestComponent />
      </SingleMindProvider>
    </>
  )
}

export default App
