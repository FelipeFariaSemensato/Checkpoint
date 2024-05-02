import Produto from "@/components/Produto";
import "./styles.css";

export default function Produtos() {
    return (
        <div>
            <div>
                <h1 className="title">Produtos disponíveis</h1>
            </div>
            <div className="div-produtos">
                <Produto nome="Pãozinho" valor="R$ 0,87 a unidade" imagem="/pao.jpg" />
                <Produto nome="Coquinha" valor="R$ 10,00" imagem="/coca.jpg" />
                <Produto nome="Donuts" valor="R$ 7,00 a unidade" imagem="/donuts.jpg" />
                <Produto nome="Mussarela" valor="R$ 54,90/Kg" imagem="/mussarela.jpg" />
                <Produto nome="Presunto" valor="R$ 34,90/Kg" imagem="/presunto.jpg" />
            </div>
        </div>
    )
}