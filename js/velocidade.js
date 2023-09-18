$('.txtDistancia').mask('?9999');
$('.txtIdade').mask('?99');
function calcular() {

	var strDistancia = document.getElementById('txtDistancia').value;
	var strIdade = document.getElementById('txtIdade').value;
	var strSexo = '';
	var strErros = '';
	var strRetorno = '';
	
	document.getElementById('resultado').innerHTML = '';
		
	if (testarRegExp(strDistancia, '[0-9]') == false) {
		strErros = strErros + '<p>Preencha a <i>dist&acirc;ncia</i> corretamente</p>';
	} 
	
	if (testarRegExp(strIdade, '[0-9]') == false) {
		strErros = strErros + '<p>Preencha a <i>idade</i> corretamente</p>';
	}

	if (document.getElementsByName('radSexo')[0].checked == false && document.getElementsByName('radSexo')[1].checked == false) {
		strErros = strErros + '<p>Informe o <i>sexo</i></p>';
	}
	
	if (document.getElementsByName('radSexo')[0].checked == true) {
		strSexo = 'm';
	} else {
		strSexo = 'f';
	}	
	
	if (strErros != '') {
		document.getElementById('resultado').innerHTML = '<span class="erro">' + strErros + '</span>';
	} else {
		strRetorno = executarRequest('post', 'vo2-cooper-2.asp', 'd=' + strDistancia + 
																	'&i=' + strIdade + 
																	'&s=' + strSexo);
		document.getElementById('resultado').innerHTML = strRetorno;
	}
	
	return false;
	
}
