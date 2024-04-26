import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({setLoginUser}) => {
    const navigate = useNavigate()
    const logout = ()=> {
        navigate("/login")
    }
    // const [user, setLoginUser] = useState({})
  return (
    ()=>setLoginUser({})
    
  )
}

export default Logout