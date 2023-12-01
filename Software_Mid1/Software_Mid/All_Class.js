/*必修: 05:作業系統
        07:資料庫
        11:程式設計
        14:邏輯設計
        16:冥想
*/

var Class_Japan = {//學分:3
    No: 1,//ID
    depart: "外文",//系級
    name: "日文",
    Time_Start_to_End_1: "星期一 8:10 ~ 9:00",
    Time_Start_to_End_2: "星期一 9:10 ~ 10:00",
    Time_Start_to_End_3: "星期四 15:10 ~ 16:00",
    Teacher: "AAAAA",

    Timearr_Mon: [],//Timearr_星期A => 該課程在星期A有的節次 1:有 0:沒 
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 1 || i == 2 ) this.Timearr_Mon.push(1);
            else this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 ) this.Timearr_Thu.push(1);
            else this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 58,//目前人數
    Join_Class: function(){
        this.amount_current += 1;
    },

    amount_full: 60,//額滿人數
    full_flag: function(){
        if( this.amount_current >= this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限
};

Class_Japan.Schedule_Mon();
Class_Japan.Schedule_Tue();
Class_Japan.Schedule_Wed();
Class_Japan.Schedule_Thu();
Class_Japan.Schedule_Fri();
// alert(Class_Japan.Timearr_Thu[7]);

var Class_Korea = {//學分:2
    No: 2,
    depart: "外文",
    name: "韓文",
    Time_Start_to_End_1: "星期二 8:10 ~ 9:00",
    Time_Start_to_End_2: "星期二 9:10 ~ 10:00",
    Teacher: "Betty",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 1 || i == 2 ) this.Timearr_Tue.push(1);
            else this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 55,
    Join_Class: function(){
        this.amount_current += 1;
    },

    amount_full: 68,
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    }
};

Class_Korea.Schedule_Mon();
Class_Korea.Schedule_Tue();
Class_Korea.Schedule_Wed();
Class_Korea.Schedule_Thu();
Class_Korea.Schedule_Fri();

var Class_Spain = {//學分:1
    No: 3,
    depart: "外文",
    name: "西班牙文",
    Time_Start_to_End_1: "星期五 15:10 ~ 16:00",
    Teacher: "Cat",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 ) this.Timearr_Fri.push(1);
            else this.Timearr_Fri.push(0);
        }
    },

    amount_current: 50,
    amount_full: 60,
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    }
};

Class_Spain.Schedule_Mon();
Class_Spain.Schedule_Tue();
Class_Spain.Schedule_Wed();
Class_Spain.Schedule_Thu();
Class_Spain.Schedule_Fri();

var Class_Red_Book= {//學分:3
    No: 4,
    depart: "哲學",
    name: "毛語錄",
    Time_Start_to_End_1: "星期一 13:10 ~ 14:00",
    Time_Start_to_End_2: "星期一 14:10 ~ 15:00",
    Time_Start_to_End_3: "星期三 15:10 ~ 16:00",
    Teacher: "毛澤東",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 6 || i == 7 ) this.Timearr_Mon.push(1);
            else this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 ) this.Timearr_Wed.push(1);
            else this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
           this.Timearr_Fri.push(0);
        }
    },

    amount_current: 60,
    amount_full: 90,
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    }
};

Class_Red_Book.Schedule_Mon();
Class_Red_Book.Schedule_Tue();
Class_Red_Book.Schedule_Wed();
Class_Red_Book.Schedule_Thu();
Class_Red_Book.Schedule_Fri();

var Class_System = {//學分:3
    No: 5,//ID
    depart: "資工",//系級
    name: "作業系統",
    Time_Start_to_End_1: "星期二 14:10 ~ 15:00",
    Time_Start_to_End_2: "星期三 15:10 ~ 16:00",
    Time_Start_to_End_3: "星期三 16:10 ~ 17:00",
    Teacher: "Lin",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 7 ) this.Timearr_Mon.push(1);
            else this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 7 ) this.Timearr_Tue.push(1);
            else this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 || i == 9 ) this.Timearr_Wed.push(1);
            else this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 58,//目前人數
    amount_full: 60,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限


};

Class_System.Schedule_Mon();
Class_System.Schedule_Tue();
Class_System.Schedule_Wed();
Class_System.Schedule_Thu();
Class_System.Schedule_Fri();

var Class_AI = {//學分:3
    No: 6,//ID
    depart: "資工",//系級
    name: "人工智慧",
    Time_Start_to_End_1: "星期三 13:10 ~ 14:00",
    Time_Start_to_End_2: "星期三 14:10 ~ 15:00",
    Time_Start_to_End_3: "星期三 15:10 ~ 16:00",
    Teacher: "AI",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 6 || i == 7 || i== 8 ) this.Timearr_Wed.push(1);
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 70,//目前人數
    amount_full: 80,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限


};

Class_AI.Schedule_Mon();
Class_AI.Schedule_Tue();
Class_AI.Schedule_Wed();
Class_AI.Schedule_Thu();
Class_AI.Schedule_Fri();

var Class_Data = {//學分:2
    No: 7,//ID
    depart: "資工",//系級
    name: "資料庫",
    Time_Start_to_End_1: "星期四 8:10 ~ 9:00",
    Time_Start_to_End_2: "星期四 9:10 ~ 10:00",
    Teacher: "llllll",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 1 || i == 2 ) this.Timearr_Thu.push(1);
            else this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 72,//目前人數
    amount_full: 90,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限

};

Class_Data.Schedule_Mon();
Class_Data.Schedule_Tue();
Class_Data.Schedule_Wed();
Class_Data.Schedule_Thu();
Class_Data.Schedule_Fri();

var Class_Think = {//學分:2
    No: 8,//ID
    depart: "通識",//系級
    name: "批判思考",
    Time_Start_to_End_1: "星期一 18:30 ~ 19:20",
    Time_Start_to_End_2: "星期一 19:30 ~ 20:20",
    Teacher: "TTTTTT",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 11 || i == 12 ) this.Timearr_Mon.push(1);
            else this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 47,//目前人數
    amount_full: 60,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限

};

Class_Think.Schedule_Mon();
Class_Think.Schedule_Tue();
Class_Think.Schedule_Wed();
Class_Think.Schedule_Thu();
Class_Think.Schedule_Fri();

var Class_Music = {//學分:2
    No: 9,//ID
    depart: "通識",//系級
    name: "音樂",
    Time_Start_to_End_1: "星期二 13:10 ~ 14:00",
    Time_Start_to_End_2: "星期二 14:10 ~ 15:00",
    Teacher: "Ama",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 6 || i == 7 ) this.Timearr_Tue.push(1);
            else this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },
    amount_current: 58,//目前人數
    amount_full: 70,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限

};

Class_Music.Schedule_Mon();
Class_Music.Schedule_Tue();
Class_Music.Schedule_Wed();
Class_Music.Schedule_Thu();
Class_Music.Schedule_Fri();

var Class_Text = {//學分:2
    No: 10,//ID
    depart: "通識",//系級
    name: "專案管理",
    Time_Start_to_End_1: "星期一 18:30 ~ 19:20",
    Time_Start_to_End_2: "星期一 19:30 ~ 20:20",
    Teacher: "Idontknow",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 11 || i == 12 ) this.Timearr_Mon.push(1);
            else this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 47,//目前人數
    amount_full: 60,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限

};

Class_Text.Schedule_Mon();
Class_Text.Schedule_Tue();
Class_Text.Schedule_Wed();
Class_Text.Schedule_Thu();
Class_Text.Schedule_Fri();

var Class_programlanguange = {//學分:3
    No: "11",//ID
    depart: "資訊",//系級
    name: "程式設計",
    Time_Start_to_End_1: "星期一 13:10 ~ 14:00",
    Time_Start_to_End_1: "星期一 14:10 ~ 15:00",
    Time_Start_to_End_3: "星期四 16:10 ~ 17:00",
    Teacher: "ZZZ",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 6 || i == 7 ) this.Timearr_Mon.push(1);
            else this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 9 ) this.Timearr_Thu.push(1);
            else this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 49,//目前人數
    amount_full: 60,//額滿人數
    full_flag: function () {
        if (this.amount_current == this.amount_full) {
            alert("人數已滿");
        }
    },//額滿上限
};

Class_programlanguange.Schedule_Mon();
Class_programlanguange.Schedule_Tue();
Class_programlanguange.Schedule_Wed();
Class_programlanguange.Schedule_Thu();
Class_programlanguange.Schedule_Fri();

var Class_webdesign = {//學分:3
    No: "12",//ID
    depart: "資訊",//系級
    name: "Web程式設計",
    Time_Start_to_End_1: "星期二 13:10 ~ 14:00",
    Time_Start_to_End_2: "星期二 14:10 ~ 15:00",
    Time_Start_to_End_3: "星期三 16:10 ~ 17:00",
    Teacher: "XXX",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 6 || i == 7 ) this.Timearr_Tue.push(1);
            else this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 9 ) this.Timearr_Wed.push(1);
            else this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 59,//目前人數
    amount_full: 60,//額滿人數
    full_flag: function () {
        if (this.amount_current == this.amount_full) {
            alert("人數已滿");
        }
    },//額滿上限
};

Class_webdesign.Schedule_Mon();
Class_webdesign.Schedule_Tue();
Class_webdesign.Schedule_Wed();
Class_webdesign.Schedule_Thu();
Class_webdesign.Schedule_Fri();

var Class_database = {//學分:3
    No: "13",//ID
    depart: "資訊",//系級
    name: "資料庫系統",
    Time_Start_to_End_1: "星期二 09:10 ~ 10:00",
    Time_Start_to_End_2: "星期五 15:10 ~ 16:00",
    Time_Start_to_End_3: "星期五 16:10 ~ 17:00",
    Teacher: "CCC",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 2 ) this.Timearr_Tue.push(1);
            else this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 || i == 9 ) this.Timearr_Fri.push(1);
            else this.Timearr_Fri.push(0);
        }
    },

    amount_current: 48,//目前人數
    amount_full: 60,//額滿人數
    full_flag: function () {
        if (this.amount_current == this.amount_full) {
            alert("人數已滿");
        }
    },//額滿上限
};

Class_database.Schedule_Mon();
Class_database.Schedule_Tue();
Class_database.Schedule_Wed();
Class_database.Schedule_Thu();
Class_database.Schedule_Fri();

var Class_logicdesign = {//學分:3
    No: "14",//ID
    depart: "資訊",//系級
    name: "邏輯設計",
    Time_Start_to_End_1: "星期五 09:10 ~ 10:00",
    Time_Start_to_End_2: "星期五 10:10 ~ 11:00",
    Time_Start_to_End_3: "星期五 11:10 ~ 12:00",
    Teacher: "JJXX",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 2 || i == 3 || i == 4 ) this.Timearr_Fri.push(1);
            else this.Timearr_Fri.push(0);
        }
    },

    amount_current: 21,//目前人數
    amount_full: 60,//額滿人數
    full_flag: function () {
        if (this.amount_current == this.amount_full) {
            alert("人數已滿");
        }
    },//額滿上限
};
//3
Class_logicdesign.Schedule_Mon();
Class_logicdesign.Schedule_Tue();
Class_logicdesign.Schedule_Wed();
Class_logicdesign.Schedule_Thu();
Class_logicdesign.Schedule_Fri();

var Class_Basketball = {//學分:2
    No: "15",
    depart: "體育",
    name: "籃球",
    Time_Start_to_End_1: "星期二 14:10 ~ 15:00",
    Time_Start_to_End_2: "星期二 15:10 ~ 16:00",
    Teacher: "Coach邱",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 7 || i == 8 ) this.Timearr_Tue.push(1);
            else this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 25,
    amount_full: 30,
    full_flag: function () {
        if (this.amount_current === this.amount_full) {
            alert("人數已滿");
        }
    }
};

Class_Basketball.Schedule_Mon();
Class_Basketball.Schedule_Tue();
Class_Basketball.Schedule_Wed();
Class_Basketball.Schedule_Thu();
Class_Basketball.Schedule_Fri();

var Class_Meditation = {//學分:1
    No: "16",
    depart: "通識",
    name: "冥想",
    Time_Start_to_End_1: "星期四 15:10 ~ 16:00",
    Teacher: "Toyz",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 ) this.Timearr_Thu.push(1);
            else this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 20,
    amount_full: 25,
    full_flag: function () {
        if (this.amount_current === this.amount_full) {
            alert("人數已滿");
        }
    }
};
//4
Class_Meditation.Schedule_Mon();
Class_Meditation.Schedule_Tue();
Class_Meditation.Schedule_Wed();
Class_Meditation.Schedule_Thu();
Class_Meditation.Schedule_Fri();

var Class_Comics_Japan2 = {//學分:2
    No: "17",//ID
    depart: "外文",//系級
    name: "漫畫日語",
    Time_Start_to_End_1: "星期二 8:10 ~ 9:00",
    Time_Start_to_End_2: "星期二 9:10 ~ 10:00",
    Teacher: "藤吉時人",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 1 || i == 2 ) this.Timearr_Tue.push(1);
            else this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 ) this.Timearr_Tue.push(1);
            else this.Timearr_Fri.push(0);
        }
    },

    amount_current: 50,//目前人數
    amount_full: 50,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限
};

Class_Comics_Japan2.Schedule_Mon();
Class_Comics_Japan2.Schedule_Tue();
Class_Comics_Japan2.Schedule_Wed();
Class_Comics_Japan2.Schedule_Thu();
Class_Comics_Japan2.Schedule_Fri();

var Class_Fitness_Concept2 = {//學分:2
    No: "18",//ID
    depart: "體育選修",//系級
    name: "健身基礎觀念",
    Time_Start_to_End_1: "星期四 15:10 ~ 16:00",
    Time_Start_to_End_2: "星期四 16:10 ~ 17:00",
    Teacher: "李鴻俊",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 || i == 9 ) this.Timearr_Thu.push(1);
            else this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 49,//目前人數
    amount_full: 65,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限
};

Class_Fitness_Concept2.Schedule_Mon();
Class_Fitness_Concept2.Schedule_Tue();
Class_Fitness_Concept2.Schedule_Wed();
Class_Fitness_Concept2.Schedule_Thu();
Class_Fitness_Concept2.Schedule_Fri();

var Class_Tennis1= {//學分:2
    No: "19",//ID
    depart: "體育選修",//系級
    name: "網球",
    Time_Start_to_End_1: "星期三 15:10 ~ 16:00",
    Time_Start_to_End_2: "星期三 16:10 ~ 17:00",
    Teacher: "吳天慶",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 8 || i == 9 ) this.Timearr_Wed.push(1);
            else this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },

    amount_current: 57,//目前人數
    amount_full: 65,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限
};

Class_Tennis1.Schedule_Mon();
Class_Tennis1.Schedule_Tue();
Class_Tennis1.Schedule_Wed();
Class_Tennis1.Schedule_Thu();
Class_Tennis1.Schedule_Fri();

var Class_Unix= {//學分:2
    No: "20",//ID
    depart: "資訊二甲",//系級
    name: "Unix應用實務",
    Time_Start_to_End_1: "星期三 10:10 ~ 11:00",
    Time_Start_to_End_2: "星期三 11:10 ~ 12:00",
    Teacher: "陳傑",

    Timearr_Mon: [],
    Schedule_Mon: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Mon.push(0);
        }
    },

    Timearr_Tue: [],
    Schedule_Tue: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Tue.push(0);
        }
    },

    Timearr_Wed: [],
    Schedule_Wed: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            if( i == 3 || i == 4 ) this.Timearr_Wed.push(1);
            else this.Timearr_Wed.push(0);
        }
    },

    Timearr_Thu: [],
    Schedule_Thu: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Thu.push(0);
        }
    },

    Timearr_Fri: [],
    Schedule_Fri: function(){
        for( let i = 1 ; i <= 12 ; i++ ){
            this.Timearr_Fri.push(0);
        }
    },
    
    amount_current: 37,//目前人數
    amount_full: 50,//額滿人數
    full_flag: function(){
        if( this.amount_current == this.amount_full ){
            alert("人數已滿");
        }
    },//額滿上限
};

Class_Unix.Schedule_Mon();
Class_Unix.Schedule_Tue();
Class_Unix.Schedule_Wed();
Class_Unix.Schedule_Thu();
Class_Unix.Schedule_Fri();


