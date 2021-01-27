let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(const cars in statistics){
    if('r' == (cars.toLowerCase()).charAt(0)){
        console.log(statistics[cars]);
    }
    else if(1 == (statistics[cars]%2)){
        console.log(statistics[cars]);
    }
}
