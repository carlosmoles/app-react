import {useState, useEffect} from 'react'

const useFetch = (baseURL) =>{
    const [data,setData] = useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
      const fetchResource = async () => {
          try {
              let res = await fetch(baseURL)
              let data = await res.json()
              setData(data)
              setLoading(false)
          }catch (error){
              setLoading(false)
              setError(error)
          }
      }
      fetchResource()
    }, [baseURL])
    return {data, loading, error}
}
export default useFetch