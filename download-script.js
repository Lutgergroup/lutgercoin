function downloadFile(filePath) {
    var link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', 'Bit-Coin.png');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
