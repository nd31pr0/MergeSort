function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, mid));
    const rightHalf = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare and merge the two halves
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in left or right, add them
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
