document.getElementById('playlist-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const playlistName = document.getElementById('playlist-name').value.trim();
    const playlistDesc = document.getElementById('playlist-desc').value.trim();

    if (playlistName && playlistDesc) {
        alert(`Playlist "${playlistName}" criada com sucesso!`);
        document.getElementById('playlist-name').value = '';
        document.getElementById('playlist-desc').value = '';
    } else {
        alert('Por favor, preencha todos os campos da playlist.');
    }
});

document.getElementById('add-song-btn').addEventListener('click', function () {
    const songName = document.getElementById('song-name').value.trim();
    const songArtist = document.getElementById('song-artist').value.trim();

    if (songName && songArtist) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${songName} - ${songArtist}
            <button class="remove-song-btn">Remover</button>
        `;
        document.getElementById('playlist-music-list').appendChild(li);

        document.getElementById('song-name').value = '';
        document.getElementById('song-artist').value = '';
    } else {
        alert('Por favor, preencha o nome da música e o artista.');
    }
});

document.getElementById('playlist-music-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-song-btn')) {
        e.target.parentElement.remove();
    }
});
