var tempSelectChar = 0;
var tempSelectEnemy = 0;
var graveyard = [];
var baseAp = 10;
var tempChar = {
    hp: 0,
    ap: 0,
    cap: 0
}
var tempEnemy = {
    hp: 0,
    ap: 0,
    cap: 0
}
var obiwan = {
    hp: 100,
    ap: 10,
    cap: 10
}
var luke = {
    hp: 100,
    ap: 10,
    cap: 10
}
var darthS = {
    hp: 100,
    ap: 10,
    cap: 10
}
var darthM = {
    hp: 100,
    ap: 10,
    cap: 10
}

main();
// main function that calls all other functions
function main() {
    reset();
    //Character Selection
    $(".character").click(function () {
        if (tempSelectChar == 0) {
            tempSelectChar = this.id;
            console.log("you = " + tempSelectChar);
            switch (tempSelectChar) {
                case "obiwan":
                    tempChar = obiwan;
                    $("#obiwan").appendTo($("#you"));
                    $("#luke").appendTo($("#enemy"));
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthS").appendTo($("#enemy"));
                    break;
                case "luke":
                    tempChar = luke;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#luke").appendTo($("#you"));
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthS").appendTo($("#enemy"));
                    break;
                case "darthM":
                    tempChar = darthM;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#luke").appendTo($("#enemy"));
                    $("#darthM").appendTo($("#you"));
                    $("#darthS").appendTo($("#enemy"));
                    break;
                case "darthS":
                    tempChar = darthS;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#luke").appendTo($("#enemy"));
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthS").appendTo($("#you"));
                    break;
            }
        }

    });

    //Enemy Selection

    $(".character").click(function () {

        if (tempSelectChar != 0 && tempSelectEnemy == 0 && this.id != tempSelectChar) {
            tempSelectEnemy = this.id;
            console.log("enemy = " + tempSelectEnemy);
            console.log("you = " + tempSelectChar);

            switch (tempSelectEnemy) {
                case "obiwan":
                    tempEnemy = obiwan;
                    $("#obiwan").appendTo($("#defend"));
                    break;
                case "luke":
                    tempEnemy = luke;
                    $("#luke").appendTo($("#defend"));
                    break;
                case "darthM":
                    tempEnemy = darthM;
                    $("#darthM").appendTo($("#defend"));
                    break;
                case "darthS":
                    tempEnemy = darthS;
                    $("#darthS").appendTo($("#defend"));
                    break;
            }
        }

    });


    //Attacking
    $("#attack").click(function () {
        console.log(tempSelectEnemy)
        console.log(tempSelectChar)
        console.log(tempChar.hp)
        console.log(tempEnemy.hp)

        if (!(tempChar.hp <= 0) && !(tempEnemy.hp <= 0)) {

            tempChar.hp -= tempEnemy.cap;

            tempEnemy.hp -= tempChar.ap;

            tempChar.ap += baseAp;

            $("#" + tempSelectChar + "hp").html(tempChar.hp);
            $("#" + tempSelectEnemy + "hp").html(tempEnemy.hp);
            $("#result").html("You attacked " + tempSelectEnemy + " for " + tempChar.ap + " damage");
            $("#result").append("<br>");
            $("#result").append(tempSelectEnemy + " attacked you for " + tempEnemy.ap + " damage");
            surviveCheck();
        }
    });


    //Survival Check
    function surviveCheck() {

        if (graveyard.length < 3 && tempChar.hp <= 0 && tempEnemy.hp <= 0) {
            $("#result").html("You have been defeated --- GAME OVER!")
            $("#reset").show();
        } else if (tempChar.hp <= 0) {
            $("#result").html("You have been defeated --- GAME OVER!")
            $("#reset").show();
        } else if (tempEnemy.hp <= 0) {
            //victory round
            //send enemy to graveyard
            $("#result").html("You have defeated " + tempSelectEnemy + ", choose another enemy to fight!")
            $("#" + tempSelectEnemy).hide();
            graveyard.push(tempSelectEnemy);


            if (graveyard.length == 3) {
                console.log(graveyard.length)
                console.log(graveyard)
                $("#result").html("You have defeated " + tempSelectEnemy + ", Congratulations on defeating everyone!")
                tempSelectEnemy = 0;
                $("#reset").show();
            } else {
                tempSelectEnemy = 0;
                $(".character").click(function () {

                    if (tempSelectChar != 0 && tempSelectEnemy == 0 && this.id != tempSelectChar) {
                        tempSelectEnemy = this.id;
                        console.log("enemy = " + tempSelectEnemy);
                        console.log("you = " + tempSelectChar);
                        switch (tempSelectEnemy) {
                            case "obiwan":
                                tempEnemy = obiwan;
                                $("#obiwan").appendTo($("#defend"));
                                break;
                            case "luke":
                                tempEnemy = luke;
                                $("#luke").appendTo($("#defend"));
                                break;
                            case "darthM":
                                tempEnemy = darthM;
                                $("#darthM").appendTo($("#defend"));
                                break;
                            case "darthS":
                                tempEnemy = darthS;
                                $("#darthS").appendTo($("#defend"));
                                break;
                        }
                    }

                });

            }
        }
        else { }

    }




    $("#reset").click(function (){ reset()} );
    
    function reset()
    {
        
        console.log("reset")
        tempSelectChar = 0;
        tempSelectEnemy = 0;
        graveyard = [];
        baseAp = 10;
        tempChar = {
            hp: 0,
            ap: 0,
            cap: 0
        }
        tempEnemy = {
            hp: 0,
            ap: 0,
            cap: 0
        }
        obiwan = {
            hp: 100,
            ap: 10,
            cap: 10
        }
        luke = {
            hp: 100,
            ap: 10,
            cap: 10
        }
        darthS = {
            hp: 100,
            ap: 10,
            cap: 10
        }
        darthM = {
            hp: 100,
            ap: 10,
            cap: 10
        }


        $("#obiwan").appendTo($(".start"));
        $("#obiwanhp").html(obiwan.hp);
        $("#obiwan").show();
        $("#luke").appendTo($(".start"));
        $("#lukehp").html(luke.hp);
        $("#luke").show();
        $("#darthS").appendTo($(".start"));
        $("#darthShp").html(darthS.hp);
        $("#darthS").show();
        $("#darthM").appendTo($(".start"));
        $("#darthMhp").html(darthM.hp);
        $("#darthM").show();

        $("#result").empty();
        $("#reset").hide();
    };






}






















