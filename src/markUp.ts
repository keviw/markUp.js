namespace markUp{
    interface defaults{
        container:HTMLDivElement;
    }

    class markUp{
        root:HTMLDivElement;

        constructor(defaults:defaults){
            this.root = defaults.container;
        }
    }
}