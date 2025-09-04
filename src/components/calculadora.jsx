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