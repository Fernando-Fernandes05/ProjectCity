import Navbar from '../../components/Navbar'
import Image from 'next/image'
import './page.css'
import campos from '../../assets/campos.jpg'

export default function inicio() {
    return (
        <main>
            <Navbar/>
            <div className="p-10 w-full flex justify-center">
                <div className="w-3/4 flex items-center shadow-2xl">
                    <Image src={campos} className="imagem" />
                        <div className="flex flex-col">
                            <p className="text-lg text-center font-bold mb-2">Campos do Jordão</p>
                            <p className="text-left px-4">
                            Campos do Jordão é um município brasileiro localizado no interior do estado de São Paulo, mais precisamente na Serra da Mantiqueira; faz parte da recém-criada Região Metropolitana do Vale do Paraíba e Litoral Norte, sub-região 2 de Taubaté.A cidade fica à altitude de 1 628 metros, sendo portanto, o mais alto município brasileiro, considerando a altitude da sede. Sua população estimada, em 2014, era de 50 541 habitantes. Distante 173 km da cidade de São Paulo, 350 km do Rio de Janeiro e 500 km de Belo Horizonte. 
                            </p>
                        </div>
                </div>
            </div>
            <div className="h-96 bg-[#242424]">

        </div>
        </main>
    )}
    