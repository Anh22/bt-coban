function mat(kt){
    document.getElementById('caculator').value+=kt;
}
function col(){
    document.getElementById('caculator').value = eval(document.getElementById('caculator').value)
}

function reset(){
    document.getElementById('caculator').value = '';
}