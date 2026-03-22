import Img from '../../assets/users (1).png'
import { Background } from "./style"


function TopBackground(){


    return(
        <Background>
            <img src={Img} alt="Imagem-Do-Usuário" />
        </Background>
    )
}

export default TopBackground