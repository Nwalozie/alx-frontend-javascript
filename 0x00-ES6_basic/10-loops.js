export default function appendToEachArrayValue(array, appendString) {
    let list = [] 
    let listItem = ''
    for (let value of array) {
        listItem = appendString + value;
        list.push(listItem)
    }
    return list;
  }