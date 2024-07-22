const { time } = require("console");

// Define your Book class here:
class Book {
    constructor (title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discard = discarded;

    }

    checkout(uses =1) {
        this.timesCheckedOut += uses;
    }
}
// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor (title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super (title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    dispose(currentYear){
        if (currentYear-this.copyright > 5) {
            this.discarded = "Yes";
        }
    }
}

class Novel extends Book {
    constructor (title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super (title, author, copyright, isbn, pages, timesCheckedOut, discarded) 

        }
        dispose() {
            if (this.timesCheckedOut > 100) {
                this.discarded = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPredjudice = new Novel('Pride and Predjudice', 'Jane Austen', 1813, '1111111111111' , 432, 32, 'No' )
let topSecretShuttleBuildingManual = new Manual ('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No')
// Code exercises 4 & 5 here:
topSecretShuttleBuildingManual.dispose(2024)
prideAndPredjudice.checkout(5)
prideAndPredjudice.dispose()
console.log(prideAndPredjudice)
console.log(topSecretShuttleBuildingManual)