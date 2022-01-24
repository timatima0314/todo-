Vue.createApp({
    data() {
        return {
            items: ["朝ごはんたべる", "歯を磨く"],
            todo: "",
        };
    },
    methods: {
        todoAddition: function () {
            this.items.push(this.todo);
        },
        todoDelete: function (index) {
            this.items.splice(index, 1);
            console.log(index);
        }
    },
}).mount('#app')