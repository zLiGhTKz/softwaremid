/*
join(?ID): 0: 不選或沒加選 1: 已加選
*/
// import { window.StudentA } from "./window.StudentA_Data";
let My_Class_Static = [//0 => 有課,1 => 沒課
    [ 0 , 0 , 0 , 0 , 0 , 1 , 1 , 0 , 0 , 0 , 0 , 0 ],//周一課程狀態
    [ 0 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 ],//周二課程狀態
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 1 , 0 , 0 , 0 ],//周三課程狀態
    [ 1 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 1 , 0 , 0 , 0 ],//周四課程狀態
    [ 0 , 1 , 1 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//周五課程狀態
];

let My01 = {
    join01: 0,//目前沒選
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') )window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Japan_amount') )Class_Japan.amount_current = parseInt(localStorage.getItem('Class_Japan_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));
        console.log(My_Class_Static);

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[0][0] != 0 || My_Class_Static[0][1] != 0 || My_Class_Static[3][7] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join01 == 0 && Class_Japan.amount_current < Class_Japan.amount_full && window.StudentA.score + 23 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join01 = 1;
            My_Class_Static[0][0] = 1;
            My_Class_Static[0][1] = 1;
            My_Class_Static[3][7] = 1;
            Class_Japan.amount_current += 1;
            window.StudentA.score += 23;
        }
        else{
            // this.join01 = 0;//測試用，可忽略
            // this.button.innerText = "加選"; //測試用，可忽略
            if( window.StudentA.score + 23 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Japan.full_flag();
            // alert("lll");
        }
        localStorage.setItem('Class_Japan_amount' , Class_Japan.amount_current.toString());
        localStorage.setItem('join01', this.join01.toString());//將join01的值以string的方式存到join01內
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join01");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        // localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));

        // alert(savedArray[0][0]);
        const join01FlagValue = localStorage.getItem('join01');//取join01的value
        if( Class_01.focus01_flag == 1 ){
            if(document.getElementById("tr01") != null ) document.getElementById("tr01").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Class01_name") != null ) document.getElementById("Class01_name").style.display = '1';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Join01") != null ) document.getElementById("Join01").style.display = 'block';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if (join01FlagValue != null) {
                this.join01 = parseInt(join01FlagValue);//轉成int
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr01") != null ) document.getElementById("tr01").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Class01_name") != null ) document.getElementById("Class01_name").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            if(document.getElementById("Join01") != null ) document.getElementById("Join01").style.display = 'none';
            //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
        }
    },

    setButtontext: function(){ 
        if( this.button != null ){  //該if目的是不要讓該死的系統偵錯!!!!!!!!!!!!
            // alert( My05.join05 );
            if( this.join01 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My01.init();//整理後初始化

let My02 = {
    join02: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Korea_amount') )Class_Korea.amount_current = parseInt(localStorage.getItem('Class_Korea_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[1][0] != 0 || My_Class_Static[1][1] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join02 == 0 && Class_Korea.amount_current < Class_Korea.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join02 = 1;
            My_Class_Static[1][0] = 1;
            My_Class_Static[1][1] = 1;
            Class_Korea.amount_current += 1;
            window.StudentA.score += 2;
            // alert(window.StudentA.score);
        }
        else{
            // this.join02 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Korea.full_flag();
        }
        localStorage.setItem('Class_Korea_amount' , Class_Korea.amount_current.toString());
        localStorage.setItem('join02', this.join02.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join02");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join02FlagValue = localStorage.getItem('join02');
        //alert( Class_02.focus02_flag );
        if( Class_02.focus02_flag == 1 ){
            // alert("13");
            if(document.getElementById("tr02") != null )document.getElementById("tr02").style.display = '';

            if(document.getElementById("Class02_name") != null )document.getElementById("Class02_name").style.display = '';

            if(document.getElementById("Join02") != null )document.getElementById("Join02").style.display = 'block';

            if (join02FlagValue != null) {
                this.join02 = parseInt(join02FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            // alert("11");
            if(document.getElementById("tr02") != null ) document.getElementById("tr02").style.display = 'none';

            if(document.getElementById("Class02_name") != null ) document.getElementById("Class02_name").style.display = 'none';

            if(document.getElementById("Join02") != null )document.getElementById("Join02").style.display = 'none';
        }
        // alert("oo");
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join02 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My02.init();

let My03 = {
    join03: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Spain_amount') )Class_Spain.amount_current = parseInt(localStorage.getItem('Class_Spain_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[4][7] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join03 == 0 && Class_Spain.amount_current < Class_Spain.amount_full && window.StudentA.score + 1 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join03 = 1;
            My_Class_Static[4][7] = 1;
            Class_Spain.amount_current += 1;
            window.StudentA.score += 1;
        }
        else{
            // this.join03 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 1 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Spain.full_flag();
        }
        localStorage.setItem('Class_Spain_amount' , Class_Spain.amount_current.toString());
        localStorage.setItem('join03', this.join03.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join03");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join03FlagValue = localStorage.getItem('join03');
        // alert(join02FlagValue);
        if( Class_03.focus03_flag == 1 ){
            if(document.getElementById("tr03") != null ) document.getElementById("tr03").style.display = '';

            if(document.getElementById("Class03_name") != null ) document.getElementById("Class03_name").style.display = '';

            if(document.getElementById("Join03") != null ) document.getElementById("Join03").style.display = 'block';

            if (join03FlagValue != null) {
                this.join03 = parseInt(join03FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr03") != null ) document.getElementById("tr03").style.display = 'none';
            if(document.getElementById("Class03_name") != null ) document.getElementById("Class03_name").style.display = 'none';
            if(document.getElementById("Join03") != null ) document.getElementById("Join03").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join03 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My03.init();

let My04 = {
    join04: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Red_Book_amount') )Class_Red_Book.amount_current = parseInt(localStorage.getItem('Class_Red_Book_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[0][5] != 0 || My_Class_Static[0][6] != 0 || My_Class_Static[2][7] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join04 == 0 && Class_Red_Book.amount_current < Class_Red_Book.amount_full && window.StudentA.score + 3 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join04 = 1;
            My_Class_Static[0][5] = 1;
            My_Class_Static[0][6] = 1;
            My_Class_Static[2][7] = 1;
            Class_Red_Book.amount_current += 1;
            window.StudentA.score += 3;
        }
        else{
            // this.join04 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 3 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Red_Book.full_flag();
        }
        localStorage.setItem('Class_Red_Book_amount' , Class_Red_Book.amount_current.toString());
        localStorage.setItem('join04', this.join04.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join04");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join04FlagValue = localStorage.getItem('join04');
        // alert(join02FlagValue);
        if( Class_04.focus04_flag == 1 ){
            if(document.getElementById("tr04") != null ) document.getElementById("tr04").style.display = '';
    
            if(document.getElementById("Class04_name") != null ) document.getElementById("Class04_name").style.display = '';
    
            if(document.getElementById("Join04") != null ) document.getElementById("Join04").style.display = 'block';
    
            if (join04FlagValue != null) {
                this.join04 = parseInt(join04FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr04") != null ) document.getElementById("tr04").style.display = 'none';

            if(document.getElementById("Class04_name") != null ) document.getElementById("Class04_name").style.display = 'none';
            
            if(document.getElementById("Join04") != null ) document.getElementById("Join04").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join04 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My04.init();

let My05 = {
    join05: 1,
    button: null,
    Time_conflict: 0,
    
    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_System_amount') )Class_System.amount_current = parseInt(localStorage.getItem('Class_System_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[1][6] != 0 || My_Class_Static[2][7] != 0 || My_Class_Static[2][8] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join05 == 0 && Class_System.amount_current < Class_System.amount_full && window.StudentA.score + 3 <= window.StudentA.score_full && this.Time_conflict == 0  ) {
            this.button.innerText = "已加選";
            this.join05 = 1;
            My_Class_Static[1][6] = 1;
            My_Class_Static[2][7] = 1;
            My_Class_Static[2][8] = 1;
            Class_System.amount_current += 1;
            window.StudentA.score += 3;
        }
        else{
            // this.join05 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 3 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_System.full_flag();
        }
        localStorage.setItem('Class_System_amount' , Class_System.amount_current.toString());
        localStorage.setItem('join05', this.join05.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join05");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join05FlagValue = localStorage.getItem('join05');
        // alert(join02FlagValue);
        if( Class_05.focus05_flag == 1 ){
            if(document.getElementById("tr05") != null ) document.getElementById("tr05").style.display = '';
    
            if(document.getElementById("Class05_name") != null ) document.getElementById("Class05_name").style.display = '';
    
            if(document.getElementById("Join05") != null ) document.getElementById("Join05").style.display = 'block';
    
            if (join05FlagValue != null) {
                this.join05 = parseInt(join05FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr05") != null ) document.getElementById("tr05").style.display = 'none';
    
            if(document.getElementById("Class05_name") != null ) document.getElementById("Class05_name").style.display = 'none';
            
            if(document.getElementById("Join05") != null ) document.getElementById("Join05").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join05 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    } 
}

My05.init();

let My06 = {
    join06: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_AI_amount') )Class_AI.amount_current = parseInt(localStorage.getItem('Class_AI_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[2][5] != 0 || My_Class_Static[2][6] != 0 || My_Class_Static[2][7] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join06 == 0 && Class_AI.amount_current < Class_AI.amount_full && window.StudentA.score + 3 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join06 = 1;
            My_Class_Static[2][5] = 1;
            My_Class_Static[2][6] = 1;
            My_Class_Static[2][7] = 1;
            Class_AI.amount_current += 1;
            window.StudentA.score += 3;
        }
        else{
            // this.join06 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 3 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_AI.full_flag();
        }
        localStorage.setItem('Class_AI_amount' , Class_AI.amount_current.toString());
        localStorage.setItem('join06', this.join06.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join06");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join06FlagValue = localStorage.getItem('join06');
        // alert(join02FlagValue);
        if( Class_06.focus06_flag == 1 ){
            if(document.getElementById("tr06") != null ) document.getElementById("tr06").style.display = '';
    
            if(document.getElementById("Class06_name") != null ) document.getElementById("Class06_name").style.display = '';
    
            if(document.getElementById("Join06") != null ) document.getElementById("Join06").style.display = 'block';
    
            if (join06FlagValue != null) {
                this.join06 = parseInt(join06FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr06") != null ) document.getElementById("tr06").style.display = 'none';
    
            if(document.getElementById("Class06_name") != null ) document.getElementById("Class06_name").style.display = 'none';
            
            if(document.getElementById("Join06") != null ) document.getElementById("Join06").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join06 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My06.init();

let My07 = {
    join07: 1,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if(localStorage.getItem('MyScoreA')) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Data_amount') )Class_Data.amount_current = parseInt(localStorage.getItem('Class_Data_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[3][0] != 0 || My_Class_Static[3][1] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join07 == 0 && Class_Data.amount_current < Class_Data.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join07 = 1;
            My_Class_Static[3][0] = 1;
            My_Class_Static[3][1] = 1;
            Class_Spain.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join07 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Data.full_flag();
        }
        localStorage.setItem('Class_Data_amount' , Class_Data.amount_current.toString());
        localStorage.setItem('join07', this.join07.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join07");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join07FlagValue = localStorage.getItem('join07');
        // alert(join02FlagValue);
        if( Class_07.focus07_flag == 1 ){
            if(document.getElementById("tr07") != null ) document.getElementById("tr07").style.display = '';
    
            if(document.getElementById("Class07_name") != null ) document.getElementById("Class07_name").style.display = '';
    
            if(document.getElementById("Join07") != null ) document.getElementById("Join07").style.display = 'block';
    
            if (join07FlagValue != null) {
                this.join07 = parseInt(join07FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr07") != null ) document.getElementById("tr07").style.display = 'none';
    
            if(document.getElementById("Class07_name") != null ) document.getElementById("Class07_name").style.display = 'none';
            
            if(document.getElementById("Join07") != null ) document.getElementById("Join07").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join07 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My07.init();

let My08 = {
    join08: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));
 
        if( localStorage.getItem('Class_Think_amount') )Class_Think.amount_current = parseInt(localStorage.getItem('Class_Think_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[0][10] != 0 || My_Class_Static[0][11] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join08 == 0 && Class_Think.amount_current < Class_Think.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join08 = 1;
            My_Class_Static[0][10] = 1;
            My_Class_Static[0][11] = 1;
            Class_Think.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join08 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Think.full_flag();
        }
        localStorage.setItem('Class_Think_amount' , Class_Think.amount_current.toString());
        localStorage.setItem('join08', this.join08.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join08");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join08FlagValue = localStorage.getItem('join08');
        // alert(join02FlagValue);
        if( Class_08.focus08_flag == 1 ){
            if(document.getElementById("tr08") != null ) document.getElementById("tr08").style.display = '';
    
            if(document.getElementById("Class08_name") != null ) document.getElementById("Class08_name").style.display = '';
    
            if(document.getElementById("Join08") != null ) document.getElementById("Join08").style.display = 'block';
    
            if (join08FlagValue != null) {
                this.join08 = parseInt(join08FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr08") != null ) document.getElementById("tr08").style.display = 'none';
    
            if(document.getElementById("Class08_name") != null ) document.getElementById("Class08_name").style.display = 'none';
            
            if(document.getElementById("Join08") != null ) document.getElementById("Join08").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join08 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My08.init();

let My09 = {
    join09: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Music_amount') )Class_Music.amount_current = parseInt(localStorage.getItem('Class_Music_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[1][5] != 0 || My_Class_Static[1][6] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join09 == 0 && Class_Music.amount_current < Class_Music.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join09 = 1;
            My_Class_Static[1][5] = 1;
            My_Class_Static[1][6] = 1;
            Class_Music.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join09 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Music.full_flag();
        }
        localStorage.setItem('Class_Music_amount' , Class_Music.amount_current.toString());
        localStorage.setItem('join09', this.join09.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join09");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join09FlagValue = localStorage.getItem('join09');
        // alert(join02FlagValue);
        if( Class_09.focus09_flag == 1 ){
            if(document.getElementById("tr09") != null ) document.getElementById("tr09").style.display = '';
    
            if(document.getElementById("Class09_name") != null ) document.getElementById("Class09_name").style.display = '';
    
            if(document.getElementById("Join09") != null ) document.getElementById("Join09").style.display = 'block';
    
            if (join09FlagValue != null) {
                this.join09 = parseInt(join09FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr09") != null ) document.getElementById("tr09").style.display = 'none';
    
            if(document.getElementById("Class09_name") != null ) document.getElementById("Class09_name").style.display = 'none';
            
            if(document.getElementById("Join09") != null ) document.getElementById("Join09").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join09 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My09.init();

let My10 = {
    join10: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') )window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));
        
        if( localStorage.getItem('Class_Text_amount') )Class_Text.amount_current = parseInt(localStorage.getItem('Class_Text_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[0][10] != 0 || My_Class_Static[0][11] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join10 == 0 && Class_Text.amount_current < Class_Text.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join10 = 1;
            My_Class_Static[0][10] = 1;
            My_Class_Static[0][11] = 1;
            Class_Text.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join10 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Text.full_flag();
        }
        localStorage.setItem('Class_System_Text' , Class_Text.amount_current.toString());
        localStorage.setItem('join10', this.join10.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join10");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found10.");
        }
    },

    init: function(){
        // let savedArray = JSON.parse(localStorage.getItem('My_Class_Static'));
        // alert(savedArray[0][10]);
        const join10FlagValue = localStorage.getItem('join10');
        // alert(join02FlagValue);
        if( Class_10.focus10_flag == 1 ){
            if(document.getElementById("tr10") != null ) document.getElementById("tr10").style.display = '';
    
            if(document.getElementById("Class10_name") != null ) document.getElementById("Class10_name").style.display = '';
    
            if(document.getElementById("Join10") != null ) document.getElementById("Join10").style.display = 'block';
    
            if (join10FlagValue != null) {
                this.join10 = parseInt(join10FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr10") != null ) document.getElementById("tr10").style.display = 'none';
    
            if(document.getElementById("Class10_name") != null ) document.getElementById("Class10_name").style.display = 'none';
            
            if(document.getElementById("Join10") != null ) document.getElementById("Join10").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join10 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My10.init();
// alert(window.StudentA.score);

let My11 = {
    join11: 1,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') )window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_programlanguange_amount') )Class_programlanguange.amount_current = parseInt(localStorage.getItem('Class_programlanguange_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[0][5] != 0 || My_Class_Static[0][6] != 0 || My_Class_Static[3][8] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join11 == 0 && Class_programlanguange.amount_current < Class_programlanguange.amount_full && window.StudentA.score + 3 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join11 = 1;
            My_Class_Static[0][5] = 1;
            My_Class_Static[0][6] = 1;
            My_Class_Static[3][8] = 1;
            Class_programlanguange.amount_current += 1;
            window.StudentA.score += 3;
        }
        else{
            // this.join11 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 3 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_programlanguange.full_flag();
        }
        localStorage.setItem('Class_programlanguange_amount' , Class_programlanguange.amount_current.toString());
        localStorage.setItem('join11', this.join11.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join11");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found11.");
        }
    },

    init: function(){
        const join11FlagValue = localStorage.getItem('join11');
        // alert(join02FlagValue);
        if( Class_11.focus11_flag == 1 ){
            if(document.getElementById("tr11") != null ) document.getElementById("tr11").style.display = '';
    
            if(document.getElementById("Class11_name") != null ) document.getElementById("Class11_name").style.display = '';
    
            if(document.getElementById("Join11") != null ) document.getElementById("Join11").style.display = 'block';
    
            if (join11FlagValue != null) {
                this.join11 = parseInt(join11FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr11") != null ) document.getElementById("tr11").style.display = 'none';
    
            if(document.getElementById("Class11_name") != null ) document.getElementById("Class11_name").style.display = 'none';
            
            if(document.getElementById("Join11") != null ) document.getElementById("Join11").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join11 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My11.init();

let My12 = {
    join12: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_webdesign_amount') )Class_webdesign.amount_current = parseInt(localStorage.getItem('Class_webdesign_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[1][5] != 0 || My_Class_Static[1][6] != 0 || My_Class_Static[2][8] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join12 == 0 && Class_webdesign.amount_current < Class_webdesign.amount_full && window.StudentA.score + 3 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join12 = 1;
            My_Class_Static[1][5] = 1;
            My_Class_Static[1][6] = 1;
            My_Class_Static[2][8] = 1;
            Class_webdesign.amount_current += 1;
            window.StudentA.score += 3;
        }
        else{
            // this.join12 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 3 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_webdesign.full_flag();
        }
        localStorage.setItem('Class_webdesign_amount' , Class_webdesign.amount_current.toString());
        localStorage.setItem('join12', this.join12.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join12");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.12");
        }
    },

    init: function(){
        const join12FlagValue = localStorage.getItem('join12');
        // alert(join02FlagValue);
        if( Class_12.focus12_flag == 1 ){
            if(document.getElementById("tr12") != null ) document.getElementById("tr12").style.display = '';
    
            if(document.getElementById("Class12_name") != null ) document.getElementById("Class12_name").style.display = '';
    
            if(document.getElementById("Join12") != null ) document.getElementById("Join12").style.display = 'block';
    
            if (join12FlagValue != null) {
                this.join12 = parseInt(join12FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr12") != null ) document.getElementById("tr12").style.display = 'none';
    
            if(document.getElementById("Class12_name") != null ) document.getElementById("Class12_name").style.display = 'none';
            
            if(document.getElementById("Join12") != null ) document.getElementById("Join12").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join12 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My12.init();

let My13 = {
    join13: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_database_amount') )Class_database.amount_current = parseInt(localStorage.getItem('Class_database_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[1][1] != 0 || My_Class_Static[4][7] != 0 || My_Class_Static[4][8] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join13 == 0 && Class_database.amount_current < Class_database.amount_full && window.StudentA.score + 3 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join13 = 1;
            My_Class_Static[1][1] = 1;
            My_Class_Static[4][7] = 1;
            My_Class_Static[4][8] = 1;
            Class_database.amount_current += 1;
            window.StudentA.score += 3;
        }
        else{
            // this.join13 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 3 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_database.full_flag();
        }
        localStorage.setItem('Class_database_amount' , Class_database.amount_current.toString());
        localStorage.setItem('join13', this.join13.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join13");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join13FlagValue = localStorage.getItem('join13');
        // alert(join02FlagValue);
        if( Class_13.focus13_flag == 1 ){
            if(document.getElementById("tr13") != null ) document.getElementById("tr13").style.display = '';
    
            if(document.getElementById("Class13_name") != null ) document.getElementById("Class13_name").style.display = '';
    
            if(document.getElementById("Join13") != null ) document.getElementById("Join13").style.display = 'block';
    
            if (join13FlagValue != null) {
                this.join13 = parseInt(join13FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr13") != null ) document.getElementById("tr13").style.display = 'none';
    
            if(document.getElementById("Class13_name") != null ) document.getElementById("Class13_name").style.display = 'none';
            
            if(document.getElementById("Join13") != null ) document.getElementById("Join13").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join13 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My13.init();

let My14 = {
    join14: 1,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_logicdesign_amount') )Class_logicdesign.amount_current = parseInt(localStorage.getItem('Class_logicdesign_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[4][1] != 0 || My_Class_Static[4][2] != 0 || My_Class_Static[4][3] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join14 == 0 && Class_logicdesign.amount_current < Class_logicdesign.amount_full && window.StudentA.score + 3 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join14 = 1;
            My_Class_Static[4][1] = 1;
            My_Class_Static[4][2] = 1;
            My_Class_Static[4][3] = 1;
            Class_logicdesign.amount_current += 1;
            window.StudentA.score += 3;
        }
        else{
            // this.join14 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 3 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_logicdesign.full_flag();
        }
        localStorage.setItem('Class_logicdesign_amount' , Class_logicdesign.amount_current.toString());
        localStorage.setItem('join14', this.join14.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join14");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join14FlagValue = localStorage.getItem('join14');
        // alert(join02FlagValue);
        if( Class_14.focus14_flag == 1 ){
            if(document.getElementById("tr14") != null ) document.getElementById("tr14").style.display = '';
    
            if(document.getElementById("Class14_name") != null ) document.getElementById("Class14_name").style.display = '';
    
            if(document.getElementById("Join14") != null ) document.getElementById("Join14").style.display = 'block';
    
            if (join14FlagValue != null) {
                this.join14 = parseInt(join14FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr14") != null ) document.getElementById("tr14").style.display = 'none';
    
            if(document.getElementById("Class14_name") != null ) document.getElementById("Class14_name").style.display = 'none';
            
            if(document.getElementById("Join14") != null ) document.getElementById("Join14").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join14 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My14.init();

let My15 = {
    join15: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Basketball_amount') )Class_Basketball.amount_current = parseInt(localStorage.getItem('Class_Basketball_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[1][6] != 0 || My_Class_Static[1][7] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join15 == 0 && Class_Basketball.amount_current < Class_Basketball.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join15 = 1;
            My_Class_Static[1][6] = 1;
            My_Class_Static[1][7] = 1;
            this.Time_conflict = 1;
            Class_Basketball.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join15 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Basketball.full_flag();
        }
        localStorage.setItem('Class_basketball_amount' , Class_Basketball.amount_current.toString());
        localStorage.setItem('join15', this.join15.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join15");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join15FlagValue = localStorage.getItem('join15');
        // alert(join02FlagValue);
        if( Class_15.focus15_flag == 1 ){
            if(document.getElementById("tr15") != null ) document.getElementById("tr15").style.display = '';
    
            if(document.getElementById("Class15_name") != null ) document.getElementById("Class15_name").style.display = '';
    
            if(document.getElementById("Join15") != null ) document.getElementById("Join15").style.display = 'block';
    
            if (join15FlagValue != null) {
                this.join15 = parseInt(join15FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr15") != null ) document.getElementById("tr15").style.display = 'none';
    
            if(document.getElementById("Class15_name") != null ) document.getElementById("Class15_name").style.display = 'none';
            
            if(document.getElementById("Join15") != null ) document.getElementById("Join15").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join15 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My15.init();

let My16 = {
    join16: 1,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Meditation_amount') )Class_Meditation.amount_current = parseInt(localStorage.getItem('Class_Meditation_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[3][7] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join16 == 0 && Class_Meditation.amount_current < Class_Meditation.amount_full && window.StudentA.score + 1 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join16 = 1;
            My_Class_Static[3][7] = 1;
            Class_Meditation.amount_current += 1;
            window.StudentA.score += 1;
        }
        else{
            // this.join16 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 1 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Meditation.full_flag();
        }
        localStorage.setItem('Class_Meditation_amount' , Class_Meditation.amount_current.toString());
        localStorage.setItem('join16', this.join16.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join16");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join16FlagValue = localStorage.getItem('join16');
        // alert(join02FlagValue);
        if( Class_16.focus16_flag == 1 ){
            if(document.getElementById("tr16") != null ) document.getElementById("tr16").style.display = '';
    
            if(document.getElementById("Class16_name") != null ) document.getElementById("Class16_name").style.display = '';
    
            if(document.getElementById("Join16") != null ) document.getElementById("Join16").style.display = 'block';
    
            if (join16FlagValue != null) {
                this.join16 = parseInt(join16FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr16") != null ) document.getElementById("tr16").style.display = 'none';
    
            if(document.getElementById("Class16_name") != null ) document.getElementById("Class16_name").style.display = 'none';
            
            if(document.getElementById("Join16") != null ) document.getElementById("Join16").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join16 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My16.init();

let My17 = {
    join17: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Comics_Japan2_amount') )Class_Comics_Japan2.amount_current = parseInt(localStorage.getItem('Class_Comics_Japan2_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[1][0] != 0 || My_Class_Static[1][1] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join17 == 0 && Class_Comics_Japan2.amount_current < Class_Comics_Japan2.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join17 = 1;
            My_Class_Static[1][0] = 1;
            My_Class_Static[1][1] = 1;
            Class_Comics_Japan2.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join17 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Comics_Japan2.full_flag();
        }
        localStorage.setItem('Class_Comics_Japan2_amount' , Class_Comics_Japan2.amount_current.toString());
        localStorage.setItem('join17', this.join17.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join17");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join17FlagValue = localStorage.getItem('join17');
        // alert(join02FlagValue);
        if( Class_17.focus17_flag == 1 ){
            if(document.getElementById("tr17") != null ) document.getElementById("tr17").style.display = '';
    
            if(document.getElementById("Class17_name") != null ) document.getElementById("Class17_name").style.display = '';
    
            if(document.getElementById("Join17") != null ) document.getElementById("Join17").style.display = 'block';
    
            if (join17FlagValue != null) {
                this.join17 = parseInt(join17FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr17") != null ) document.getElementById("tr17").style.display = 'none';
    
            if(document.getElementById("Class17_name") != null ) document.getElementById("Class17_name").style.display = 'none';
            
            if(document.getElementById("Join17") != null ) document.getElementById("Join17").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join17 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My17.init();

let My18 = {
    join18: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') )window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Fitness_Concept2_amount') )Class_Fitness_Concept2.amount_current = parseInt(localStorage.getItem('Class_Fitness_Concept2_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[3][7] != 0 || My_Class_Static[3][8] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join18 == 0 && Class_Fitness_Concept2.amount_current < Class_Fitness_Concept2.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join18 = 1;
            My_Class_Static[3][7] = 1;
            My_Class_Static[3][8] = 1;
            Class_Fitness_Concept2.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join18 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Fitness_Concept2.full_flag();
        }
        localStorage.setItem('Class_Fitness_Concept2_amount' , Class_Fitness_Concept2.amount_current.toString());
        localStorage.setItem('join18', this.join18.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join18");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join18FlagValue = localStorage.getItem('join18');
        // alert(join02FlagValue);
        if( Class_18.focus18_flag == 1 ){
            if(document.getElementById("tr18") != null ) document.getElementById("tr18").style.display = '';
    
            if(document.getElementById("Class18_name") != null ) document.getElementById("Class18_name").style.display = '';
    
            if(document.getElementById("Join18") != null ) document.getElementById("Join18").style.display = 'block';
    
            if (join18FlagValue != null) {
                this.join18 = parseInt(join18FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr18") != null ) document.getElementById("tr18").style.display = 'none';
    
            if(document.getElementById("Class18_name") != null ) document.getElementById("Class18_name").style.display = 'none';
            
            if(document.getElementById("Join18") != null ) document.getElementById("Join18").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join18 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My18.init();

let My19 = {
    join19: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_Tennis1_amount') ) Class_Tennis1.amount_current = parseInt(localStorage.getItem('Class_Tennis1_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[2][7] != 0 || My_Class_Static[2][8] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }

        if (this.join19 == 0 && Class_Tennis1.amount_current < Class_Tennis1.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join19 = 1;
            My_Class_Static[2][7] = 1;
            My_Class_Static[2][8] = 1;
            Class_Tennis1.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join19 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Tennis1.full_flag();
        }
        localStorage.setItem('Class_Tennis1_amount' , Class_Tennis1.amount_current.toString());
        localStorage.setItem('join19', this.join19.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join19");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join19FlagValue = localStorage.getItem('join19');
        // alert(join02FlagValue);
        if( Class_19.focus19_flag == 1 ){
            if(document.getElementById("tr19") != null ) document.getElementById("tr19").style.display = '';
    
            if(document.getElementById("Class19_name") != null ) document.getElementById("Class19_name").style.display = '';
    
            if(document.getElementById("Join19") != null ) document.getElementById("Join19").style.display = 'block';
    
            if (join19FlagValue != null) {
                this.join19 = parseInt(join19FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr19") != null ) document.getElementById("tr19").style.display = 'none';
    
            if(document.getElementById("Class19_name") != null ) document.getElementById("Class19_name").style.display = 'none';
            
            if(document.getElementById("Join19") != null ) document.getElementById("Join19").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join19 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My19.init();

let My20 = {
    join20: 0,
    button: null,
    Time_conflict: 0,

    handleClick: function(event) {
        if( localStorage.getItem('MyScoreA') ) window.StudentA.score = parseInt(localStorage.getItem('MyScoreA'));

        if( localStorage.getItem('Class_unix_amount') ) Class_Unix.amount_current = parseInt(localStorage.getItem('Class_unix_amount'));

        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        for( let i = 0 ; i < My_Class_Static.length ; i++ ){
            for( let j = 0 ; j < My_Class_Static[i].length ; j++ ){
                if( My_Class_Static[2][2] != 0 || My_Class_Static[2][3] != 0 ){
                    this.Time_conflict = 1;
                    alert("與其他課程衝堂!!!");
                    break;
                }
            }
            break;
        }
        if (this.join20 == 0 && Class_Unix.amount_current < Class_Unix.amount_full && window.StudentA.score + 2 <= window.StudentA.score_full && this.Time_conflict == 0 ) {
            this.button.innerText = "已加選";
            this.join20 = 1;
            My_Class_Static[2][2] = 1;
            My_Class_Static[2][3] = 1;
            Class_Unix.amount_current += 1;
            window.StudentA.score += 2;
        }
        else{
            // this.join20 = 0;
            // this.button.innerText = "加選";
            if( window.StudentA.score + 2 > window.StudentA.score_full ) alert("你的學分滿了!!!");
            Class_Unix.full_flag();
        }
        localStorage.setItem('Class_unix_amount' , Class_Unix.amount_current.toString());
        localStorage.setItem('join20', this.join20.toString());
        localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
        localStorage.setItem('MyScoreA',  window.StudentA.score.toString() );
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Join20");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            //alert("Button not found.");
        }
    },

    init: function(){
        const join20FlagValue = localStorage.getItem('join20');
        // alert(join02FlagValue);
        if( Class_20.focus20_flag == 1 ){
            if(document.getElementById("tr20") != null ) document.getElementById("tr20").style.display = '';
    
            if(document.getElementById("Class20_name") != null ) document.getElementById("Class20_name").style.display = '';
    
            if(document.getElementById("Join20") != null ) document.getElementById("Join20").style.display = 'block';
    
            if (join20FlagValue != null) {
                this.join20 = parseInt(join20FlagValue);
                this.addEventListenerToButton();
                this.setButtontext();
            } else {
                this.addEventListenerToButton();
                this.setButtontext();
            }
        }
        else{
            if(document.getElementById("tr20") != null ) document.getElementById("tr20").style.display = 'none';
    
            if(document.getElementById("Class20_name") != null ) document.getElementById("Class20_name").style.display = 'none';
            
            if(document.getElementById("Join20") != null ) document.getElementById("Join20").style.display = 'none';
        }
    },

    setButtontext: function(){
        if( this.button != null ){
            if( this.join20 == 0 ){
                this.button.innerText = "加選";
            }
            else if (this.button) {
                this.button.innerText = "已加選";
            } 
        }
    }
}

My20.init();

// localStorage.setItem('My_Class_Static', JSON.stringify(My_Class_Static));
// export{ My_Class_Static };