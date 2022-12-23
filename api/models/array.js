class Array {

    dictToSortedArray(dict){
        var auxDict = Object.keys(dict).map((key) => { return [key, dict[key]] });
        auxDict.sort((first, second) => { return first[1] - second[1] });
        var array = auxDict.map((e) => { return e[0] });
        return array;
    }

    // [{array: ['test2', 'test3','test'], name: 'joao'},{array: ['test3', 'test','test2'], name: 'pedro'}]
    rankingDict(data){
        var ranking = {};
        data.forEach(element => {
            element.array.forEach(function (value, i) {
                ranking[value] = i + (ranking[value] || 0);
            });
        });
        return ranking;
    }
}

module.exports = Array;
