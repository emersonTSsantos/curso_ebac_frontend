document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    try {
        fetch('https://api.github.com/users/emersonTSsantos')
            .then(function(res) {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(function(json) {
                nameElement.innerText = json.name;
                usernameElement.innerText = json.login;
                avatarElement.src = json.avatar_url;
                followersElement.innerText = json.followers;
                followingElement.innerText = json.following;
                reposElement.innerText = json.public_repos;
                linkElement.href = json.html_url;
            })
            .catch(function(error) {
                console.error('There was a problem with the fetch operation:', error);
            });
    } catch (error) {
        console.error('An error occurred during the fetch operation:', error);
    }
});
