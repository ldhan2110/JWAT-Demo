//keyof, typeof words
type People = {
    firstName: string;
    lastName: string;
}

const person: People = {
    firstName: "Le",
    lastName: "An"
}

type AnotherPeople = typeof person // This will return Person
type keys = keyof People // This will return 'firstName' | 'lastName'
