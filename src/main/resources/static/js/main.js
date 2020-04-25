var messageApi = Vue.resource('/message{/id}');


Vue.component('message-raw',{
    props: ['message'],
    template:'<div><i>({{ message.id }})</i> {{ message.text }}</div>'
});

Vue.component('messages-list', {
    props: ['messages'],
    template: '<div><message-raw v-for="message in messages" :key="message.id" :message="message"/></div>',
    created: function () {
        messageApi.get().then(result =>
            result.json().then(data =>
                data.forEach(message => this.messages.push(message))
            )
        )
    }
});

var app = new Vue({
    el: '#app',
    template: '<messages-list :messages="messages"/>',
    data: {
        messages: []
    }
});