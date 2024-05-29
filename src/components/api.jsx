const qrServerUrl = 'https://api.qrserver.com/v1/create-qr-code/';

export const generateQRCode = (qrData, qrSize) => {
    const qrImageUrl = `${qrServerUrl}?data=${encodeURIComponent(qrData)}&size=${qrSize}`;
    return qrImageUrl;
};