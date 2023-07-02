

var dados = []

// função que recebe os dados  
function PopulaTabela() {
 if (Array.isArray(dados)) { 

  localStorage.setItem("__dados__", JSON.stringify(dados))
  
    $("#tblDados tbody").html("") // codigo JQUERY
    dados.forEach(function (item){
        //Template String     
        $("#tblDados tbody").append(`<tr> 
        <td> ${item.ID}<\td>
        <td> ${item.Nome}<\td>
        <td> ${item.Sobrenome}<\td>
        <td> ${item.DtNascimento}<\td>
        <td> ${item.Formacao}<\td>           
        <\tr>`)
    })
 }

}

//Função que lê os dados e insere na tabela 
    $(function () {  
  dados = JSON.parse(localStorage.getItem("__dados__"))
  if (dados) {
    PopulaTabela()
   }
    //evento click do botão salvar      
   $("#bntSalvar").click(function(){
    alert('a')
       let Nome = $("txtNome").val()
    let Sobrenome = $("txtSobrenome").val()
    let DtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", { timeZone: "UTC" })
    let Formacao = $("txtFormacao").val()
    let registro = {}

     registro.Nome = Nome
     registro.Sobrenome = Sobrenome
     registro.DtNascimento = DtNascimento
     registro.Formacao = Formacao
     registro.ID = dados.length + 1
     dados.push(registro)

     alert("Registro salvo com sucesso!") //alerta
     $("#modalRegistro").modal("hide")//fecha a modal
     //Limpando os campos 
     $("#txtNome").val("")
     $("#txtSobrenome").val("")
     $("#txtDtNascimento").val("")
     $("#txtFormacao").val("")
     PopulaTabela()

   })
   

}) 