function newYearDays() {
    const kanji = ['永','元','天','治','応','正','長','文','和','安','延','暦','寛','徳','保','承','仁','嘉','平','康','宝','久','建','慶','享','弘','貞','明','禄','大','亀','寿','万','化','観','喜','神','政','中','養','雲','護','乾','感','吉','亨','興','景','衡','国','斉','至','字','朱','授','勝','昌','昭','祥','成','泰','鳥','禎','同','銅','白','武','福','霊','老','祚','雉'];

    const nenngou = kanji[Math.floor(Math.random() * kanji.length)] + kanji[Math.floor(Math.random() * kanji.length)];

    document.getElementById("output").innerHTML = nenngou;
}