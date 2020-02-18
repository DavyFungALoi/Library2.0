let library = [
 ]


function submitbook(book) {
  
let formAuthor = document.getElementById("author").value
let formTitle = document.getElementById("title").value
let formPages = document.getElementById("pages").value
let newBook = new createBook (formAuthor, formTitle, formPages)
library.push(newBook)
addBookToLibrary(book)
closeModal(modal)
}

class createBook {
    constructor(author, title, pages) {
        this._author = author;
        this._title = title;
        this._pages = pages;
        this._isRead = false
        }
        get author () {
          return this._author
    }
        get title () {
        return this._title
    }
        get pages () {
        return this._pages
    }
        get readStatus () {
        return this._isRead
      }
        set readStatus (value){
        this._isRead = value
     }
        togglereadStatus() {
        this.readStatus = !this.readStatus
        }
            
}

const addBookToLibrary = (book) => {
    document.getElementById("bookcontainer").innerHTML=""
library.forEach((createBook, index) => {
    let bookinfo = document.createElement("div")
    bookinfo.classList.add('book-overview')
    bookinfo.textContent =createBook.author + " " + createBook.title + " " + createBook.pages + " " + createBook.readStatus
    document.getElementById("bookcontainer").appendChild(bookinfo)
    
    let togglebutton = document.createElement("button")
    togglebutton.classList.add("book-toggle-button" );
    togglebutton.setAttribute('data-toggle-button', index)
    togglebutton.textContent = "toggle"
    togglebutton.addEventListener( "click", clickBook );
    document.getElementById("bookcontainer").appendChild(togglebutton)

    let removebutton = document.createElement("button")
    removebutton.classList.add("book-remove-button" );
    removebutton.setAttribute('data-remove-button', index)
    removebutton.textContent = "Remove"
    removebutton.addEventListener( "click", clickBook );
    document.getElementById("bookcontainer").appendChild(removebutton)
    
})
}

function clickBook (click) {
    if(click.target.className == "book-remove-button") {
        const indexNumber = click.target.dataset.indexNumber;

        library.splice(indexNumber,1)
        console.log(library)
        addBookToLibrary()
      }
      else if (click.target.className == "book-toggle-button") {
        const indexNumber = click.target.dataset.indexNumber;
        const bookNumber = library[indexNumber]
        bookNumber.togglereadStatus() 
        addBookToLibrary()
      }
}

/*Modal JS*/
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
         const modal = document.querySelector(button.dataset.modalTarget)
         document.getElementById("author").value = ""
         document.getElementById("title").value = ""
         document.getElementById("pages").value = ""
         openModal(modal)

    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
         const modal = button.closest('.modal')
         closeModal(modal)
    })
})
function openModal(modal) {
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

