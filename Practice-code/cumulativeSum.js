function cumulative(arr){
    console.log("Given array: ", arr);
    const result = [];
    let sum = 0;

    // for(let i = 0; i<arr.length; i++){
    //     sum = sum + arr[i];
    //     result.push(sum);
    // }

    arr.reduce((acc, current, index) => {
        // acc set to 0, 0 + current value
        // store in result array with index bcoz reducer retuens 1 value not the array
        result[index] = acc + current;
        return result[index];
    }, 0)

    console.log("Result array: ", result);
};

const arr = [10,20,40,50,23];
cumulative(arr);

//10, 25, 45, 70, 100.