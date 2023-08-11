function sayHello( name, city, state ) {
    //takes a person's name as array, city and state as strings
    //ex) ['John', 'Smith'], 'Phoenix', 'Arizona'
    //This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

const solution = sayHello(['Stephen', 'Kim'], 'Los Angeles', 'California')
document.querySelector('h2').innerText = sayHello(['Stephen', 'Kim'], 'Los Angeles', 'California')
console.log(solution)