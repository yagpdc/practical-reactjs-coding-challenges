export default  function copy(e?: any) {
    if (e)
    e.preventDefault();

    let copyText = document.getElementById("myInput") as HTMLInputElement;
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}