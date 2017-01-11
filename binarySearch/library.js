Array.prototype.toTwenty = function() {
	for(var i=1; i<=20; i++) {
		this.push(i);
	}
	return this;
}

Array.prototype.toForty = function() {
	for(var i=2; i<=40; i+=2) {
		this.push(i);
	}
	return this;
}

Array.prototype.toOneThousand = function() {
	for(var i=10; i<=1000; i+=10) {
		this.push(i);
	}
	return this;
}

Array.prototype.search = function(num) {
	var countIndexLength = {};
	var count = 0;
	var startIndex = 0;
	var endIndex = this.length-1;

	while(startIndex <= endIndex){
		if (this[startIndex]==num) {
			return {count: count, index:startIndex, length: this.length}
		}
		if(this[endIndex]==num) {
			return {count: count, index:endIndex, length: this.length}
		}
		var midPoint = Math.floor((startIndex+endIndex)/2);
		if (this[midPoint] == num) {
			return {count: count, index: midPoint, length: this.length};
		}
		else if (this[midPoint] > num) {
			endIndex = midPoint-1;
		}
		else {
			startIndex = midPoint+1;
		}
		count+=1;
	}
	return {count: count, index: -1, length: this.length};
}

