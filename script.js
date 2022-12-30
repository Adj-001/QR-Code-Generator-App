const qrImg = document.getElementById("qr-code");
    function generateQr() {
        const qrImg = document.getElementById("qr-code");
        const qrUrl = document.getElementById("input").value;
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrUrl}`;            qrName.innerText = `${qrUrl}`;
        qrImg.alt = `${qrUrl} qr`;
    }