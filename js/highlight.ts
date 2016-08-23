interface defaults{
    container:HTMLDivElement;
}

class markUp{
    root:HTMLDivElement; // 编辑器容器元素
    editor:HTMLDivElement; // 编辑器元素

    constructor(defaults:defaults){
        this.root = defaults.container;
    }
    initial(){
        this.editor = document.createElement('div');
    }
}