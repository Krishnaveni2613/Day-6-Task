class person {
    constructor(name, birthyear, email = "bvrn@gmail.com", native, qualification){
this.name = name;
this.birthyear= birthyear;
this.email = email;
this.native = native;
this.qualification = qualification;
    } 

}

const veni = new person("veni",1991,"bvrn@gmail.com","chennai","B.Ed");
console.log(veni);

//2. WRITE A CLASS TO CALCULATE THE UBER PRICE
class UberPriceCalculator {

    static BASE_FARE = 2.0;
    
    static PER_MILE_RATE = 1.5;
    
    static PER_MINUTE_RATE = 0.5;
    
    constructor(distance, duration) {
    
    this.distance = distance;
    
    this.duration = duration;
    
    }
    
    calculateFare() {
    
    const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;
    
    const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;
    
    const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;
    
    return totalFare;
    
    }
    
    getDistance() {
    
    return this.distance;
    
    }
    
    setDistance(distance) {
    
    this.distance = distance;
    
    }
    
    getDuration() {
    
    return this.duration;
    
    }
    
    setDuration(duration) {
    
    this.duration = duration;
    
    }
    
    toString() {
    
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
    
    }
    
    }
    
    const calculator = new UberPriceCalculator(5.5, 15);
    
    console.log(calculator.toString());
    
    const fare = calculator.calculateFare();
    
    console.log(`Total Fare: $${fare.toFixed(2)}`);

    //QNO 1class Movie {

constructor(title, studio, rating = “PG”) {

    this.title = title;
    
    this.studio = studio;
    
    this.rating = rating;
    
    }
    
    static getPG(movies) {
    
    return movies.filter(movie => movie.rating === “PG”);
    
    }
    
    }
    
    const casinoRoyale = new Movie(“Casino Royale”, “Eon Productions”, “PG-13”);
    
    console.log(“Title:”, casinoRoyale.title);
    
    console.log(“Studio:”, casinoRoyale.studio);
    
    console.log(“Rating:”, casinoRoyale.rating);
    
    const moviesArray = [
    
    new Movie(“Movie1”, “Studio1”, “PG”),
    
    new Movie(“Movie2”, “Studio2”, “PG-13”),
    
    new Movie(“Movie3”, “Studio3”, “R”),
    
    ];
    
    const pgMovies = Movie.getPG(moviesArray);
    
    console.log(“PG Rated Movies:”);
    
    pgMovies.forEach(movie => {
    
    console.log(“Title:”, movie.title, “| Studio:”, movie.studio, “| Rating:”, movie.rating);
    
    });
    
    class Person {
    
    constructor(name, age, occupation) {
    
    this.name = name;
    
    this.age = age;
    
    this.occupation = occupation;
    
    }
    
    }
    
    const person = new Person(“John Doe”, 30, “Software Engineer”);
    
    console.log(“Name:”, person.name);
    
    console.log(“Age:”, person.age);
    
    console.log(“Occupation:”, person.occupation);
    
    Qn:2
    
    Circle
    -radius: double = 1.0
    -color: String = “red”
    +Circle()
    +Circle (radius:double)
    +Circle (radius: double, color:String)
    +getRadius(): double
    +setRadius (radius: double):void
    +getColor ():String
    +setColor (color: String): void
    +toString():String “Circle[radius =?, color =?]”
    +getArea (): double
    +getCircumference(): double

