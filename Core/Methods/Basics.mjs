export function round(number, decimal_points) {
    let new_num = Math.round(number * Math.pow(10, decimal_points)) / Math.pow(10, decimal_points);

    number = toString(number);
    if (+number.charAt(decimal_points + 1) >= 5) {
        new_num += 1 / Math.pow(10, decimal_points);
    }

    return new_num;
}

export function onlyNumber(string) {
    let number = "";

    for (let ind = 0; ind < string.length; ind++) {
        if (string[ind] == "0" || string[ind] == "1" || string[ind] == "2" || string[ind] == "3" || string[ind] == "4" || string[ind] == "5" || string[ind] == "6" || string[ind] == "7" || string[ind] == "8" || string[ind] == "9") {
            number += string[ind];
        }
    }

    return +number;
}