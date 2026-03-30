class Housing{
    constructor(id,name, adress, city, price, size){
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.city = city,
        this.price = price;
        this.size = size;
    }
}

const fs = require("fs")
const path = "./json/Housing.json"
const data = fs.readFileSync(path)
housings = JSON.parse(data)


function getHousingIndexById(id){
    for(i in housings){
            if(housings[i].id == id){
                return i
            }
        }
    return null;
}

function getAllHousingBy(property,value){
    let data = []
    for(i in housings){
            if(housings[i][property] == value){
                data.push(housings[i]);
            }
        }
    return data;
}

function sortHousingsBy(property) {  
  return housings.sort((a, b) => {
    return a[property] >= b[property]
      ? 1
      : -1
  })
}

//Get
function fetchHousings() {
    try {
        console.log("fetchHousings");
        return housings;
    } catch (error) {
        console.error(error);
 } }

 function fetchHousingById(id) {
    try {
        console.log("fetchHousingById : " + id);
        const data = getHousingIndexById(id);
        if(data != null)
            return housings[data]
        return "Housing not found";
    } catch (error) {
        console.error(error);
 } }

 function fetchHousingBy(property,value) {
    try {
        console.log("fetchHousingBy : " + property);
        const data = getAllHousingBy(property,value);
        return data;
    } catch (error) {
        console.error(error);
 } }

 function fetchHousingSortedBy(property) {
    try {
        console.log("fetchHousingSortedBy : " + property);
        return sortHousingsBy(property);
    } catch (error) {
        console.error(error);
 } }

 //Post
 function createHousing(newHousing) {
    try {
        console.log("createHousing : " + newHousing);
        const id = housings.length + 1
        const log = stringToHousing(newHousing,id)
        if(log != -1){
            housings.push(log);
            fs.writeFileSync(path,JSON.stringify(housings)) //Update the json file
        }
        else
            return "Housing not created - Not all parameter (name,adresse,city,price,size)"
        return "New Housing created";
        
    } catch (error) {
        console.error(error);
 } }

 //Delete
function deleteHousing(id) {
    try {
        console.log("deleteHousing : " + id);
        const index = getHousingIndexById(id);
        if(data != null){
            housings.splice(index,1);
            fs.writeFileSync(path,JSON.stringify(housings)) //Update the json file
            return "Element deleted"
        }
        return "Element not found";

    } catch (error) {
        console.error(error);
 } }

  //Put
 function editHousing(newHousing, id) {
    try {
        console.log("editHousing : " + newHousing);
        const log = stringToHousing(newHousing,id);
        if(log != -1){
            index = getHousingIndexById(id);
            if(index != null){
                housings[index] = log
                fs.writeFileSync(path,JSON.stringify(housings)) //Update the json file
            }
            else
                return "Housing not edited - Housing not found";
        }   
        else
            return "Housing not edited - Not all parameter (id,name,adresse,city,price,size)"
        return "Housing edited";
        
    } catch (error) {
        console.error(error);
 } }

 function stringToHousing(chaine,id){
    const data = chaine.split(',')
    if(data.length !=5)
        return -1
    return new Housing(id,data[0], data[1], data[2], data[3],data[4])
 }


 module.exports = {fetchHousings, fetchHousingById, fetchHousingSortedBy, fetchHousingBy, createHousing, deleteHousing,editHousing };