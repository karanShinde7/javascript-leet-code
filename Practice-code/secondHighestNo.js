function findSecondHighest(arr){

    // Logic 1
    const secondHigh = arr.sort((a,b) => b-a);
    console.log("Second highest number using sort method: ", secondHigh[1]);

    // **** Avoided sorting the array: This improves efficiency, especially for large arrays, 
    // as sorting has a time complexity of O(n log n), whereas this method runs in O(n) time.
    // **** Used a single pass through the array: This directly finds the highest and second highest 
    // numbers in one iteration.

    let highestNo = -Infinity;
    let secondHighestNo = -Infinity;

    arr.forEach((arrEle) => {
        if(arrEle > highestNo){
            secondHighestNo = highestNo;
            highestNo = arrEle;
        } else if(arrEle > secondHighestNo && arrEle < highestNo){
            secondHighestNo = arrEle;
        }
    })

    console.log("Second highest number using for each: ", secondHighestNo)

}

const arr = [1,9,3,75,-96,20,35,85,-100];
findSecondHighest(arr)