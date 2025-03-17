document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followerElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    async function fetchGitHubData() {
        try {
            const response = await fetch('https://api.github.com/users/ItaloVerreschiDev');
            if (!response.ok) {
                throw new Error('Não foi possível obter os dados do usuário.');
            }
            const data = await response.json();

            nameElement.innerText = data.name || 'Nome não disponível';
            usernameElement.innerText = data.login || 'Usuário não disponível';
            avatarElement.src = data.avatar_url || '100x100.png';
            followingElement.innerText = data.following || 0;
            followerElement.innerText = data.followers || 0;
            reposElement.innerText = data.public_repos || 0;
            linkElement.href = data.html_url || '#';

        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            nameElement.innerText = 'Erro ao carregar dados';
            usernameElement.innerText = 'Erro';
            avatarElement.src = '100x100.png';
            followingElement.innerText = '0';
            followerElement.innerText = '0';
            reposElement.innerText = '0';
            linkElement.href = '#';
        }
    }

    fetchGitHubData();
});
