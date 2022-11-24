import { useCallback, useEffect, useState } from 'react'
import { userApis } from '../apis/userApis';

export default function useGetUserByIdHook() {
    const [data,setData] = useState({})
    const fetchUser = useCallback(async() => {
        const res = await userApis.getUserByid(1)
        setData(res)
      },[])
     useEffect(() => {
      fetchUser()
     },[fetchUser])
  return data
}
