


function EnviarDados(){

//pegando os valores do campo
var nome = document.getElementById('name').value;
var email = document.getElementById('email').value;



//validando o campo email 
 var obj = eval("document.forms[0].email");
	  var txt = obj.value;
	  if ((txt.length != 0) && ((txt.indexOf("@") < 1) || (txt.indexOf('.') < 7)))
	  {
	    alert('E-mail inválido favor digitar novamente !!!');
		obj.focus();
		return false;
	  }

//mensagem de erro caso esteja vazio o campo
if(nome == ""){
$("#feedback-name").css('display','block');
}

if(email == ""){
$("#feedback-email").css('display','block');
}


//testar campos se está vazio

if(nome == "" || email == ""){
	alert("Campo vazio favor preencher os dados!");
		return false;
}else{

		$.ajax({
			method: 'POST',
			url: 'http://avanade.gama.academy/api/process_applications',
			dataType: 'json',
			headers: { EMAIL: email }, // coloque seu email que usou para se inscrever aqui!
			contentType: 'application/json',
			data: JSON.stringify({ process_application: { name: $('#name').val(), email: $('#email').val() } }),
			success: function(json) { 
				alert("apply-success");
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert("apply-error");
			}
		});

		//função para limpar campos
		limpa();
	}

}


function limpa(){

	var nome = document.getElementById('name').value = "";
	var email = document.getElementById('email').value = "";

	$("#feedback-name").css('display','none');
	$("#feedback-email").css('display','none');
}


