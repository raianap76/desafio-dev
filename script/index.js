/**Pegar o id do botão que redireciona para a pagina do blog
 * PEgar o valor inserido no input do email
 * usar o localStorage ,para usar esse valor inserido no  input email 
 * salvar em uma variavel para usar pagina blog.html
 * Usar o window.location.href para redirecionar o usuario para a pagina blog.html
 */

document.getElementById('btn').addEventListener("click", function() {
    let email =  document.getElementById('email').value;
  
    let name = email.split("@");
    /**
     * Passar o nome para maiusculas, e remover numeros do nome.
     */
    let nameFinaly = name[0].toUpperCase().replace(/[^a-z]/gi,'');
    localStorage.setItem('name', nameFinaly);

    window.location.href = "blog.html"

  });