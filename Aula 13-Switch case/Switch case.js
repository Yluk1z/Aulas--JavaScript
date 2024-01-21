const temperature = 25

switch(temperature) {
  case 30:
    console.log("A pessoa está com a temperatura muito baixa. ")
  break
    
  case 33:
    console.log("A pessoa está com a temperatura baixa. ")
  break
    
  case 36:
    console.log("A pessoa está com a temperatura Normal ")
  break
    
  case 39:
    console.log("High temperature")
  break

  default:
    console.log("Temperatura não encontrada")
  break
}

/*
È utilizado como If e Else, porém cada case possui um valor, e caso o valor seja igual ao case, o código será executado.
*/