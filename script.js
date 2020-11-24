let films =[
    {
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Parasite",
        year: "2019",
        rating: "8.6",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        comments: []
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Queen's Gambit ",
        year: "2020",
        rating: "8.8",
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        comments: [{
            name: "John",
            comment: "So boring, i fall asleep to it and hibernated through whole winter"
        }]
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Joker ",
        year: "2019",
        rating: "8.5",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        comments: [
            {
                name: "Marry",
                comment: "Put on a happy face :)"
            },
            {
                name: "Batman",
                comment: "My parents was not impressed with this"
            },
        ]
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        title: "The Godfather",
        year: "1972",
        rating: "9.2",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        comments: []
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        title: "Pulp Fiction",
        year: "1994",
        rating: "8.9",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        comments: []
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Shining",
        year: "1980",
        rating: "8.4",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [
            {name: "Jane",
            comment: "Soundtrack is epic"
        }]
    },
]
let mainDiv=document.getElementById("mainDiv")
let i=0;
let checkedComments=false
let loopFor=true
let commentsNumber;
let cardId;
let nameComMentor= "";
let comMentorComment = "";

init()

function init(){
    mainDiv = document.getElementById("mainDiv")
    mainDiv.innerHtml=""
    if(loopFor) {
        for (const film of films) {
            let card = document.createElement("div")
            card.classList.add("divCard")
            card.setAttribute("id", `${i}`)
            card.addEventListener("click", showComments)
            mainDiv.appendChild(card)

            let img = document.createElement("img")
            img.src = film.image
            img.classList.add("floatLeft", "img1")
            card.appendChild(img)

            let title = document.createElement("div")
            title.classList.add("m-5")
            title.innerHTML = "<b>Title:</b> " + film.title
            card.appendChild(title)

            let year = document.createElement("div")
            year.classList.add("m-5")
            year.innerHTML = "<b>Year: </b> " + film.year
            card.appendChild(year)

            let rating = document.createElement("div")
            rating.classList.add("m-5")
            rating.innerHTML = "<b>Rating: </b>" + film.rating
            card.appendChild(rating)

            let description = document.createElement("div")
            description.classList.add("m-5")
            description.innerHTML = "<b>Description: </b>" + film.description
            card.appendChild(description)

            let stars = document.createElement("img")
            stars.classList.add("img2")
            stars.src = "https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png"
            card.appendChild(stars)
            //addStars(film.rating)
            i++;
        }
        loopFor=false;
    }
}

function showComments(event){

    cardId=+event.path[1].id
    console.log(cardId)
    if(!checkedComments){
        mainDiv.style.width="50%"
        let commentDiv=document.createElement("div")
        commentDiv.style.width="50%"
        commentDiv.classList.add("mainDivBrother", "m-5", "b-10", "p-10")
        commentDiv.classList.add("displayFlex", "flexDirectionC")
        document.body.appendChild(commentDiv)
        document.body.classList.add("displayFlex")
        checkedComments=true;

        let filmTitle=document.createElement("div")
        filmTitle.innerHTML=`<b>Comments for a film with title: ${films[cardId].title}</b>`
        commentDiv.appendChild(filmTitle)


        commentsNumber=films[+(event.path[1].id)].comments.length
        if(commentsNumber == 0){
            commentDiv.innerHTML=`<b>Comments for a film with title:  
                ${films[cardId].title}</b><br> No comments available<br>`
        } else {
            let div;

            for (let j = 0; j < commentsNumber; j++) {
                div=document.createElement("div")
                div.classList.add("topPadding")
                div.innerHTML=`<b>${films[cardId].comments[j].name} wrote:</b><br>
                ${films[cardId].comments[j].comment}`
                commentDiv.appendChild(div)
            }
        }
        console.log(films[cardId].comments)
    } else {
        let commentDiv=document.getElementsByClassName("mainDivBrother")
        commentDiv[0].innerHTML=""
        commentsNumber=films[cardId].comments.length

        let filmTitle=document.createElement("div")
        filmTitle.innerHTML=`<b>Comments for a film with title: ${films[cardId].title}</b>`
        commentDiv[0].appendChild(filmTitle)

        if(commentsNumber == 0){
            commentDiv[0].innerHTML=`<b>Comments for a film with title:  
                ${films[cardId].title}</b><br> No comments available<br>`
        } else {
            let div;
            for (let j = 0; j < commentsNumber; j++) {
                div=document.createElement("div")
                div.classList.add("topPadding")
                div.innerHTML=`<b>${films[cardId].comments[j].name} wrote:</b><br>
                ${films[cardId].comments[j].comment}`
                commentDiv[0].appendChild(div)
            }
        }
        console.log(films[cardId].comments)
    }
    addInput()

}

function addInput(){
    let commentDiv=document.getElementsByClassName("mainDivBrother")
    let name=document.createElement("input")
    name.placeholder=`enter your name`
    name.addEventListener("input", takeInput)
    commentDiv[0].appendChild(name)

    let comment=document.createElement("textarea")
    comment.placeholder=`enter your comment`
    comment.addEventListener("input", takeComment)
    commentDiv[0].appendChild(comment)

    let button=document.createElement("button")
    button.innerText="Add Comment"
    button.addEventListener("click", addComment)
    commentDiv[0].appendChild(button)

    let button1=document.createElement("button")
    button1.innerText="Close comments"
    button1.addEventListener("click", closeWindow)
    commentDiv[0].appendChild(button1)
}

function takeInput(event){
    nameComMentor=event.target.value
    //console.log(nameComMentor)
}
function takeComment(event){
    comMentorComment=event.target.value
    //console.log(comMentorComment)
}

function addComment() {
    if (nameComMentor === "") {
        alert("Name is not entered. Please enter your name!")
    } else {
        if (comMentorComment === ""){
            alert("Comment is not entered. Please enter the comment!")
        } else {
            films[cardId].comments.push({name: `${nameComMentor}`,
                comment: `${comMentorComment}`})
            comMentorComment = ""
            nameComMentor = ""
            document.getElementsByTagName("input")[0].remove()
            document.getElementsByTagName("textarea")[0].remove()
            document.getElementsByTagName("button")[0].remove()
            alert(`If you want to see added comment you should click 
            on ${films[cardId].title} card once again!`)
            document.getElementsByTagName("button")[0].remove()
            addInput()
     }
        console.log(films[cardId].comments)
    }
}

 function closeWindow(event){

     let a=document.getElementsByClassName("mainDivBrother")
     a[0].innerHTML=""
     a[0].remove()
     mainDiv.style.width="100%"
     mainDiv.innerHtml=""
     i=0;
     checkedComments=false;
     console.log(b)
 }