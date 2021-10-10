let library = [ 
    {
        title: "java",
        author: "Kamal",
        page: 100
    },

    {
        title: "css",
        author: "Jamal",
        page: 200
    },   
    {
        title: "html",
        author: "Akmal",
        page: 200
    }   

];

function searchBooks(library, title){
    for(let book of library){
        if(book.title == title){
            let result = ( book.title + ", "+ book.author + ", "+ book.page)
            return result;

        }

    }
    return "Null"

}

console.log(searchBooks(library, "java"));

// other solution https://stackoverflow.com/questions/60665107/program-does-not-enumerate-in-javascript/60665153#60665153