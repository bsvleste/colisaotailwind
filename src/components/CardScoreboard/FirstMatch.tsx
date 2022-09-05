
import logoColisao from '../../assets/logoColisao.png'
import logoAdversario from '../../assets/logoAdversario.png'
type FirstMatchProps={
    scoreboarFirstMatch:string;
}

export function FirstMatch({scoreboarFirstMatch}:FirstMatchProps){
    return (
        <>
            <div className="w-full sm:w-[35.5rem] text-colisao-500 bg-black h-48 flex flex-col justify-center items-center">
                <h3 className="mt-2 font-bold">1°Quadro</h3>
                <div className="w-full mb-8 flex justify-around items-center">
                    <div className=' flex flex-col justify-center items-center'>
                        <img src={logoColisao} className='w-16 h-16 rounded-full' alt="Logo Colisao" />
                         <h1>Colisao</h1>
                    </div>
                    <h3 className="font-bold">{scoreboarFirstMatch}</h3>
                    <div className=' flex flex-col justify-center items-center'>
                        <img src={logoAdversario} className='w-16 h-16 rounded-full' alt="Logo Colisao" />
                        <h1>Adversario</h1>
                    </div>
                </div>
            </div>
        </>
    )
}