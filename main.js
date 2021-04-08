var app = new Vue({
  el: '#root',
  data: {
    emails: [],
    colors: ['blue', 'orange', 'pink', 'grey', 'green'],
  },
  mounted () {
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.emails.push(response.data.response);
        });
    }
  },
  methods: {
    pickColor: function () {
      return Math.floor(Math.random() * (4 + 1));
    }
  }
});
