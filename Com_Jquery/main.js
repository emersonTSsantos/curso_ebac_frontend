$(document).ready(function() {
    const nameElement = $('#nome');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    $.ajax({
        url: 'https://api.github.com/users/emersonTSsantos',
        success: function(json) {
            nameElement.text(json.name);
            usernameElement.text(json.login);
            avatarElement.attr('src', json.avatar_url);
            followersElement.text(json.followers);
            followingElement.text(json.following);
            reposElement.text(json.public_repos);
            linkElement.attr('href', json.html_url);
        },
        error: function(xhr, status, error) {
            console.error('Houve um problema com a operação de busca:', error);
        }
    });
});