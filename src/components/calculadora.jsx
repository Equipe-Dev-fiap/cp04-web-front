import React, { useState } from 'react';
import 'tailwindcss/index.css';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');
  }

  // Função para lidar com o cálculo
  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos!");
      return;
    }

    let calculo;
    switch (operacao) {
      case '+':
        calculo = n1 + n2;
        break;
      case '-':
        calculo = n1 - n2;
        break;
      case '*':
        calculo = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setResultado("Erro: Divisão por zero");
          return;
        }
        calculo = n1 / n2;
        break;
      default:
        setResultado("Operação inválida");
        return;
    }
    setResultado(calculo);
  };

   // Função para limpar todos os campos
  const clearFields = () => {
    setNum1('');
    setNum2('');
    setResultado('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl w-full max-w-xs mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Calculadora</h2>

    </div>
    </div>
  )

