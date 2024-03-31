document.write("問1<br><br>");

for (var star = 1; star <= 5; star++) {
    document.write("★");
}


document.write("<br><br>問2<br><br>");

for (var star1 = 1; star1 <= 2; star1++) {
    for (var star2 = 1; star2 <= 3; star2++) {
        document.write("★");
    }
    document.write("<br>");
}


document.write("<br><br>問3<br><br>");

for (var star1 = 1; star1 <= 2; star1++) {
    for (var star2 = 1; star2 <= 5; star2++) {
        document.write("☆");
    }
    document.write("<br>");
}


document.write("<br><br>問4<br><br>");

for (var star1 = 1; star1 <= 4; star1++) {
    for (var star2 = 1; star2 <= 5; star2++) {
        document.write("★");
    }
    document.write("<br>");
}


document.write("<br><br>問5<br><br>");

for (var star1 = 1; star1 <= 4; star1++) {
    for (var star2 = 1; star2 <= 3; star2++) {
        document.write("★");
    }
    document.write("<br>");
}


document.write("<br><br>問6<br><br>");

for (var star1 = 1; star1 <= 3; star1++) {
    for (var star2 = 1; star2 <= 3; star2++) {
        if(star2 % 2 == 1){
            document.write("★");
        } else {
            document.write("☆");
        }
    }
    document.write("<br>");
}


document.write("<br><br>問7<br><br>");

for (var star1 = 1; star1 <= 4; star1++) {
    for (var star2 = 1; star2 <= 5; star2++) {
        if(star2 % 2 == 1){
            document.write("★");
        } else {
            document.write("☆");
        }
    }
    document.write("<br>");
}


document.write("<br><br>問8<br><br>");

for (var star1 = 1; star1 <= 5; star1++) {
    for (var star2 = 1; star2 <= star1; star2++) {
        document.write("★");
    }
    document.write("<br>");
}