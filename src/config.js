exports.fetchBooks = async () => {
    fetch('http://localhost:8000/books')
    .then(results => results.json())
    .then(data => {
        this.setState({
            books:data,
        })
    })
}