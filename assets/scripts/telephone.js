function Function1() {
  var copyText = document.getElementById("input1");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("telefone copiado: " + copyText.value);

  window.open("https://api.whatsapp.com/send?phone=5551984607058", '_blank');

}
