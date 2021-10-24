// alert("Hanzala Ahmed");

// string value
// var name = "hanzla Ahmed";
// number 
// var age = 20;

// alert(name);
// alert(age);

// addition of name and wirte variable name in camelCase
// var firstName = "Hanzala" ;
// var last_namE = "Ahmed" ;

// alert(firstName + last_namE);

// Math Expressions 
// var num1 = 200;
// var num2 = 500;
// var add = num1 % num2;
// var sub = num1 - num2;
// var mult = num1 * num2;
// var div = num1 / num2;

// alert(add);
// alert(sub);
// alert(mult);
// alert(div);

// document.write
// var num1 = 79;
// var num2 = 60;

// document.write(num1 + num2);

// post/pre increment or post/pre decrement 
// var num = 15;
// var new_num = ++num //Pre increment
// var new_num = num++ //post increment

// var num = 15;
// var new_num = --num; //Pre decrement
// var new_num = num--; //post decrement
// var a = 20;

// var result = num-- - --num - num + ++num + --num;
//             15 - 13 - 13 + 14 + 13 
// alert(result);



var name = prompt("Enter Your Name");
var fatherName = prompt("Enter Your Father's Name");
var schoolName = prompt("Enter Your School/College Name");
var Class = prompt("Enter Your Class");
var totalMarks = prompt("Enter Total Marks");
var eng = parseInt(prompt("Marks obtained in Eng"));
var math = parseInt(prompt("Marks obtained in Math"));
var phy = parseInt(prompt("Marks obtained in Physics"));
var isl = parseInt(prompt("Marks obtained in Isl"));
var urdu = parseInt(prompt("Marks obtained in Urdu"));
var obtained = eng + math + phy + isl + urdu ;
var per = (obtained/totalMarks) * 100 ;


document.write(" <strong> Name: </strong> ", name);
document.write(" <br> <br> <strong> Father's Name: </strong> ", fatherName);
document.write(" <br> <br> <strong> School/College Name: </strong> ", schoolName);
document.write(" <br> <br> <strong> Class: </strong> ", Class);
document.write(" <br> <br> <strong> Marks obtained in Eng: </strong> ", eng);
document.write(" <br> <br> <strong> Marks obtained in Math: </strong> ", math);
document.write(" <br> <br> <strong> Marks obtained in Physics: </strong> ", phy);
document.write(" <br> <br> <strong> Marks obtained in Isl: </strong> ", isl);
document.write(" <br> <br> <strong> Marks obtained in Urdu: </strong> ", urdu);
document.write(" <br> <br> <strong> Total Marks: </strong> ", totalMarks);
document.write(" <br> <br> <strong> Percentage: </strong> ", per);

