class Logement{
    constructor(id,name, adresse, city, price, size){
        this.id = id;
        this.name = name;
        this.adresse = adresse;
        this.city = city,
        this.price = price;
        this.size = size;
    }
}

const fs = require("fs")
const path = "./json/location.json"
const data = fs.readFileSync(path)
locations = JSON.parse(data)

function getLocationIndexById(id){
    for(i in locations){
            if(locations[i].id == id){
                return i
            }
        }
    return null;
}

function getLocationIndexByCity(city){
    for(i in locations){
            if(locations[i].city == city){
                return i
            }
        }
    return null;
}

function sortLocationsBy(property) {  
  return locations.sort((a, b) => {
    return a[property] >= b[property]
      ? 1
      : -1
  })
}

//Get
function fetchLocations() {
    try {
        console.log("fetchLocations");
        return locations;
    } catch (error) {
        console.error(error);
 } }

 function fetchLocationById(id) {
    try {
        console.log("fetchLocationById : " + id);
        const data = getLocationIndexById(id);
        if(data != null)
            return locations[data]
        return "Location not found";
    } catch (error) {
        console.error(error);
 } }

 function fetchLocationByCity(city) {
    try {
        console.log("fetchLocationByCity : " + city);
        const data = getLocationIndexByCity(city);
        if(data != null)
            return locations[data]
        return "Location not found";
    } catch (error) {
        console.error(error);
 } }

 function fetchLocationSortedBy(property) {
    try {
        console.log("fetchLocationByCity : " + city);
        const data = getLocationIndexByCity(city);
        if(data != null)
            return locations[data]
        return "Location not found";
    } catch (error) {
        console.error(error);
 } }

 //Post
 function createLocation(nvLogement) {
    try {
        console.log("createLocation : " + nvLogement);
        const id = locations.length + 1
        const log = stringToLocation(nvLogement,id)
        if(log != -1){
            locations.push(log);
            fs.writeFileSync(path,JSON.stringify(locations)) //Update the json file
        }
        else
            return "Location not created - Not all parameter (name,adresse,city,price,size)"
        return "New location created";
        
    } catch (error) {
        console.error(error);
 } }

 //Delete
function deleteLocation(id) {
    try {
        console.log("deleteLocation : " + id);
        const index = getLocationIndexById(id);
        if(data != null){
            locations.splice(index,1);
            fs.writeFileSync(path,JSON.stringify(locations)) //Update the json file
            return "Element deleted"
        }
        return "Element not found";

    } catch (error) {
        console.error(error);
 } }

  //Put
 function editLocation(nvLogement, id) {
    try {
        console.log("editLocation : " + nvLogement);
        const log = stringToLocation(nvLogement,id);
        if(log != -1){
            index = getLocationIndexById(id);
            if(index != null){
                locations[index] = log
                fs.writeFileSync(path,JSON.stringify(locations)) //Update the json file
            }
            else
                return "Location not edited - Location not found";
        }   
        else
            return "Location not edited - Not all parameter (id,name,adresse,city,price,size)"
        return "Location edited";
        
    } catch (error) {
        console.error(error);
 } }

 function stringToLocation(chaine,id){
    const data = chaine.split(',')
    if(data.length !=5)
        return -1
    return new Logement(id,data[0], data[1], data[2], data[3],data[4])
 }


 module.exports = {fetchLocations, fetchLocationById, fetchLocationByCity, createLocation, deleteLocation,editLocation };