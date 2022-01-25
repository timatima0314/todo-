Vue.createApp({
    data() {
        return {
            items: [],
            todo: "",
        };
    },
    methods: {
        todoAddition: function () {
            this.items.push(this.todo);
            // ﾛｰｶﾙストレージにセット
            localStorage.setItem('mydata', JSON.stringify(this.items));

        },
        todoDelete: function (index) {
            this.items.splice(index, 1);
            // 一度ストレージの値を取り出す
            let storageItem = JSON.parse(localStorage.getItem('mydata'));
            storageItem.splice(index, 1);
            // 削除したのちもう一度セット
            localStorage.setItem('mydata', JSON.stringify(storageItem));
        },
    },
    created: function () {
        const mydata = localStorage.getItem('mydata');
        if (mydata) {
            this.items = JSON.parse(mydata);
        }
    },

}).mount('#app')