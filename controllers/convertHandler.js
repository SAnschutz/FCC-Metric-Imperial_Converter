/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = 1;
    
    if (!/^[0-9]/.test(input)){
        return result;
    }
    
    for (let i=0; i<input.length; i++){
      let char = input[i]
      if (/^[A-Za-z]+$/.test(char)){
        result = input.slice(0, i)
        break;
      }
    }    

    
    
    if (result.includes('/')) {
      let splitResult = result.split('/')
      if (splitResult.length > 2){
        return result = 'invalid number'
      }
      result = splitResult[0] / splitResult [1]
    }
        
    return parseFloat(result)
  };
  
  this.getUnit = function(input) {
    let validUnits = ['gal', 'l', 'km', 'mi', 'kg', 'lbs']
    let result;
    
    for (let i = 0; i<input.length; i++){
      let char = input[i]
      if (/^[A-Za-z]/.test(char)){
        result = input.slice(i, input.length).toLowerCase();
        break;
      }
    }
    
    if (!validUnits.includes(result)){
      result = 'invalid unit'
    }
      
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let returnUnit;
    
    initUnit = initUnit.toLowerCase()
    
    switch (initUnit){
      case 'gal':
        returnUnit = 'L';
        break;
      case 'l':
        returnUnit = 'gal';
        break;
      case 'lbs':
        returnUnit = 'kg';
        break;
      case 'kg':
        returnUnit = 'lbs';
        break;
      case 'mi':
        returnUnit = 'km';
        break;
      case 'km':
        returnUnit = 'mi';
        break;
      default:
        return 'error';
    }
    return returnUnit;
  };

  
  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case 'l':
        result = 'liters';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg': 
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = unit;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {

    const acceptedUnits = ['l', 'gal', 'lbs', 'kg', 'mi', 'km'];
    const invalidUnit = (!acceptedUnits.includes(initUnit.toLowerCase()));
    const invalidNum = (isNaN(initNum) || initNum < 0)
    
    if (invalidNum && invalidUnit) {
      return 'invalid number and unit'
    } else if (invalidNum){
      return 'invalid number'
    } else if (invalidUnit){
      return 'invalid input'
    }
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.609344;
    let returnNum;
    
    switch (initUnit.toLowerCase()){
      case 'gal':
        returnNum = initNum * galToL;
        break;
      case 'l':
        returnNum = initNum / galToL;
        break;
      case 'lbs':
        returnNum = initNum * lbsToKg;
        break;
      case 'kg':
        returnNum = initNum / lbsToKg;
        break;
      case 'mi':
        returnNum = initNum * miToKm;
        break;
      case 'km':
        returnNum = initNum / miToKm;
        break;
      default:
        return 'error';
    }
    
    return Math.round(returnNum * 100000)/100000

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    if (isNaN(returnNum)) {
        return `${returnNum}`
        }
    switch(initUnit) {
      case 'gal':
        return `${initNum} gallons converts to ${returnNum} liters`
        break;
      case 'l':
        return `${initNum} liters converts to ${returnNum} gallons`;
        break;
      case 'lbs':
        return `${initNum} pounds converts to ${returnNum} kilograms`
        break;
      case 'kg':
        return `${initNum} kilograms converts to ${returnNum} pounds`
        break;
      case 'mi':
        return `${initNum} miles converts to ${returnNum} kilometers`
        break;
      case 'km':
        return `${initNum} kilometers converts to ${returnNum} miles`
        break;
      default:
        return 'error';
    }        
    // '3.1 miles converts to 5.00002 kilometers'
  
  };
  
}

module.exports = ConvertHandler;
