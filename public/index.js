
var app = new Vue({
    el: "#hdcms",
    data: {
        hd: {
            color: true,
            font: true
        },
        success: 'color',
        font: 'font'
        // hd: 'red',
        // hd: 'houdunren'
        // hd: '<h1 style="color:red">houdunren.com</h1>'
        // n: 1
        // n1: 0,
        // n2: 0,
        // word: '',
        // result: ''
    },
    // computed: {
    //     sum: function () {
    //         return this.n1 * 1 + this.n2 * 1;
    //     }
    // },
    // watch: {
    //     word: _.debounce(function (newV, oldV) {
    //         console.log(newV + "=>" + oldV);
    //         axios.get('http://127.0.0.1:9501?word=' + newV).then(function (response) {
    //             console.log(response);
    //             app.result = response.data;
    //         })
    //     }, 3000)
    // }
})


// var obj = { a: 1 }

// Object.freeze(obj)
// vm.a == obj.a
// vm.a = 2
// obj.a
// obj.a = 3
// vm.a

// var vm = new Vue({
//     el: '#app-4',
//     data: obj,
//     created: function () {
//         console.log("a: " + this.a);
//     }
// })

// Vue.component('todo-item', {
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
// })
// var app3 = new Vue({
//     el: "#app-3",
//     data: {
//         todos: [
//             { "text": "text" },
//             { "text": "text" }
//         ]
//     }
// })

// var app = new Vue({
//     el: "#app",
//     data: {
//         message: "index vue",
//         items: [
//             { 'id': 0, 'text': 'text' },
//             { 'id': 1, 'text': 'text' },
//             { 'id': 2, 'text': 'text' }
//         ]
//     },
//     methods: {
//         reverseMessage: function () {
//             this.message = this.message.split('').reverse().join('');
//         }
//     }
// })
//app.message = "message";

// var app2 = new Vue({
//     el: "#app-2",
//     data: {
//         message: new Date().toLocaleString(),
//         seen: true
//     }
// })