/*
Script para a pagina blog com o seguinte objetivo:
 - Após a página carregar, buscar a variavel nome em localStorage e popular o valor do texto do campo nome_blog
*/

window.onload = function() { 
    document.getElementById('user').textContent = "Olá " + localStorage.name+"!";
    
};