function displaycontent(content) {
    result.value+=content
}
function ac() {
    result.value=""
}
function eval(){
    result.value=eval(result.value)
}
function remove() {
    result.value=result.value.slice(0,-1)
}