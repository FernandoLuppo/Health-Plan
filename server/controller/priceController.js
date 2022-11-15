const priceController = {

    //  calcAge
    calcAge: (age) => {
        if(age < 18) {
            return "group1"
        }else if (age >= 18 && age <= 41) {
            return "group2"
        } else {
            return "group3"
        }
    },

    //  calcPrice
    calcPrice: (age, firstPrice, secondPrice, thirdPrice) => {
        if(age == "group1") {
            return firstPrice
        }else if(age == "group2") {
            return secondPrice
        } else {
            return thirdPrice
        }
    }
}

module.exports = priceController