import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">
        Esse é um simples contador:
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Contando em {count}
        </button>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Contando em {count}
        </button>
        <p className="text-gray-600 text-sm">
          Edit <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-center text-gray-500 italic">
        Olá mundo maluco do Vite, que componente estranho!!
      </p>
    </>
  )
}

export default App
