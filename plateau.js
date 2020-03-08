(function main(){
  plateauEchec();
})();

function plateauEchec(){
  var nombreCases = 8;
  var plateau = document.getElementById('tableEchec');
  var tab = '';
  for(var i = 0; i < nombreCases; i++){
    tab += '<tr>\n'
    for(var j = 0; j < nombreCases; j++){
      if((j + i) % 2 == 0) tab += '<td class = "whiteCase"></td>\n';
      else tab += '<td class = "blackCase"></td>\n';
    }
    tab += '</tr>\n'
  }
  plateau.innerHTML = tab;
}