document.write("問1<br><br>");

//円の面積を計算する関数
//円の面積 = 半径 × 半径 × 3.14

function menseki(hankei) {
    return "半径" + hankei + "cmの円の面積は" 
           + ( hankei * hankei * 3.14 ) + "cm2<br>";
}

//円の面積を計算した結果をブラウザに出力する

document.write( menseki(5) );
document.write( menseki(7) );
document.write( menseki(10) );


document.write("<br><br>問2<br><br>");

//グループの合計金額を計算する関数
//合計金額 = (大人人数 × 500円) + (子供人数 × 200円)

function totalPrice(groupName, otona, kodomo) {
    return groupName + "グループの合計金額は" 
           + ( otona * 500 + kodomo * 200 ) + "円です。<br>";
}

//グループの合計金額を計算した結果を出力する

document.write( totalPrice("A", 2, 4) );
document.write( totalPrice("B", 1, 5) );
document.write( totalPrice("C", 3, 7) );   
