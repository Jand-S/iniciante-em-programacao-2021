/**
 * Dado as medidas de três lados (números inteiros), verifique se os três podem formar um triângulo.
 * Em caso afirmativo, verifique se ele é escaleno, isóceles ou equilátero e se trata-se de um triângulo retângulo ou não.
 * O retorno deve ser `Valido-Tipo` (Tipo = Isoceles, Escaleno ou Equilatero) e `Retangulo: X` (X = S ou N).
 *
 * Exemplo:
 * - Para lado1 = 4, lado2 = 3 e lado3 = 3
 * - Deve retornar:
 * Valido-Isoceles
 * Retangulo: N
 *
 * Caso não seja um triângulo válido, deve retornar 'Invalido'.
 *
 */
export default function qualTriangulo (lado1, lado2, lado3) {
  let tipo ='';
  let retangulo = lado2-lado1;
  if (lado2+retangulo == lado3){
    retangulo = 'S'
  }else{
    retangulo = 'N'
  }
  if (lado1 <= lado2 && lado2 <= lado3 || lado1 >= lado2 && lado2 >= lado3){
    if (lado1 == lado2 && lado2 == lado3){ //Equilatero
      tipo = 'Equilatero'
    }else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){ //Isoceles
      tipo = 'Isoceles' 
    }else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){ //Escaleno
      tipo = 'Escaleno'
    }
    return `Valido-`+tipo+`
Retangulo: `+retangulo+``
  }else {
    return 'Invalido'
  }
}
