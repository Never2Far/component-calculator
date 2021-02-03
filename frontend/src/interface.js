

// class Interface {
//     constructor() {

//     }


// }

setTimeout(() => {

    const bandCountPicker = document.querySelector('#band-count-picker');



bandCountPicker.addEventListener('change', () => {
    // const demoComponent = null;
    let demoComponent;
    switch (parseInt(bandCountPicker.value)) {
        case 3:
             demoComponent = new Component('resistor', 2, 7, null, 1000, null, null);
            
        break;
        case 4:
             demoComponent = new Component('resistor', 2, 7, null, 1000, 5, null);
        break;
        case 5:
             demoComponent = new Component('resistor', 2, 7, 0, 100000, 5, null);
    
        break;
        case 6:
             demoComponent = new Component('resistor', 2, 7, 0, 10, 5, 20);
        break;
        default:
             demoComponent = new Component('resistor', 2, 7, null, 1000, 5, null);
            break;
    }
    console.log(demoComponent)
    console.log(demoComponent.colorCode)
    Component.drawBands(demoComponent);
})

}, 1000)