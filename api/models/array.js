class Array {

    dictToSortedArray(dict){
        var auxDict = Object.keys(dict).map((key) => { return [key, dict[key]] });
        auxDict.sort((first, second) => { return first[1] - second[1] });
        var array = auxDict.map((e) => { return e[0] });
        return array;
    }

    rankingDict(data){
        var ranking = {};
        data.forEach(element => {
            element.array.forEach(function (value, i) {
                ranking[value] = i + (ranking[value] || 0);
            });
        });
        return ranking;
    }

    mergeCount(arr, l, m, r){
        var left = [];
            
        for(var i = l; i < m + 1; i++){
            left.push(arr[i]); 
        }

        var right = [];
    
        for(var i = m + 1; i < r + 1; i++){
            right.push(arr[i]);
        }
            
        var i = 0, j = 0, k = l, swaps = 0;
        while (i < left.length && j < right.length){
            if (left[i] <= right[j]){
                arr[k++] = left[i++];
            }
            else{
                arr[k++] = right[j++];
                swaps += (m + 1) - (l + i);
            }
        }
        while (i < left.length){
            arr[k++] = left[i++];
        }
            
        while (j < right.length){
            arr[k++] = right[j++];
        }
        return swaps;
    }

    mergeSortAndCount(arr, l, r){
        var count = 0;
        if (l < r){
            var m = Math.floor((l + r) / 2);
            count += this.mergeSortAndCount(arr, l, m);
            count += this.mergeSortAndCount(arr, m + 1, r);
            count += this.mergeCount(arr, l, m, r);
        }
        return count;
    }

    arrayToRankingValue(array, ranking){
        var rankingValue = [];
        array.forEach(element => {
            rankingValue.push(ranking.indexOf(element))
        });
        return rankingValue;
    }

    countInversions(array, ranking){
        var arr = this.arrayToRankingValue(array, ranking);
        const inversions = this.mergeSortAndCount(arr, 0, arr.length - 1)
        return inversions;
    }

    createResponse(bodyData){
        const ranking = this.dictToSortedArray(this.rankingDict(bodyData));
        var data = [];
        bodyData.forEach(element => {
            var inversions = this.countInversions(element.array, ranking);
            data.push({
                inversions: inversions,
                name: element.name
            });
        });
        return {
            ranking: ranking,
            data: data
        }
    }
}

module.exports = Array;
