class Hamburger {
    get sizeBurger() {
        return this.size ? this.size : [0,0]; 
    };
    set sizeBurger(list){
        this.size = list;
    };
    get ingredientBurger () {
        return this.ingredient ? this.ingredient : [0,0]; 
    };
    set ingredientBurger(list){
        this.ingredient = list;
    };
    get seasoningBurger () {
        return this.seasoning ? this.seasoning : [0,0]; 
    };
    set seasoningBurger(list){
        this.seasoning = list;
    };
    get mayoBurger () {
        return this.mayo ? this.mayo : [0,0]; 
    };
    set mayoBurger(list){
        this.mayo = list;
    };
}

const burger = confirm('Do you want a hamburger?')

if(burger){
    let newBurger = new Hamburger();
    do {
        sizeHamburger = prompt('Which size you would like? (small/big)').toLowerCase().replaceAll(' ', '');
    } while (sizeHamburger !== 'small' && sizeHamburger !== 'big' )
    sizeHamburger === 'small' ? newBurger.sizeBurger = [5,20] : newBurger.sizeBurger = [10,40];
    
    filling = confirm('Do you want filling?')

    if(filling){
        do {
            fillingHamburger = prompt('Which filling woul you like? (cheese/salad/potato)').toLowerCase().replaceAll(' ', '');
            switch(fillingHamburger){
                case 'cheese':
                newBurger.ingredientBurger = [1, 20]
                break;
                case 'salad':
                newBurger.ingredientBurger = [2, 5]
                break;
                case 'potato':
                newBurger.ingredientBurger = [1.5, 10]
                break;
            }  
        } while (fillingHamburger !== 'cheese' && fillingHamburger !== 'salad' && fillingHamburger !== 'potato')
    }

    additive = confirm('Would you like additives?')

    if(additive){
        mayo = confirm('Add mayo to the burger?') ? newBurger.mayoBurger = [2,5] : newBurger.mayoBurger = [0,0]
        seasoning = confirm('Add seasoning?') ? newBurger.seasoningBurger = [1.5, 0] : newBurger.seasoningBurger = [0,0]
    }

    let price = 0;
    let calories = 0;

    for(let key in newBurger){
        price += newBurger[key][0];
        calories += newBurger[key][1];
    };
    
    alert(`Your habmburger price is: ${price}$ It has ${calories} of nutritional value.`);
}