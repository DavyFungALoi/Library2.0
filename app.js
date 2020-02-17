let library = []


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

function addBookToLibrary(book) {
for (i=0; i<library.length;i++)
{

 let bookinfo = document.createElement("div")
 let removebutton = document.createElement("button")
 removebutton.setAttribute('book-remove-button',[i])
 removebutton.textContent = "Remove"
 bookinfo.classList.add('book-overview' + [i])
 bookinfo.textContent =library[i].author + " " + library[i].title + " " + library[i].pages + " " + library[i].readStatus
 document.getElementById("bookcontainer").appendChild(bookinfo)
 document.getElementById("bookcontainer").appendChild(removebutton)
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

