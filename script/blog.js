/**
 * Inserir o conteudo armazenado no localStorage na div onde esta o id user
 */
window.onload = function() { 
    document.getElementById('user').textContent = `Olá ${localStorage.name}!`;
    
};