import { Button } from "@/components/ui/button"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      const response = await axios.get('/api/health')
      return response.data
    },
  })

  if (isLoading) return <p>Loading API status...</p>
  if (error) return <p>Error connecting to backend.</p>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">API Status</h1>
      <pre className="mt-4 rounded bg-slate-100 p-4">{JSON.stringify(data, null, 2)}</pre>
        <Button className="mt-2">Button</Button>
    </div>
  )
}