/**
 * مقادیر دراپ داون شهرها را با توجه به استان انتخاب شده به روز می کند
 */
function updateCities() {
    let provincesElement = document.getElementById('provinces')

    let selectedProvince = provincesElement.value;

    let cities = getCities(selectedProvince);
    let citiesElement = document.getElementById('cities');
    console.info(citiesElement.childNodes);
    citiesElement.childNodes.forEach( (node, index, array) => {
        array[index].remove();
        // node.remove();
    })

    cities.forEach(function(value, index, array){
        let optionElement = document.createElement('option');
        optionElement.value = value;
        optionElement.innerText = value;
        citiesElement.appendChild(optionElement);
    });

}


/**
 * شهرها را برای استان داده شده بر می گرداند
 * @param {String} province 
 */
function getCities (province) {

    var cities = [];
    switch(province){
        case 'hamedan':
            cities.push(
                "همدان",
                "نهاوند",
                "ملایر",
                "فامنین",
                "قهاوند",
                "لالجین"
            )
            break;
        case 'tehran':
            cities.push(
                "تهران",
                "ورامین",
                "تجریش"
            );
           break;

    }

    return cities;
}
// let hamedanCiti = [
//     "hamedan",
//     "famenin",
//     "nahavand",
//     "hamedan",
// ]
// let tehranCiti = [
//     "tehran",
//     "varamin",
//     "tajraish",

// ]
// let provinces = [
//     "tehran",
//     "hamedan"

// ]
// let checkcityItem = document.querySelector('#cities')
// let checkprovincesItem = document.querySelector('#provinces')
// function updateCities(){
// if(checkprovincesItem.value == "tehran"){
// tehranCiti.forEach(element => {
//     let newCityElement = document.createElement('option')
//     newCityElement.innerHTML = element
//     checkcityItem.append(newCityElement)
// });
// }else if(checkprovincesItem.value === "hamedan"){
//     hamedanCiti.forEach(element => {
//         let newCityElement = document.createElement('option')
//         newCityElement.innerHTML = element
//         checkcityItem.append(newCityElement)
//     });  
// }
// console.log(checkprovincesItem.value)
// }