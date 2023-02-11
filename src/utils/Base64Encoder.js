async function Base64Encoder(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        // console.log(reader.result);
        return reader.result;
    };
    reader.onerror = function (err) {
        // console.log(err.message);
    };
}

export default Base64Encoder;
