document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/emersonTSsantos', true);
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const json = JSON.parse(xhr.responseText);
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        } else {
            console.error('Houve um problema com a operação de busca:', xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error('Erro de rede durante a requisição.');
    };

    xhr.send();
});
