/*
join(?ID): 0: 不選或沒加選 1: 已加選
*/
let Mydrop01 = {
    drop01: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') )window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Japan_amount') )Class_Japan.amount_current = parseInt(localStorage.getItem('Class_Japan_amount'));

        if (this.drop01 == 1 && window.StudentA.score - 3 >= 8 ) {
            this.drop01 = 0;
            My01.join01=0;
            My_Class_Static[0][0] = 0;
            My_Class_Static[0][1] = 0;
            My_Class_Static[3][7] = 0;
            Class_Japan.amount_current -= 1;
            window.StudentA.score -= 3;
            window.StudentA.full();
            document.getElementById("dr01").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join01', My01.join01.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Japan_amount' , Class_Japan.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop01");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        // if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));
        // alert(My_Class_Static[0][5]);
        const drop01FlagValue = localStorage.getItem('drop01');//取join01的value
        if( My01.join01 == 1 ){
            this.drop01=1;
            if(document.getElementById("dr01") != null ) document.getElementById("dr01").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class01_name") != null ) document.getElementById("Drop_Class01_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop01") != null ) document.getElementById("Drop01").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop01FlagValue != null) {
                this.drop01 = parseInt(drop01FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop01=0;
            if(document.getElementById("dr01") != null ) document.getElementById("dr01").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class01_name") != null ) document.getElementById("Drop_Class01_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop01") != null ) document.getElementById("Drop01").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop01 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop01.init();//整理後初始化

let Mydrop02 = {
    drop02: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Korea_amount') )Class_Korea.amount_current = parseInt(localStorage.getItem('Class_Korea_amount'));

        if (this.drop02 == 1 && window.StudentA.score - 2 >= 8 ) {
            this.drop02 = 0;
            My02.join02=0;
            My_Class_Static[1][0] = 0;
            My_Class_Static[1][1] = 0;
            Class_Korea.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr02").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join02', My02.join02.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Korea_amount' , Class_Korea.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop02");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop02FlagValue = localStorage.getItem('drop02');//取join01的value
        if( My02.join02 == 1 ){
            this.drop02=1;
            if(document.getElementById("dr02") != null ) document.getElementById("dr02").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class02_name") != null ) document.getElementById("Drop_Class02_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop02") != null ) document.getElementById("Drop02").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop02FlagValue != null) {
                this.drop02 = parseInt(drop02FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop02=0;
            if(document.getElementById("dr02") != null ) document.getElementById("dr02").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class02_name") != null ) document.getElementById("Drop_Class02_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop02") != null ) document.getElementById("Drop02").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop02 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop02.init();//整理後初始化

let Mydrop03 = {
    drop03: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Spain_amount') )Class_Spain.amount_current = parseInt(localStorage.getItem('Class_Spain_amount'));

        if (this.drop03 == 1 && window.StudentA.score  - 1 >= 8 ) {
            this.drop03 = 0;
            My03.join03=0;
            My_Class_Static[4][7] = 0;
            Class_Spain.amount_current -= 1;
            window.StudentA.score -= 1;
            window.StudentA.full();
            document.getElementById("dr03").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join03', My03.join03.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Spain_amount' , Class_Spain.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop03");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop03FlagValue = localStorage.getItem('drop03');//取join01的value
        if( My03.join03 == 1 ){
            this.drop03=1;
            if(document.getElementById("dr03") != null ) document.getElementById("dr03").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class03_name") != null ) document.getElementById("Drop_Class03_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop03") != null ) document.getElementById("Drop03").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop03FlagValue != null) {
                this.drop03 = parseInt(drop03FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop03=0;
            if(document.getElementById("dr03") != null ) document.getElementById("dr03").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class03_name") != null ) document.getElementById("Drop_Class03_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop03") != null ) document.getElementById("Drop03").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop03 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop03.init();//整理後初始化

let Mydrop04 = {
    drop04: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Red_Book_amount') )Class_Red_Book.amount_current = parseInt(localStorage.getItem('Class_Red_Book_amount'));

        if (this.drop04 == 1 && window.StudentA.score - 3 >= 8 ) {
            this.drop04 = 0;
            My04.join04=0;
            My_Class_Static[0][5] = 0;
            My_Class_Static[0][6] = 0;
            My_Class_Static[2][7] = 0;
            Class_Red_Book.amount_current -= 1;
            window.StudentA.score -= 3;
            window.StudentA.full();
            document.getElementById("dr04").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join04', My04.join04.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Red_Book_amount' , Class_Red_Book.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop04");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop04FlagValue = localStorage.getItem('drop04');//取join01的value
        if( My04.join04 == 1 ){
            this.drop04=1;
            if(document.getElementById("dr04") != null ) document.getElementById("dr04").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class04_name") != null ) document.getElementById("Drop_Class04_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop04") != null ) document.getElementById("Drop04").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop04FlagValue != null) {
                this.drop04 = parseInt(drop04FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop04=0;
            if(document.getElementById("dr04") != null ) document.getElementById("dr04").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class04_name") != null ) document.getElementById("Drop_Class04_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop04") != null ) document.getElementById("Drop04").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop04 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop04.init();//整理後初始化

let Mydrop05 = {
    drop05: 0,//目前沒選
    button: null,

    handleClick: function (event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_System_amount') )Class_System.amount_current = parseInt(localStorage.getItem('Class_System_amount'));

        if (this.drop05 == 1 && window.StudentA.score - 3 >= 8 ) {
            this.drop05 = 0;
            My05.join05 = 0;
            My_Class_Static[1][6] = 0;
            My_Class_Static[2][7] = 0;
            My_Class_Static[2][8] = 0;
            Class_System.amount_current -= 1;
            window.StudentA.score -= 3;
            window.StudentA.full();
            document.getElementById("dr05").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join05', My05.join05.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_System_amount' , Class_System.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
    },

    addEventListenerToButton: function () {
        this.button = document.getElementById("Drop05");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function () {
        const drop05FlagValue = localStorage.getItem('drop05');//取join01的value
        if (My05.join05 == 1) {
            this.drop05 = 1;
            if (document.getElementById("dr05") != null) document.getElementById("dr05").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (document.getElementById("Drop_Class05_name") != null) document.getElementById("Drop_Class05_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (document.getElementById("Drop05") != null) document.getElementById("Drop05").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop05FlagValue != null) {
                this.drop05 = parseInt(drop05FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else {
            this.drop05 = 0;
            if (document.getElementById("dr05") != null) document.getElementById("dr05").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (document.getElementById("Drop_Class05_name") != null) document.getElementById("Drop_Class05_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (document.getElementById("Drop05") != null) document.getElementById("Drop05").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function () {
        if (this.button != null) {  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if (this.drop05 == 1) {
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop05.init();//整理後初始化

let Mydrop06 = {
    drop06: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_AI_amount') )Class_AI.amount_current = parseInt(localStorage.getItem('Class_AI_amount'));

        if (this.drop06 == 1 && window.StudentA.score - 3 >= 8 ) {
            this.drop06 = 0;
            My06.join06=0;
            My_Class_Static[2][5] = 0;
            My_Class_Static[2][6] = 0;
            My_Class_Static[2][7] = 0;
            Class_AI.amount_current -= 1;
            window.StudentA.score -= 3;
            window.StudentA.full();
            document.getElementById("dr06").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join06', My06.join06.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('Class_AI_amount' , Class_AI.amount_current.toString());
        localStorage.setItem('MyScoreA', window.StudentA.score.toString() );
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop06");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop06FlagValue = localStorage.getItem('drop06');//取join01的value
        if( My06.join06 == 1 ){
            this.drop06=1;
            if(document.getElementById("dr06") != null ) document.getElementById("dr06").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class06_name") != null ) document.getElementById("Drop_Class06_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop06") != null ) document.getElementById("Drop06").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop06FlagValue != null) {
                this.drop06 = parseInt(drop06FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop06=0;
            if(document.getElementById("dr06") != null ) document.getElementById("dr06").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class06_name") != null ) document.getElementById("Drop_Class06_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop06") != null ) document.getElementById("Drop06").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop06 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop06.init();

let Mydrop07 = {
    drop07: 1,//目前沒選
    button: null,

    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Data_amount') )Class_Data.amount_current = parseInt(localStorage.getItem('Class_Data_amount'));

        if (this.drop07 == 1 && window.StudentA.score - 2 >= 8 ) {
            this.drop07 = 0;
            My07.join07=0;
            My_Class_Static[3][0] = 0;
            My_Class_Static[3][1] = 0;
            Class_Data.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr07").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join07', My07.join07.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Data_amount' , Class_Data.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop07");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop07FlagValue = localStorage.getItem('drop07');//取join01的value
        if( My07.join07 == 1 ){
            this.drop07=1;
            if(document.getElementById("dr07") != null ) document.getElementById("dr07").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class07_name") != null ) document.getElementById("Drop_Class07_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop07") != null ) document.getElementById("Drop07").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop07FlagValue != null) {
                this.drop07 = parseInt(drop07FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop07=0;
            if(document.getElementById("dr07") != null ) document.getElementById("dr07").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class07_name") != null ) document.getElementById("Drop_Class07_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop07") != null ) document.getElementById("Drop07").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop07 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop07.init();

let Mydrop08 = {
    drop08: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));
 
        if( localStorage.getItem('Class_Think_amount') )Class_Think.amount_current = parseInt(localStorage.getItem('Class_Think_amount'));

        if (this.drop08 == 1 && window.StudentA.score - 2 >= 8 ) {
            this.drop08 = 0;
            My08.join08=0;
            My_Class_Static[0][10] = 0;
            My_Class_Static[0][11] = 0;
            Class_Think.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr08").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join08', My08.join08.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Think_amount' , Class_Think.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop08");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop08FlagValue = localStorage.getItem('drop08');//取join01的value
        if( My08.join08 == 1 ){
            this.drop08=1;
            if(document.getElementById("dr08") != null ) document.getElementById("dr08").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class08_name") != null ) document.getElementById("Drop_Class08_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop08") != null ) document.getElementById("Drop08").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop08FlagValue != null) {
                this.drop08 = parseInt(drop08FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop08=0;
            if(document.getElementById("dr08") != null ) document.getElementById("dr08").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class08_name") != null ) document.getElementById("Drop_Class08_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop08") != null ) document.getElementById("Drop08").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop08 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop08.init();

let Mydrop09 = {
    drop09: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Music_amount') )Class_Music.amount_current = parseInt(localStorage.getItem('Class_Music_amount'));

        if (this.drop09 == 1 && window.StudentA.score - 2 >= 8 ) {
            this.drop09 = 0;
            My09.join09=0;
            My_Class_Static[1][5] = 0;
            My_Class_Static[1][6] = 0;
            Class_Music.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr09").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join09', My09.join09.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Music_amount' , Class_Music.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop09");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop09FlagValue = localStorage.getItem('drop09');//取join01的value
        if( My09.join09 == 1 ){
            this.drop09=1;
            if(document.getElementById("dr09") != null ) document.getElementById("dr09").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class09_name") != null ) document.getElementById("Drop_Class09_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop09") != null ) document.getElementById("Drop09").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop09FlagValue != null) {
                this.drop09 = parseInt(drop09FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop09=0;
            if(document.getElementById("dr09") != null ) document.getElementById("dr09").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class09_name") != null ) document.getElementById("Drop_Class09_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop09") != null ) document.getElementById("Drop09").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop09 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop09.init();

let Mydrop10 = {
    drop10: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') )window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));
        
        if( localStorage.getItem('Class_Text_amount') )Class_Text.amount_current = parseInt(localStorage.getItem('Class_Text_amount'));

        if (this.drop10 == 1 && window.StudentA.score - 2 >= 8 ) {
            this.drop10 = 0;
            My10.join10=0;
            My_Class_Static[0][10] = 0;
            My_Class_Static[0][11] = 0;
            Class_Text.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr10").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join10', My10.join10.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_System_Text' , Class_Text.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop10");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop10FlagValue = localStorage.getItem('drop10');//取join01的value
        if( My10.join10 == 1 ){
            this.drop10=1;
            if(document.getElementById("dr10") != null ) document.getElementById("dr10").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class10_name") != null ) document.getElementById("Drop_Class10_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop10") != null ) document.getElementById("Drop10").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop10FlagValue != null) {
                this.drop10 = parseInt(drop10FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop10=0;
            if(document.getElementById("dr10") != null ) document.getElementById("dr10").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class10_name") != null ) document.getElementById("Drop_Class10_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop10") != null ) document.getElementById("Drop10").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop10 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop10.init();
// alert(window.StudentA.score);

let Mydrop11 = {
    drop11: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') )window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_programlanguange_amount') )Class_programlanguange.amount_current = parseInt(localStorage.getItem('Class_programlanguange_amount'));

        if (this.drop11 == 1 && window.StudentA.score - 3 >= 8 ) {
            this.drop11 = 0;
            My11.join11=0;
            My_Class_Static[0][5] = 0;
            My_Class_Static[0][6] = 0;
            My_Class_Static[3][8] = 0;
            Class_programlanguange.amount_current -= 1;
            window.StudentA.score -= 3;
            window.StudentA.full();
            document.getElementById("dr11").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join11', My11.join11.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_programlanguange_amount' , Class_programlanguange.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop11");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop11FlagValue = localStorage.getItem('drop11');//取join01的value
        if( My11.join11 == 1 ){
            this.drop11=1;
            if(document.getElementById("dr11") != null ) document.getElementById("dr11").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class11_name") != null ) document.getElementById("Drop_Class11_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop11") != null ) document.getElementById("Drop11").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop11FlagValue != null) {
                this.drop11 = parseInt(drop11FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop11=0;
            if(document.getElementById("dr11") != null ) document.getElementById("dr11").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class11_name") != null ) document.getElementById("Drop_Class11_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop11") != null ) document.getElementById("Drop11").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop11 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop11.init();

let Mydrop12 = {
    drop12: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_webdesign_amount') )Class_webdesign.amount_current = parseInt(localStorage.getItem('Class_webdesign_amount'));

        if (this.drop12 == 1 && window.StudentA.score - 3 >= 8 ) {
            this.drop12 = 0;
            My12.join12=0;
            My_Class_Static[1][5] = 0;
            My_Class_Static[1][6] = 0;
            My_Class_Static[2][8] = 0;
            Class_webdesign.amount_current -= 1;
            window.StudentA.score -= 3;
            window.StudentA.full();
            document.getElementById("dr12").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join12', My12.join12.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_webdesign_amount' , Class_webdesign.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop12");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop12FlagValue = localStorage.getItem('drop12');//取join01的value
        if( My12.join12 == 1 ){
            this.drop12=1;
            if(document.getElementById("dr12") != null ) document.getElementById("dr12").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class12_name") != null ) document.getElementById("Drop_Class12_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop12") != null ) document.getElementById("Drop12").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop12FlagValue != null) {
                this.drop12 = parseInt(drop12FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop12=0;
            if(document.getElementById("dr12") != null ) document.getElementById("dr12").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class12_name") != null ) document.getElementById("Drop_Class12_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop12") != null ) document.getElementById("Drop12").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop12 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop12.init();

let Mydrop13 = {
    drop13: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_database_amount') )Class_database.amount_current = parseInt(localStorage.getItem('Class_database_amount'));

        if (this.drop13 == 1 && window.StudentA.score - 3 >= 8 ) {
            this.drop13 = 0;
            My13.join13=0;
            My_Class_Static[1][1] = 1;
            My_Class_Static[4][7] = 1;
            My_Class_Static[4][8] = 1;
            Class_database.amount_current -= 1;
            window.StudentA.score -= 3;
            window.StudentA.full();
            document.getElementById("dr13").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join13', My13.join13.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_database_amount' , Class_database.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop13");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop13FlagValue = localStorage.getItem('drop13');//取join01的value
        if( My13.join13 == 1 ){
            this.drop13=1;
            if(document.getElementById("dr13") != null ) document.getElementById("dr13").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class13_name") != null ) document.getElementById("Drop_Class13_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop13") != null ) document.getElementById("Drop13").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop13FlagValue != null) {
                this.drop13 = parseInt(drop13FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop13=0;
            if(document.getElementById("dr13") != null ) document.getElementById("dr13").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class13_name") != null ) document.getElementById("Drop_Class13_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop13") != null ) document.getElementById("Drop13").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop13 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop13.init();

let Mydrop14 = {
    drop14: 1,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_logicdesign_amount') )Class_logicdesign.amount_current = parseInt(localStorage.getItem('Class_logicdesign_amount'));

        if (this.drop14 == 1 && window.StudentA.score - 3 >= 8 ) {
            this.drop14 = 0;
            My14.join14=0;
            My_Class_Static[4][1] = 1;
            My_Class_Static[4][2] = 1;
            My_Class_Static[4][3] = 1;
            Class_logicdesign.amount_current -= 1;
            window.StudentA.score -= 3;
            window.StudentA.full();
            document.getElementById("dr14").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join14', My14.join14.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_logicdesign_amount' , Class_logicdesign.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop14");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop14FlagValue = localStorage.getItem('drop14');//取join01的value
        if( My14.join14 == 1 ){
            this.drop14=1;
            if(document.getElementById("dr14") != null ) document.getElementById("dr14").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class14_name") != null ) document.getElementById("Drop_Class14_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop14") != null ) document.getElementById("Drop14").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop14FlagValue != null) {
                this.drop14 = parseInt(drop14FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop14=0;
            if(document.getElementById("dr14") != null ) document.getElementById("dr14").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class14_name") != null ) document.getElementById("Drop_Class14_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop14") != null ) document.getElementById("Drop14").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop14 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop14.init();

let Mydrop15 = {
    drop15: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Basketball_amount') )Class_Basketball.amount_current = parseInt(localStorage.getItem('Class_Basketball_amount'));

        if (this.drop15 == 1 && window.StudentA.score - 2 >= 8 ) {
            this.drop15 = 0;
            My15.join15=0;
            My_Class_Static[1][6] = 1;
            My_Class_Static[1][7] = 1;
            Class_Basketball.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr15").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join15', My15.join15.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_basketball_amount' , Class_Basketball.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop15");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop15FlagValue = localStorage.getItem('drop15');//取join01的value
        if( My15.join15 == 1 ){
            this.drop15=1;
            if(document.getElementById("dr15") != null ) document.getElementById("dr15").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class15_name") != null ) document.getElementById("Drop_Class15_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop15") != null ) document.getElementById("Drop15").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop15FlagValue != null) {
                this.drop15 = parseInt(drop15FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop15=0;
            if(document.getElementById("dr15") != null ) document.getElementById("dr15").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class15_name") != null ) document.getElementById("Drop_Class15_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop15") != null ) document.getElementById("Drop15").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop15 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop15.init();

let Mydrop16 = {
    drop16: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Meditation_amount') )Class_Meditation.amount_current = parseInt(localStorage.getItem('Class_Meditation_amount'));

        if (this.drop16 == 1 && window.StudentA.score - 1 >= 8 ) {
            this.drop16 = 0;
            My16.join16=0;
            My_Class_Static[3][7] = 0;
            Class_Meditation.amount_current -= 1;
            window.StudentA.score -= 1;
            window.StudentA.full();
            document.getElementById("dr16").style.display = 'none';
        }
        else alert("學分必須高於8");
        localStorage.setItem('join16', My16.join16.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Meditation_amount' , Class_Meditation.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop16");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop16FlagValue = localStorage.getItem('drop16');//取join01的value
        if( My16.join16 == 1 ){
            this.drop16=1;
            if(document.getElementById("dr16") != null ) document.getElementById("dr16").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class16_name") != null ) document.getElementById("Drop_Class16_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop16") != null ) document.getElementById("Drop16").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop16FlagValue != null) {
                this.drop16 = parseInt(drop16FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop16=0;
            if(document.getElementById("dr16") != null ) document.getElementById("dr16").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class16_name") != null ) document.getElementById("Drop_Class16_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop16") != null ) document.getElementById("Drop16").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop16 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop16.init();

let Mydrop17 = {
    drop17: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Comics_Japan2_amount') )Class_Comics_Japan2.amount_current = parseInt(localStorage.getItem('Class_Comics_Japan2_amount'));

        if (this.drop17 == 1 && window.StudentA.score -2 >= 8 ) {
            this.drop17 = 0;
            My17.join17=0;
            My_Class_Static[1][0] = 0;
            My_Class_Static[1][1] = 0;
            Class_Comics_Japan2.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr17").style.display = 'none';
        }
        else alert("學分必須高於8");
        localStorage.setItem('join17', My17.join17.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Comics_Japan2_amount' , Class_Comics_Japan2.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop17");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop17FlagValue = localStorage.getItem('drop17');//取join01的value
        if( My17.join17 == 1 ){
            this.drop17=1;
            if(document.getElementById("dr17") != null ) document.getElementById("dr17").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class17_name") != null ) document.getElementById("Drop_Class17_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop17") != null ) document.getElementById("Drop17").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop17FlagValue != null) {
                this.drop17 = parseInt(drop17FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop17=0;
            if(document.getElementById("dr17") != null ) document.getElementById("dr17").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class17_name") != null ) document.getElementById("Drop_Class17_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop17") != null ) document.getElementById("Drop17").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop17 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop17.init();

let Mydrop18 = {
    drop18: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') )window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Fitness_Concept2_amount') )Class_Fitness_Concept2.amount_current = parseInt(localStorage.getItem('Class_Fitness_Concept2_amount'));

        if (this.drop18 == 1 && window.StudentA.score -2 >= 8 ) {
            this.drop18 = 0;
            My18.join18=0;
            My_Class_Static[3][7] = 0;
            My_Class_Static[3][8] = 0;
            Class_Fitness_Concept2.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr18").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join18', My18.join18.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Fitness_Concept2_amount' , Class_Fitness_Concept2.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop18");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop18FlagValue = localStorage.getItem('drop18');//取join01的value
        if( My18.join18 == 1 ){
            this.drop18=1;
            if(document.getElementById("dr18") != null ) document.getElementById("dr18").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class18_name") != null ) document.getElementById("Drop_Class18_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop18") != null ) document.getElementById("Drop18").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop18FlagValue != null) {
                this.drop18 = parseInt(drop18FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop18=0;
            if(document.getElementById("dr18") != null ) document.getElementById("dr18").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class18_name") != null ) document.getElementById("Drop_Class18_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop18") != null ) document.getElementById("Drop18").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop18 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop18.init();

let Mydrop19 = {
    drop19: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Tennis1_amount') ) Class_Tennis1.amount_current = parseInt(localStorage.getItem('Class_Tennis1_amount'));

        if (this.drop19 == 1 && window.StudentA.score -2 >= 8 ) {
            this.drop19 = 0;
            My19.join19=0;
            My_Class_Static[2][7] = 0;
            My_Class_Static[2][8] = 0;
            Class_Tennis1.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr19").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join19', My19.join19.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_Tennis1_amount' , Class_Tennis1.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop19");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop19FlagValue = localStorage.getItem('drop19');//取join01的value
        if( My19.join19 == 1 ){
            this.drop19=1;
            if(document.getElementById("dr19") != null ) document.getElementById("dr19").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class19_name") != null ) document.getElementById("Drop_Class19_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop19") != null ) document.getElementById("Drop19").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop19FlagValue != null) {
                this.drop19 = parseInt(drop19FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop19=0;
            if(document.getElementById("dr19") != null ) document.getElementById("dr19").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class19_name") != null ) document.getElementById("Drop_Class19_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop19") != null ) document.getElementById("Drop19").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop19 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop19.init();

let Mydrop20 = {
    drop20: 0,//目前沒選
    button: null,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_unix_amount') ) Class_Unix.amount_current = parseInt(localStorage.getItem('Class_unix_amount'));

        if (this.drop20 == 1 && window.StudentA.score -2 >= 8 ) {
            this.drop20 = 0;
            My20.join20=0;
            My_Class_Static[2][2] = 0;
            My_Class_Static[2][3] = 0;
            Class_Unix.amount_current -= 1;
            window.StudentA.score -= 2;
            window.StudentA.full();
            document.getElementById("dr20").style.display = 'none';
        }
        else alert("學分必須高於8");
        
        localStorage.setItem('join20', My20.join20.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
        localStorage.setItem('Class_unix_amount' , Class_Unix.amount_current.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Drop20");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const drop20FlagValue = localStorage.getItem('drop20');//取join01的value
        if( My20.join20 == 1 ){
            this.drop20=1;
            if(document.getElementById("dr20") != null ) document.getElementById("dr20").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class20_name") != null ) document.getElementById("Drop_Class20_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop20") != null ) document.getElementById("Drop20").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (drop20FlagValue != null) {
                this.drop20 = parseInt(drop20FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            this.drop20=0;
            if(document.getElementById("dr20") != null ) document.getElementById("dr20").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop_Class20_name") != null ) document.getElementById("Drop_Class20_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Drop20") != null ) document.getElementById("Drop20").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( this.join01 );
            if( this.drop20 == 1 ){
                this.button.innerText = "退選";
            }
        }
    }
}

Mydrop20.init();