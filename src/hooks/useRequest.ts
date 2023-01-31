import { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { app } from '../services/axios'

function useRequest<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    app
      .get(url, options)
      .then((response) => setData(response.data))
      .finally(() => {
        setLoading(false)
      })
  }, [options, url])

  return { data, loading }
}

export default useRequest
