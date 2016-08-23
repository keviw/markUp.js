var highlights = function() {
    var _Editor = document.querySelector('#editor');
    var _Textarea = document.createElement('textarea');
    var _Content = document.createElement('div');
    _Textarea.style.border = "none";
    _Textarea.style.width = "1px";
    _Textarea.style.outline = "none";

    _Textarea.addEventListener('keyup', function(){
        _Content.innerHTML = this.value;
    });
    _Content.addEventListener('click', function(){
        _Textarea.focus();
    })
    _Editor.appendChild(_Content);
    _Editor.appendChild(_Textarea);
}

function editLine(){
    var _editline = document.createElement('div');
    
}

window.addEventListener('load', highlights);