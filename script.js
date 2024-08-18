function updatePreview() {
    const address = document.getElementById('address').value;
    const font = document.getElementById('font').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;

    const textPreview = document.getElementById('text-preview');
    textPreview.textContent = address;
    textPreview.style.fontFamily = font;
    textPreview.style.color = color;
    textPreview.style.fontSize = size + 'px';
}