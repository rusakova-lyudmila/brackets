module.exports = function check(str, bracketsConfig) {
  const bracketsArray = bracketsConfig.map(elem => elem.join(''));
  const strArray = str.split('');
  const resultArray = [];

  strArray.forEach(item => {
    resultArray.push(item);
    
    if (bracketsArray.includes(resultArray.slice(-2).join(''))) {      
      resultArray.splice(resultArray.length - 2, 2);      
    }
  });
  
  return (resultArray.length > 0) ? false : true;
}
