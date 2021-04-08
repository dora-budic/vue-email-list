var app = new Vue({
  el: '#root',
  data: {
  },
  methods: {
    email: function () {
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            document.getElementById('email-list').innerHTML += `<li>${response.data.response}</li>`;
          });
      }
    }
  }
});
