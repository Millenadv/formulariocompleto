//Mascara as informações, deixando elas editadas e bonitinhas
$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.cep').mask('00000-000');
  $('.telefone').mask('(00) 0000-0000');
  $('.cpf').mask('000.000.000-00', {reverse: true});

});

//Impede que Números sejam digitados
function bloqueiaNumero(texto){
  var tecla = texto.which || texto.keyCode;
  if ((tecla >= 65 && tecla <= 90) || (tecla >=97 && tecla <=122) || (tecla == 199 || tecla == 231)){
    return true;
  }else{
    return false;
  }
}
//Impede que Letras sejam digitadas
function bloqueiaLetra(texto){
  var tecla = texto.which || texto.keyCode;
  if ((tecla >=48 && tecla <= 57)){
    return true;
  }else{
    return false;
  }
}
