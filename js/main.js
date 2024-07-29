// 96. Berilgan massiv ichidagi birinchi unik elementni toping.

function firstUnique(arr = []) {
    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))[0]
}
// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5]));






// 97. Berilgan satr ichidagi barcha raqamlarni ajratib, tartiblang.

function extractAndSortNumbers(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            arr.push(+str[i])
        }
    }
    return arr.sort((a, b) => a - b)
}

// console.log(extractAndSortNumbers("a3c2d4b1"));





// 98. Berilgan ob'ekt ichidagi barcha qiymatlar son bo'lsa, ularni ikki barobar oshiring.


function doubleNumericValues(Obj_4) {
    let newObj = {};
    for (const key in Obj_4) {
        if (typeof Obj_4[key] == 'number') {
            newObj[key] = Obj_4[key] * 2;
        } else {
            newObj[key] = doubleNumericValues(Obj_4[key])
        }
    }
    return newObj
}

// Test case
const Obj_4 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    }
};
// console.log(doubleNumericValues(Obj_4));
// Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }





// 99. Berilgan ob'ekt ichidagi barcha kalitlarni camelCase formatida qaytaring.
function toCamelCase(obj2) {
    if (Array.isArray(obj2)) {
        return obj2.map(toCamelCase);
    } else if (typeof obj2 === 'object' && obj2 !== null) {
        let newObj = {};
        for (let key in obj2) {

            let newKey = key.replace(/([-_][a-z])/gi, (match) => {
                return match.toUpperCase().replace('-', '').replace('_', '');
            });

            newObj[newKey] = toCamelCase(obj2[key]);
        }
        return newObj;
    }
    return obj2;
}

// Test case
const obj2 = {
    'first_key': 1,
    'second-key': {
        'third_key': 2
    }
};

// console.log(toCamelCase(obj2));
// Output: { firstKey: 1, secondKey: { thirdKey: 2 } }




// 100. Berilgan ob'ekt ichidagi barcha stringlarni berilgan funksiya yordamida o'zgartiring.

function transformStrings(obj3, transformFunc) {
    if (Array.isArray(obj3)) {
        return obj3.map(item => transformStrings(item, transformFunc));
    } else if (typeof obj3 === 'object' && obj3 !== null) {
        let newObj = {};
        for (let key in obj3) {
            if (typeof obj3[key] === 'string') {
                newObj[key] = transformFunc(obj3[key]);
            } else if (typeof obj3[key] === 'object') {
                newObj[key] = transformStrings(obj3[key], transformFunc);
            } else {
                newObj[key] = obj3[key];
            }
        }
        return newObj;
    }
    return obj3;
}

// Test case
const obj3 = {
    a: "hello",
    b: {
        c: "world",
        d: {
            e: "test"
        }
    }
};

// console.log(transformStrings(obj3, str => str.toUpperCase()));
// Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }





// 101. Berilgan ob'ekt ichidagi barcha kalitlarni sorted tartibda qaytaring.

function sortKeys(object) {
    let sortedKeys = Object.keys(object).sort();
    let newObject = {};

    for (const key of sortedKeys) {
        newObject[key] = object[key];
    }

    return newObject;
}

const object = {
    b: 2,
    a: 1,
    c: 3
};

// console.log(sortKeys(object)); // Output: { a: 1, b: 2, c: 3 }






// // 102. Berilgan massiv ichidagi elementlarni qatorga birlashtiring, faqat takrorlanmaydigan elementlarni saqlang.

function uniqueConcat(arr) {
    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item)).join("")
}
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 





// 103. Berilgan massiv ichidagi o'xshash elementlarni toping.

function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== arr.lastIndexOf(item) && arr.indexOf(item) === index)
}
// console.log(findDuplicates([1, 2, 3, 1, 2, 4]));
