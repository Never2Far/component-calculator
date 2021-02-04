setTimeout(() => {


    const bandCountPicker = document.querySelector('#band-count-picker');
    const digit1Col = document.querySelector('#digit1-col');

    

    const digit2Col = document.querySelector('#digit2-col');

    
    const digit3Col = document.querySelector('#digit3-col');
    digit3Col.style.display = 'none';
    
    
    const multiplierCol = document.querySelector('#multiplier-col');
    
    const toleranceCol = document.querySelector('#tolerance-col');
    
    const tempCoefCol = document.querySelector('#temp-coef-col');
   
    tempCoefCol.style.display = 'none';







    bandCountPicker.addEventListener('change', () => {
        // const pickerColumns = document.querySelectorAll('.color-picker-colomn');
    digit1Col.style.display = 'block';
    digit2Col.style.display = 'block';
    digit3Col.style.display = 'none';
    multiplierCol.style.display = 'block';
    tempCoefCol.style.display = 'none';
    toleranceCol.style.display = 'none';
    let demoComponent;
    switch (parseInt(bandCountPicker.value)) {
        case 3:
             demoComponent = new Component('resistor', 4, 7, null, 1000000, null, null);
        break;
        case 4:
             demoComponent = new Component('resistor', 4, 7, null, 1000000, .5, null);
             toleranceCol.style.display = 'block';

        break;
        case 5:
             demoComponent = new Component('resistor', 4, 7, 9, 1000000, .5, null);
             toleranceCol.style.display = 'block';
             digit3Col.style.display = 'block';
        break;
        case 6:
             demoComponent = new Component('resistor', 4, 7, 9, 1000000, .5, 250);
             toleranceCol.style.display = 'block';
             digit3Col.style.display = 'block';
             tempCoefCol.style.display = 'block';
        break;
        default:
             demoComponent = new Component('resistor', 4, 7, null, 1000000, .5, null);
             toleranceCol.style.display = 'block';
            break;
    }
//     console.log(demoComponent)
//     console.log(demoComponent.colorCode)
    Component.drawBands(demoComponent);
})

fillColomn(digit1Col);
    fillColomn(digit2Col);
    fillColomn(digit3Col);
    fillColomn(multiplierCol);
    fillColomn(toleranceCol);
    fillColomn(tempCoefCol);
    compFromPicker();


function fillColomn(column) {
     const colorChoices = [...window.colorObjs];
     const columnID = column.getAttribute('id');
     // let h4 = document.createElement('h4');
     // h4.innerText = columnID;
     // column.appendChild(h4);
     switch (columnID) {
          case 'digit1-col':
          case 'digit2-col':
          case 'digit3-col':
               colorChoices.pop();
               colorChoices.pop();

          break;
          case 'temp-coef-col':
               colorChoices.pop();
               colorChoices.pop();
               colorChoices.pop();

          break;
          case 'tolerance-col':
               colorChoices.splice(9, 1);
               colorChoices.shift();

               break;
          default:
               break;
     }
     for (let i = 0; i < (colorChoices.length); i++) {
          let color = colorChoices[i];
          const input = document.createElement('input')
          const label = document.createElement('label')
               input.setAttribute('type', 'radio');
               input.setAttribute('id', `${columnID}-${color.name}`)
               input.setAttribute('value', color.name)
               input.setAttribute('name', `${columnID}-picker`)
               label.setAttribute('for', color.name)
               label.innerText = color.name
               // label.setAttribute('class', `${color.name}-label`)
               label.style.backgroundColor = Color.standardize_color(color.name)
               if (color.name == 'black' || color.name == 'brown') {
                    label.style.color = 'white';
               }
               if (color.name == 'white') {
                    label.style.border = 'dashed';
                    label.style.borderColor = 'black';
                    label.style.borderWidth = '1px';
               }
               switch (columnID) {
                    case 'digit1-col':
                         color.name == 'yellow' ? input.checked = true : false
                    break;
                         case 'digit2-col':
                              color.name == 'violet' ? input.checked = true : false
                         break;
                              case 'digit3-col':
                                   color.name == 'white' ? input.checked = true : false
                              break;
                                   case 'multiplier-col':
                                        color.name == 'blue' ? input.checked = true : false
                                   break;
                                        case 'tolerance-col':
                                             color.name == 'green' ? input.checked = true : false
                                        break;
                                             case 'temp-coef-col':
                                                  color.name == 'black' ? input.checked = true : false
                                             break;
               
                    default:
                         break;
               }
               input.addEventListener('change', () => {
                    compFromPicker();
                    // const cols = document.querySelectorAll('.color-picker-column')
                    // const newCode = [];
                    // for (let i = 0; i < cols.length; i++) {
                    //      const col = cols[i];
                    //      if (col.style.display != 'none') {
                    //      const radios = col.querySelectorAll('input[type=radio]')
                    //      for (let n = 0; n < radios.length; n++) {
                    //           const radio = radios[n];
                    //           if (radio.checked) {
                    //                newCode.push(radio.value)
                    //                break;
                    //           }
                    //      }
                    // }
                    // }
                    // const updatedComp = new Component();
                    // updatedComp.colorCode = newCode;
                    // Component.drawBands(updatedComp);
               })
               column.appendChild(input);
               column.appendChild(label);
               const br = document.createElement('br')
               column.appendChild(br)
     }


     // switch (columnID) {
     //      case 'digit1-col':
     //      case 'digit2-col':
     //      case 'digit3-col':
     //           let g = column.querySelector('#red')
     //           column.removeChild()
     //           // for (let i = 0; i < (COLORS.length - 2); i++) {
     //           //      const color = COLORS[i];
     //           //      const input = document.createElement('input')
     //           //      const label = document.createElement('label')
     //           //           input.setAttribute('type', 'radio');
     //           //           input.setAttribute('id', color.name)
     //           //           input.setAttribute('value', color.name)
     //           //           input.setAttribute('name', `${columnID}-picker`)
     //           //           color.name == 'red' ? input.checked = true : false
     //           //           label.setAttribute('for', color.name)
     //           //           label.innerText = color.name
     //           //           label.setAttribute('class', `${color.name}-label`)
     //           //           column.appendChild(input);
     //           //           column.appendChild(label);
     //           //           const br = document.createElement('br')
     //           //           column.appendChild(br)
     //           // }
     //           break;
     // case 'multiplier-col':

     //      default:
     //           break;
     // }    
}

// function codeFromPicker() {

// }

function compFromPicker() {
     const cols = document.querySelectorAll('.color-picker-column')
     console.log(cols)
     const newCode = [];
     for (let i = 0; i < cols.length; i++) {
          const col = cols[i];
          if (col.style.display != 'none') {
          const radios = col.querySelectorAll('input[type=radio]')
          for (let n = 0; n < radios.length; n++) {
               const radio = radios[n];
               if (radio.checked) {
                    newCode.push(radio.value)
                    break;
               }
          }
     }
     }
     const updatedComp = new Component();
     updatedComp.colorCode = newCode;
     console.log(updatedComp)
     Component.drawBands(updatedComp);
}

}, 2000)


