import axios from 'axios'

const searchObj = {
    getBooks: function(data){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data}`)
    }
}

export default searchObj