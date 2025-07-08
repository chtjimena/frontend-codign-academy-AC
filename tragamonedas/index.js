const btnInit = document.getElementById('comenzar-juego');
const messageElement = document.getElementById('message');
const emoji1 = document.getElementById('emoji1');
const emoji2 = document.getElementById('emoji2');
const emoji3 = document.getElementById('emoji3');

const emojis = ["😓", "👽", "🥳", "❤️", "💩", "👾", "🍉"];
// const emojis = ["🍒", "🍋", "🍊", "🍇", "⭐", "🍉"];

btnInit.addEventListener('click', function() {
    const valueEmoji1 = obtenerEmojiAleatorio();
    const valueEmoji2 = obtenerEmojiAleatorio();
    const valueEmoji3 = obtenerEmojiAleatorio();

    emoji1.innerHTML = valueEmoji1;
    emoji2.innerText = valueEmoji2;
    emoji3.innerText = valueEmoji3;

    const result = valueEmoji1 === valueEmoji2 && valueEmoji2 === valueEmoji3;
    messageElement.innerText = result ? 'Felicidades, Ganasteis' : 'Lo siento, Perdiste'
    messageElement.className = result ? 'text-success' : 'text-danger';
});

function obtenerEmojiAleatorio() {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
}