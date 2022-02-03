function displayMenu (menuNumber: number) {
    if (menuNumber == 1) {
        for (let index = 0; index < 2; index++) {
            veganReccomendation = veganCourses._pickRandom()
            game.splash(veganReccomendation)
            veganCourses.removeAt(veganCourses.indexOf(veganReccomendation))
        }
    } else if (menuNumber == 2) {
        game.splash("")
    } else if (menuNumber == 3) {
        game.splash("")
    } else {
        game.splash("Please enter a valid input!")
    }
}
let veganReccomendation = ""
let veganCourses: string[] = []
game.showLongText("Hi! Welcome to Viva la Special! We offer inclusive options for those with dietary restrictions!", DialogLayout.Bottom)
let dietaryRestriction = game.askForNumber("", 1)
veganCourses = [
"Vegan Chicken Nuggets",
"Tofu Power Bowl",
"Veggie Burger with side of fries",
"Vegan curry",
"Red leaf"
]
displayMenu(dietaryRestriction)
