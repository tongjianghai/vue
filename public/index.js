// var a = [1, 2]
// a.push(3)
// console.log(a);
Vue.component('hdSlide', {
    template: '<h1>houdun.com</h1>'
})

var lists = {

}

var hdNews = {
    template: "#hdNews",
    props: {
        showDelButton: {
            type: [Boolean, Number],
            default: true
        },
        lists: {
            type: Array
        },
    },
    data() {
        return {
            // news: [
            //     { title: 'cms' },
            //     { title: 'php' },
            // ]
        }
    },
    methods: {
        delNews(k) {
            this.lists.splice(k, 1);
        },
    },
}

var app = new Vue({
    el: "#hdcms",
    components: {
        hdNews
    },
    watch: {
        'field.click': function (n, o) {
            console.log(typeof (n))
        },
        'field.title': function (n, o) {
            console.log(n.length)
        }
    },
    computed: {
        // status() {
        //     if (this.type == 'all') {
        //         return this.user;
        //     } else {
        //         // return this.user.filter(function (params) {
        //         //     return params.gender == app.type;
        //         // });
        //         return this.user.filter((v) => {
        //             return v.gender == this.type;
        //         });
        //     }
        // }
    },
    methods: {
        handler() {
            console.log('php');
        },
        keyup() {
            console.log("keyup")
        },
        box() {
            console.log('box');
        },
        link() {
            console.log('links');
        },
        post(num) {
            console.log(num);
        },
        search() {
            this.comments = this.comments.filter((item) => {
                var reg = new RegExp(this.search_content, 'i');
                return reg.test(item.content);
            })
        },
        changeStatus: function (item, status) {
            item.status = status;
        },
        remove(k) {
            this.comments.splice(k, 1);
        },
        push(type) {
            var id = this.comments.length + 1;
            content = { id: id, content: this.current_content }
            switch (type) {
                case "pre":
                    this.comments.unshift(content);
                    break;
                case "end":
                    this.comments.push(content);
                    break;
            }
            this.current_content = '';
        },
        del(type) {
            switch (type) {
                case 'pre':
                    this.comments.shift();
                    break;
                case 'end':
                    this.comments.pop();
                    break;
            }
        },
        sort() {
            this.comments.sort(function (a, b) {
                return a.id - b.id;
            })
        },
        reverse() {
            this.comments.reverse();
        }
    },
    data: {
        news: [
            { title: 'cms' },
            { title: 'php' },
        ],
        type: [
            { name: 'draft', title: 'Draft' },
            { name: 'send', title: 'Send' },
        ],
        flag: [
            { name: 'hot', title: 'Hot' },
            { name: 'recommend', title: 'Recommend' },
        ],
        category: [
            { cid: 1, title: 'php' },
            { cid: 2, title: 'java' },
            { cid: 3, title: 'python' },
            { cid: 4, title: 'go' },
        ],
        field: {
            title: 'title',
            click: 100,
            url: "houdun.com",
            description: 'desc',
            type: 'draft',
            flag: [],
            cid: ''
        },
        style: {
            border: 'solid 2px red',
            height: '300px'
        },
        time: new Date(),
        search_content: '',
        current_content: '',
        comments: [
            { id: 2, content: 'houdun2' },
            { id: 4, content: 'houdun4' },
            { id: 1, content: 'houdun1' },
            { id: 3, content: 'houdun3' },
        ]
        // type: 'all',
        // user: [
        //     { name: 'name', gender: 'male' },
        //     { name: 'name', gender: 'male' },
        //     { name: 'name', gender: 'female' },
        //     { name: 'name', gender: 'male' },
        // ]
        // user: {
        //     name: 'name',
        //     age: 20,
        //     gender: 'male'
        // }
        // news: [
        //     { id: 1, title: "houdun" },
        //     { id: 2, title: "houdunwang" }
        // ],
        // lang: "php"
        // status: true
        // regType: 'mail'
        // copyright: false,
        // age: 0
        // red: 'green',
        // size: 16,
        // style: {
        //     color: 'blue'
        // },
        // hdcms: {
        //     color: 'yellow',
        //     backgroundColor: 'blue'
        // }
        // news: [
        //     { title: 'houdun', status: true },
        //     { title: 'houdun.com', status: true }
        // ],
        // hd: {
        //     color: true,
        //     font: true
        // },
        // success: 'color',
        // font: 'font'
        // data: {
        //     hd: {
        //         color: true,
        //         font: true
        //     },
        //     success: 'color',
        //     font: 'font'
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
