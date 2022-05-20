const noOfOccurencesOfEachCharacter = (arr) => {
    if (arr === undefined || arr === null || arr.length === 0) {
        return;
    }
    
    let occurenceOfEachCharacter = new Map;
    
    arr.forEach((element) => {
        if (occurenceOfEachCharacter.has(element)) {
            occurenceOfEachCharacter.set(element, occurenceOfEachCharacter.get(element) + 1);
        } else {
            occurenceOfEachCharacter.set(element, 1);
        }
    });
    
    const arrOfOccurenceOfEachCharacter = [...occurenceOfEachCharacter];
    
    const sortedArrOfOccurenceOfEachCharacter = arrOfOccurenceOfEachCharacter.sort(
        (firstElement, secondElement) => {
            if (firstElement[1] !== secondElement[1]) {
                return secondElement[1] - firstElement[1];
            }
            return firstElement[0] - secondElement[0];
        });
    
    sortedArrOfOccurenceOfEachCharacter.forEach((element) => {
        console.log(element[0]);
    })
}

let ar = [3, 3, 4, 4, 7, 8];
noOfOccurencesOfEachCharacter(ar);