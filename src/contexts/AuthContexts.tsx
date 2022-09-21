import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
type UserProps = {
  id: string;
  email: string;
  nome: string;
  isAdm: boolean;
  permissions: string[];
  roles: string[];
};
type SignInCredentials = {
  email: string;
  password: string;
};
type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: UserProps;
  erroAuth: boolean;
};
type AuthProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function AuthProvider({ children }: AuthProviderProps) {
    let navigate = useNavigate();
    const [user, setUser] = useState<UserProps>();
    const [erroAuth, setErroAuth] = useState(false);
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const token =  localStorage.getItem('token');
    const dataUser = localStorage.getItem('user')
    const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
  };
  
  useEffect(() => {
    if(dataUser!==null){
      const infoUser = JSON.parse(localStorage.getItem('user'))
      setUser({
        nome:infoUser?.nome,
        email:infoUser?.email,
        id:infoUser?.id,
        isAdm:infoUser?.isAdm,
        permissions:infoUser?.permissions,
        roles:infoUser?.roles
      })
      setIsAuthenticated(true)
    }
  
   /*  authChannel = new BroadcastChannel('auth');
    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut();
          break;
        default:
          break;
      }
    }; */
  }, []);

  /* useEffect(() => {
    if (token) {
      api
        .get('/auth/authInfo', config)
        .then((response:any) => {
          const { email, nome, id, isAdm, roles, permissions } = response.data;
          setUser({
            email,
            id,
            nome,
            isAdm,
            roles,
            permissions,
          });
        })
        .catch(() => {
            localStorage.removeItem('token')
            navigate('/welcome');
        });
    }
  }, []); */

  async function signOut() {
    localStorage.removeItem('token')    
    localStorage.removeItem('user')    
     setIsAuthenticated(false)
    navigate('/welcome');
  }
  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('auth/login', {
        email,
        password,
      });
      
      const { isAdm, nome, id, token, tokenisAdm, roles, permissions } =
        response.data;
      if (tokenisAdm !== 'undefined') {
        localStorage.setItem('token',token)
      }      
      const dataToken = {
        id,
        email,
        nome,
        isAdm,
        roles,
        permissions,
      }
      setUser({
        id,
        email,
        nome,
        isAdm,
        roles,
        permissions,
      });      
      localStorage.setItem('user',JSON.stringify(dataToken))
     /*  api.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`; */
      setErroAuth(false);
      setIsAuthenticated(true)
      navigate('/');
    } catch (error) {
      console.log(`Erro ao signin ${error}`);
      setErroAuth(true);
    }
  }
  return (
    <AuthContext.Provider value={{ signOut, isAuthenticated, signIn, user, erroAuth }}>
      {children}
    </AuthContext.Provider>
  );
}