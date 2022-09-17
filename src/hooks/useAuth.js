import {useContext} from 'react'
import AuthContexts from '../contexts/AuthContexts'

const useAuth =()=>{
    return useContext(AuthContexts)
}

export default useAuth