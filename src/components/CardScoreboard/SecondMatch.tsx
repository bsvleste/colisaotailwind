
import logoColisao from '../../assets/logoColisao.png'
import logoAdversario from '../../assets/logoAdversario.png'

type SecondMatchProps={
    scoreboarSecondMatch:string
}

export function SecondMatch({scoreboarSecondMatch}:SecondMatchProps){
    return (
        <>
            <div className="mt-8 w-full sm:w-[35.5rem] bg-colisao-500 h-48 flex flex-col  items-center">
                
                <h3 className="mt-4 font-bold">2° Quadro</h3>
                <div className="w-full mb-8 flex justify-around items-center">
                    <div className=' flex flex-col justify-center items-center'>
                        <img src={logoColisao} className='w-16 h-16 rounded-full' alt="Logo Colisao" />
                         <h1>Colisao</h1>
                    </div>
                    <h3 className="font-bold">{scoreboarSecondMatch}</h3>
                    <div className=' flex flex-col justify-center items-center'>
                        <img src={logoAdversario} className='w-16 h-16 rounded-full' alt="Logo Colisao" />
                        <h1>Adversario</h1>
                    </div>
                </div>
            </div>
        </>
    )
} 