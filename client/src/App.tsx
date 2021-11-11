import { useEffect } from 'react'
import { fetchLocalApi } from './localservice'

function App() {
  const fetchData = async () => {
    const data = await fetchLocalApi();
    console.log('data: ', data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      View Finder App
    </div>
  )
}

export default App
