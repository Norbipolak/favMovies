let myFavMovies = [
    {
        title: "Lost Bullet",
        year: 2020,
        rating: 6.3,
        description: "A small time delinquent, turned police mechanic for a go fast task force, is forced to defend his innocence when his mentor is killed by dirty cop",
        directors: "Guillaume Pierret",
        writers: ["Guillaume Pierret", "Alban Lenoir", "Kamel Guemra"],
        stars: ["Alban Lenoir", "Nicolas Duvauchelle", "Ramzy Bedia"],
        genres: ["Action", "Crime", "Thriller"],
    },
    {
        title: "Godfather",
        year: 1972,
        rating: 9.2,
        description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger",
        directors: "Francis Ford Coppola",
        writers: ["Mario Puzo", "Francis Ford Coppola"],
        stars: ["Marlon Brando", "Al Pacino", "James Caan"],
        genres: ["Crime", "Drama"], 
    },
    {
        title: "Belle and Sebastian",
        year: 2013,
        rating: 6.9,
        description: "A six-year-old boy and his dog look to foil a Nazi effort to capture French Resistance fighters",
        directors: "Nicolas Vanier",
        writers: ["Juliette Sales", "Fabien Suarez", "Nicolas Vanier"],
        stars: ["Felix Bossuet", "Tcheky Karyo", "Margaux Chatelier"],
        genres: ["Adventure", "Drama", "Family"],
    }, 
    {
        title: "Mafioso",
        year: 1962,
        rating: 7.6,
        description: "When a good-natured factory supervisor living in Milan with his Northern wife returns to his native Sicily, a decades'-old oath forces him to fulfill a nightmarish obligation.",
        directors: "Alberto Lattuada",
        writers: ["Rafael Azcona", "Bruno Caruso", "Marco Ferreri"],
        stars: ["Alberto Sordi", "Norma Bengell", "Gabriella Conti"],
        genres: ["Comedy", "Crime", "Drama"],
    }
]
console.log(myFavMovies)

console.log(myFavMovies.length)

console.log(myFavMovies[0].title)
console.log(myFavMovies[1].year)
console.log(myFavMovies[2].rating)
console.log(myFavMovies[3].description)
 
let textForFirstMovieTitle = "The title of the first movie is: "
let textForSecondMovieYear = "The release year of the second movie is: "
let textForThirdMovieRating = "The IMDB rating of the third movie is: "
let textForFourthMovieDescription = "The short description of the fourth movie is: "

console.log(textForFirstMovieTitle + myFavMovies[0].title)
console.log(textForSecondMovieYear + myFavMovies[1].year)
console.log(textForThirdMovieRating + myFavMovies[2].rating)
console.log(textForFourthMovieDescription + myFavMovies[3].description)

console.log(myFavMovies[0].directors)
console.log(myFavMovies[1].writers[0])
console.log(myFavMovies[2].stars[0])
console.log(myFavMovies[3].genres[0])

let firstDirector = "The lead director of the first movie is: "
let secondWriter = "The lead writer of the second movie is: "
let thirdStar = "The lead star of the third movie is: "
let fourthGenre = "The main genre of the fourth movie is: " 

console.log(firstDirector + myFavMovies[0].directors)
console.log(secondWriter + myFavMovies[1].writers[0])
console.log(thirdStar + myFavMovies[2].stars[0])
console.log(fourthGenre + myFavMovies[3].genres[0])

// Average Rating

let sumAverage = myFavMovies[0].rating + myFavMovies[1].rating + myFavMovies[2].rating + myFavMovies[3].rating
let averageRating = sumAverage / myFavMovies.length

console.log(averageRating)

//Average Age

let thisYear = 2023
let ageFirstMovie = thisYear - myFavMovies[0].year
let ageSecondMovie = thisYear - myFavMovies[1].year
let ageThirdMovie = thisYear - myFavMovies[2].year
let ageFourthMovie = thisYear - myFavMovies[3].year

let sumAge = ageFirstMovie + ageSecondMovie + ageThirdMovie + ageFourthMovie
let averageAge = sumAge / myFavMovies.length

console.log(averageAge)








