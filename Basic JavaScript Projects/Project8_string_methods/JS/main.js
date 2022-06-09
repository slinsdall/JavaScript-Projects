function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var sentence ="All work and no play makes Johnny a dull boy.";
    var Section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

let str = "Hello World!";
let result = str.toUpperCase();
document.getElementByID("demo").innerHTML = result;

let text = "This is Blue";
let position = text.search("Blue");
document.getElementById("search").innerHTML = position;

function string_Method() {
    var M = 182;
    document.getElementById("Numbers_to_string").innerHTML = M.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

let num = 5.56789;
let n = num.toFixed();
document.getElementById("fixed").innerHTML = n;

let string = "This is value method.";
let result= string.valueOf();
document.getElementById("value").innerHTML = result;