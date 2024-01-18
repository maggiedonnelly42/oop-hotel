var hotels = require('./region.json');
var readline = require('readline-sync');

class HotelApplication {
    constructor(hotels) {
        this.hotels = hotels;
    }

    listAllTowns() {
        console.log("List of all towns and hotels:");
        this.hotels.forEach(hotel => {
            console.log(`Town: ${hotel.town}, Hotel Name: ${hotel.name}`);
        });
    }

    listHotelsByRegion(region) {
        console.log(`List of hotels in ${region} Ireland:`);
        const filteredHotels = this.hotels.filter(hotel => {
            return hotel.region.toLowerCase() === region.toLowerCase();
        });

        filteredHotels.forEach(hotel => {
            console.log(`Town: ${hotel.town}, Hotel Name: ${hotel.name}`);
        });
    }
}


var answer = readline.question("Do you want to go to North or South? Not sure if you dont know. ");

// List all towns and hotels
if (answer=='notsure'){
    const hotelApp = new HotelApplication(hotels);
    hotelApp.listAllTowns();

}else {


    var hotelsRegion = readline.question("What region would you like to stay in, North or South? ");
    const hotelApp = new HotelApplication(hotels);
    hotelApp.listHotelsByRegion(hotelsRegion);

// List hotels in a specific region based on user input


}

