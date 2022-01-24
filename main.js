Vue.createApp({
    data() {
        return {
            items:[],
            todo: "",
        };
    },
    methods: {
        todoAddition: function () {
            this.items.push(this.todo);
            localStorage.setItem('mydata',JSON.stringify(this.items));
        },
        todoDelete: function (index) {
            this.items.splice(index, 1);
            console.log(index);
        }
    },
}).mount('#app')