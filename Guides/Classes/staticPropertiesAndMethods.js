// Simple example
class User {
  static staticMethod() {
    alert(this === User)
  }
}

// The result is true
User.staticMethod()

// Example with static method
class Article {
  constructor(title, date) {
    this.title = title
    this.date = date
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date
  }
}

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
]

articles.sort(Article.compare)

alert(articles[0].title)

// Static properties
class Article {
  static publisher = "Ilya Kantor"
}

alert(Article.publisher)
