function Function() {
  var copyText = document.getElementById("input");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("email copiado: " + copyText.value);
}
