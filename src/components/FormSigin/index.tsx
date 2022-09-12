import { Envelope, LockKey } from "phosphor-react";


export function FormSigin(){
    return(

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
                            <h2>Signin</h2>
                        </div>
                    </div>
                    
                    <form action="" className="mt-4" >
                        <div className="flex items-center border-colisao-500 border-b-2 sm:border-black   px-0 py-4">
                            <div className="flex text-colisao-500 sm:text-black ml-2 ">
                                <Envelope size={32}/>
                            </div>
                            <input type="email" name="email" placeholder="Email" className="placeholder:italic placeholder:text-yellow-300 sm:placeholder:text-black w-screen px-4 py-0 bg-transparent text-colisao-500  sm:text-black border-0 outline-none" />
                        </div>     
                        <div className="flex items-center  border-colisao-500 border-b-2 sm:border-black    px-0 py-4 mt-3">
                            <div className="flex text-colisao-500 sm:text-black ml-2 ">
                            <LockKey size={32} />
                            </div>
                            <input type="password" name="password" placeholder="Password" className="placeholder:italic placeholder:text-yellow-300  sm:placeholder:text-black w-screen px-4 py-0 bg-transparent text-colisao-500 sm:text-black border-0 outline-none" />
                        </div>     
                    
                        <button className="bg-colisao-500 text-black sm:bg-black sm:text-colisao-500 mt-4 w-full h-14 rounded-md">Enviar</button>
                    </form>
                    <div className="flex flex-col items-end mt-6 mx-6 sm:mx-auto">
                    <a href="" className="">Forgot your password</a>
                    <span>Don't have an account?  <a href="">Sing up</a></span>
                </div>
               </div>
               
            </div>
                
        </div>
        
    )
}

