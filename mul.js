
function multiply(a) {
    a = document.getElementById("num1").value;

    return function(b) {
        b = document.getElementById("num2").value;

        return function(c) {
            c = document.getElementById("num3").value;
            document.write("the product is " + a * b * c);
            
        }
        return c

    } 
    return b
}
multiply(a)(b)(c); 