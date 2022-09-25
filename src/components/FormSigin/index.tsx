import { Envelope, LockKey } from "phosphor-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts";


export function FormSigin() {

    const { signIn, erroAuth } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        await signIn({ email, password })
    }

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-0 mx-3 sm:mx-auto">
            <div className="flex justify-center items-center mb-2">
                <img src="/img/logoColisao.png" className="w-36 sm:w-1/2" />
            </div>
            <div className="flex flex-col justify-center sm:bg-colisao-500 sm:text-black sm:items-center  sm:h-screen">
                <div className="w-11/12 sm:w-9/12 mx-auto mt-8">
                    <div className="ml-1 sm:mx-auto">
                        <div className="
                            font-black
                            relative ml-3
                            after:absolute after:-bottom-0 after:-left-4 after:content[''] after:h-8  after:border-l-8 after:border-l-colisao-500 sm:after:border-l-black  text-2xl">
                            <h2>Sign In</h2>
                        </div>
                    </div>
                    {erroAuth && (
                        <div style={{ color: '#ff0000' }}>
                            Login ou Senha Invalidos tente novamente
                        </div>
                    )}
                    <form action="" className="mt-4" onSubmit={handleLogin} >
                        <div className="">
                            <label className="relative block">
                                <span className="absolute inset-y-0 -left-2 flex items-center pl-2">
                                    <Envelope size={32} />
                                </span>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=" 
                                    placeholder:italic placeholder:text-colisao-500 sm:placeholder:text-black
                                    focus:border-colisao-500 focus:ring-colisao-500 focus:ring-1  
                                    w-full 
                                    py-2 pl-9 pr-3 
                                    shadow-sm 
                                    focus:none
                                    bg-black sm:bg-colisao-500
                                    border-b-2 border-colisao-500 sm:border-black
                                    "
                                    placeholder="Digite seu Email" required type="email" name="email" />
                            </label>
                            <p className="hidden">O Campo email é obrigatorio</p>

                        </div>
                        <div className="mt-6">
                            <label className="relative block">
                                <span className="absolute inset-y-0 -left-2 flex items-center pl-2">
                                    <LockKey size={32} />
                                </span>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=" 
                                    placeholder:italic placeholder:text-colisao-500 sm:placeholder:text-black
                                    focus:border-colisao-500 focus:ring-colisao-500 focus:ring-1  
                                    w-full 
                                    py-2 pl-9 pr-3 
                                    shadow-sm 
                                    focus:none
                                    bg-black sm:bg-colisao-500
                                    border-b-2 border-colisao-500 sm:border-black
                                    "
                                    placeholder="Digite sua senha" required type="password" name="password" />
                            </label>
                            <p className="hidden">O Campo senha é obrigatorio</p>

                        </div>
                        {/* <div className={
                            erroAuth ? 'error' : 'flex items-center border-colisao-500 border-b-2 sm:border-black  px-0 py-4'}>
                            <div className="flex text-colisao-500 sm:text-black ml-2 ">
                                <Envelope size={32} />
                            </div>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" className="placeholder:italic placeholder:text-yellow-300 sm:placeholder:text-black w-screen px-4 py-0 bg-transparent text-colisao-500  sm:text-black border-0 outline-none" />
                        </div>
                        <div className="flex items-center  
                                    border-colisao-500 border-b-2 sm:border-black    
                                    px-0 py-4 
                                    mt-3">
                            <div className="flex text-colisao-500 sm:text-black ml-2 ">
                                <LockKey size={32} />
                            </div>
                            <input onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="placeholder:italic placeholder:text-yellow-300  sm:placeholder:text-black 
                                            w-screen px-4 py-0 
                                            bg-transparent 
                                            text-colisao-500 
                                            sm:text-black 
                                            border-0 
                                            outline-none" />
                        </div> */}

                        <button className="bg-colisao-500 text-black sm:bg-black sm:text-colisao-500 mt-4 w-full h-14 rounded-md">Enviar</button>
                    </form>
                    <div className="flex flex-col items-end mt-6 mx-6 sm:mx-auto">
                        <a href="" className="link-underline link-underline-black link-underline:hover">Forgot your password</a>
                        <span className="mt-4">Don't have an account?  <Link to="/signup" className="link-underline link-underline-black link-underline:hover">Sing up</Link></span>
                    </div>
                </div>
            </div >
        </div >

    )
}

