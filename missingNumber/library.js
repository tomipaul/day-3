function findMissing(arr1, arr2) {
	var sumArray1 = 0
	var sumArray2 = 0
	for (var number of arr1) {
		sumArray1+=number;
	}
	for (var number of arr2) {
		sumArray2+=number;
	}
	if(sumArray1 > sumArray2) {
		return sumArray1-sumArray2;
	}
	else {
		return sumArray2-sumArray1;
	}
}

module.exports = findMissing;