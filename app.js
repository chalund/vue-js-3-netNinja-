const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      books: [
        { title: "name of the Wind", author: "Patrick Rothfuss", img: "assets/1.jpg", isFav: true },
        { title: "The Wise Man's Fear", author: "Patrick Rothfuss", img: "assets/2.jpg", isFav: false    },
        { title: "The final Empire", author: "Brandon Sanderson", img: "assets/3.jpg", isFav: true  },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    toggleFav(book) {
      book.isFav = !book.isFav;
    }
  },
  computed: {
    filteredBooks() {
        return this.books.filter((book) => book.isFav);
    }
  }
});

app.mount("#app");
