export async function downloadImage(url = String, fileName = String) {
    let fetchResponse = await fetch(url);
    let blob = await fetchResponse.blob();
    let blobobj = window.URL.createObjectURL(blob);
    downloadBlob(blobobj, fileName);
}
export function downloadBlob(blob = Blob, fileName = String) {
    let a = document.createElement("a");
    a.href = blob;
    a.download = fileName;
    a.click();
    a.remove();
}
export async function copyImage(src = String) {
    let fetchResponse = await fetch(src);
    let blob = await fetchResponse.blob();
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
}