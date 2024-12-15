import { Link } from "react-router-dom"

export default function CardView() {
  return (
    <div className="p-6 text-center space-y-8">
        <h1 className="text-3xl font-bold mb-4">Bem vindo ao card View</h1>
        <p className="text-gray-600">Essa é uma página que demonstra a navegação em React</p>
        <Link to={"/"} className=" inline-block text-zinc-200 bg-yellow-600 rounded-lg py-2 px-4 hover:bg-yellow-800 hover:text-zinc-50 transition-colors"  >Voltar para Home
        </Link>
    </div>
  )   
}

