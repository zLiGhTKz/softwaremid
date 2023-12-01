let Show_Class = {
    Mon_01_Class: document.getElementById("Mon01"),
    Tue_01_Class: document.getElementById("Tue01"),
    Wed_01_Class: document.getElementById("Wed01"),
    Thu_01_Class: document.getElementById("Thu01"),
    Fri_01_Class: document.getElementById("Fri01"),

    Mon_02_Class: document.getElementById("Mon02"),
    Tue_02_Class: document.getElementById("Tue02"),
    Wed_02_Class: document.getElementById("Wed02"),
    Thu_02_Class: document.getElementById("Thu02"),
    Fri_02_Class: document.getElementById("Fri02"),

    Mon_03_Class: document.getElementById("Mon03"),
    Tue_03_Class: document.getElementById("Tue03"),
    Wed_03_Class: document.getElementById("Wed03"),
    Thu_03_Class: document.getElementById("Thu03"),
    Fri_03_Class: document.getElementById("Fri03"),

    Mon_04_Class: document.getElementById("Mon04"),
    Tue_04_Class: document.getElementById("Tue04"),
    Wed_04_Class: document.getElementById("Wed04"),
    Thu_04_Class: document.getElementById("Thu04"),
    Fri_04_Class: document.getElementById("Fri04"),

    Mon_05_Class: document.getElementById("Mon05"),
    Tue_05_Class: document.getElementById("Tue05"),
    Wed_05_Class: document.getElementById("Wed05"),
    Thu_05_Class: document.getElementById("Thu05"),
    Fri_05_Class: document.getElementById("Fri05"),

    Mon_06_Class: document.getElementById("Mon06"),
    Tue_06_Class: document.getElementById("Tue06"),
    Wed_06_Class: document.getElementById("Wed06"),
    Thu_06_Class: document.getElementById("Thu06"),
    Fri_06_Class: document.getElementById("Fri06"),

    Mon_07_Class: document.getElementById("Mon07"),
    Tue_07_Class: document.getElementById("Tue07"),
    Wed_07_Class: document.getElementById("Wed07"),
    Thu_07_Class: document.getElementById("Thu07"),
    Fri_07_Class: document.getElementById("Fri07"),

    Mon_08_Class: document.getElementById("Mon08"),
    Tue_08_Class: document.getElementById("Tue08"),
    Wed_08_Class: document.getElementById("Wed08"),
    Thu_08_Class: document.getElementById("Thu08"),
    Fri_08_Class: document.getElementById("Fri08"),

    Mon_09_Class: document.getElementById("Mon09"),
    Tue_09_Class: document.getElementById("Tue09"),
    Wed_09_Class: document.getElementById("Wed09"),
    Thu_09_Class: document.getElementById("Thu09"),
    Fri_09_Class: document.getElementById("Fri09"),

    Mon_10_Class: document.getElementById("Mon10"),
    Tue_10_Class: document.getElementById("Tue10"),
    Wed_10_Class: document.getElementById("Wed10"),
    Thu_10_Class: document.getElementById("Thu10"),
    Fri_10_Class: document.getElementById("Fri10"),

    Mon_11_Class: document.getElementById("Mon11"),
    Tue_11_Class: document.getElementById("Tue11"),
    Wed_11_Class: document.getElementById("Wed11"),
    Thu_11_Class: document.getElementById("Thu11"),
    Fri_11_Class: document.getElementById("Fri11"),

    Mon_12_Class: document.getElementById("Mon12"),
    Tue_12_Class: document.getElementById("Tue12"),
    Wed_12_Class: document.getElementById("Wed12"),
    Thu_12_Class: document.getElementById("Thu12"),
    Fri_12_Class: document.getElementById("Fri12"),

    Score_Total: document.getElementById("Total"),
    ShowUScore: function(){
        if( localStorage.getItem('My_Class_Static') ) My_Class_Static = JSON.parse(localStorage.getItem('My_Class_Static'));

        console.log(My_Class_Static);

        let tt = localStorage.getItem('MyScoreA');
        this.Score_Total.innerHTML = "總學分:    " + tt;
    },

    AppendClass01: function(){
        // alert(My01.join01);
        if( My01.join01 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Japan.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                
                if( Class_Japan.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                
                if( Class_Japan.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                /*--------------------------------------------------------------------*/

                if( Class_Japan.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                
                if( Class_Japan.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML = `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML = `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                /*--------------------------------------------------------------------*/

                if( Class_Japan.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                if( Class_Japan.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                /*--------------------------------------------------------------------*/

                if( Class_Japan.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }

                /*--------------------------------------------------------------------*/

                if( Class_Japan.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
                if( Class_Japan.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Japan.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass02: function(){
        // alert(My01.join01);
        if( My02.join02 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Korea.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;

                }
                if( Class_Korea.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Korea.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Korea.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Korea.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Korea.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
                if( Class_Korea.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Korea.name}</td>`;
                }
            }
        }
    },
    
    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass03: function(){
        // alert(My01.join01);
        if( My03.join03 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Spain.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Spain.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `
                    <td>${Class_Spain.name}</td>
                `;
                }
                if( Class_Spain.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Spain.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Spain.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML = `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Spain.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
                if( Class_Spain.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Spain.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass04: function(){
        // alert(My01.join01);
        if( My04.join04 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Red_Book.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Red_Book.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Red_Book.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Red_Book.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Red_Book.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
                if( Class_Red_Book.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Red_Book.name}</td>`;
                }
            }
        }
    },
    
    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass05: function(){
        // alert(My01.join01);
        if( My05.join05 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_System.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_System.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_System.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_System.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_System.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
                if( Class_System.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_System.name}</td>`;
                }
            }
        }
    },
    
    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass06: function(){
        // alert(My01.join01);
        if( My06.join06 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_AI.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_AI.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_AI.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_AI.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_AI.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
                if( Class_AI.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_AI.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass07: function(){
        // alert(My01.join01);
        if( My07.join07 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Data.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Data.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Data.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Data.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Data.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
                if( Class_Data.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Data.name}</td>`;
                }
            }
        }
    },
    
    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass08: function(){
        // alert(My01.join01);
        if( My08.join08 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Think.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Think.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Think.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Think.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Think.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
                if( Class_Think.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Think.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass09: function(){
        // alert(My01.join01);
        if( My09.join09 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Music.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Music.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Music.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Music.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Music.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
                if( Class_Music.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Music.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass10: function(){
        // alert(My01.join01);
        if( My10.join10 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Text.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Text.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Text.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Text.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Text.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
                if( Class_Text.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Text.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass11: function(){
        // alert(My01.join01);
        if( My11.join11 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_programlanguange.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_programlanguange.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_programlanguange.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_programlanguange.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_programlanguange.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
                if( Class_programlanguange.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_programlanguange.name}</td>`;
                }
            }
        }
    },
    
    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass12: function(){
        // alert(My01.join01);
        if( My12.join12 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_webdesign.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_webdesign.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_webdesign.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_webdesign.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_webdesign.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
                if( Class_webdesign.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_webdesign.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass13: function(){
        // alert(My01.join01);
        if( My13.join13 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_database.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_database.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_database.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_database.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_database.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
                if( Class_database.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_database.name}</td>`;
                }
            }
        }
    },
    
    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass14: function(){
        // alert(My01.join01);
        if( My14.join14 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_logicdesign.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_logicdesign.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_logicdesign.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_logicdesign.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_logicdesign.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
                if( Class_logicdesign.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_logicdesign.name}</td>`;
                }
            }
        }
    },
    
    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass15: function(){
        // alert(My01.join01);
        if( My15.join15 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Basketball.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Basketball.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Basketball.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Basketball.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Basketball.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
                if( Class_Basketball.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Basketball.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass16: function(){
        // alert(My01.join01);
        if( My16.join16 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Meditation.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Meditation.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Meditation.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Meditation.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
    
                /*--------------------------------------------------------------------*/
    
                if( Class_Meditation.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
                if( Class_Meditation.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Meditation.name}</td>`;
                }
            }
        }
    },
    
    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass17: function(){
        // alert(My01.join01);
        if( My17.join17 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Comics_Japan2.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
        
                /*--------------------------------------------------------------------*/
        
                if( Class_Comics_Japan2.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
        
                /*--------------------------------------------------------------------*/
        
                if( Class_Comics_Japan2.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
        
                /*--------------------------------------------------------------------*/
        
                if( Class_Comics_Japan2.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
        
                /*--------------------------------------------------------------------*/
        
                if( Class_Comics_Japan2.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
                if( Class_Comics_Japan2.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Comics_Japan2.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass18: function(){
        // alert(My01.join01);
        if( My18.join18 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Fitness_Concept2.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
        
                /*--------------------------------------------------------------------*/
        
                if(Class_Fitness_Concept2.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
        
                /*--------------------------------------------------------------------*/
        
                if(Class_Fitness_Concept2.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
        
                /*--------------------------------------------------------------------*/
        
                if(Class_Fitness_Concept2.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
        
                /*--------------------------------------------------------------------*/
        
                if(Class_Fitness_Concept2.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
                if(Class_Fitness_Concept2.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Fitness_Concept2.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass19: function(){
        // alert(My01.join01);
        if( My19.join19 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Tennis1.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
            
                /*--------------------------------------------------------------------*/
            
                if( Class_Tennis1.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
            
                /*--------------------------------------------------------------------*/
            
                if( Class_Tennis1.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
            
                /*--------------------------------------------------------------------*/
            
                if( Class_Tennis1.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
            
                /*--------------------------------------------------------------------*/
            
                if( Class_Tennis1.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
                if( Class_Tennis1.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Tennis1.name}</td>`;
                }
            }
        }
    },

    /*---------------------------------------------------------------------------------------------------------------------*/

    AppendClass20: function(){
        // alert(My01.join01);
        if( My20.join20 == 1 ){
            // alert("lll");
            for( let i = 0 ; i <= 12 ; i++ ){
                if( Class_Unix.Timearr_Mon[0] == 1 ){
                    this.Mon_01_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[1] == 1 ){
                    this.Mon_02_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[2] == 1 ){
                    this.Mon_03_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[3] == 1 ){
                    this.Mon_04_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[4] == 1 ){
                    this.Mon_05_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[5] == 1 ){
                    this.Mon_06_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[6] == 1 ){
                    this.Mon_07_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[7] == 1 ){
                    this.Mon_08_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[8] == 1 ){
                    this.Mon_09_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[9] == 1 ){
                    this.Mon_10_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[10] == 1 ){
                    this.Mon_11_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Mon[11] == 1 ){
                    this.Mon_12_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                
                /*--------------------------------------------------------------------*/
                
                if( Class_Unix.Timearr_Tue[0] == 1 ){
                    this.Tue_01_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[1] == 1 ){
                    this.Tue_02_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[2] == 1 ){
                    this.Tue_03_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[3] == 1 ){
                    this.Tue_04_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[4] == 1 ){
                    this.Tue_05_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[5] == 1 ){
                    this.Tue_06_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[6] == 1 ){
                    this.Tue_07_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[7] == 1 ){
                    this.Tue_08_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[8] == 1 ){
                    this.Tue_09_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[9] == 1 ){
                    this.Tue_10_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[10] == 1 ){
                    this.Tue_11_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Tue[11] == 1 ){
                    this.Tue_12_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                
                /*--------------------------------------------------------------------*/
                
                if( Class_Unix.Timearr_Wed[0] == 1 ){
                    this.Wed_01_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[1] == 1 ){
                    this.Wed_02_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[2] == 1 ){
                    this.Wed_03_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[3] == 1 ){
                    this.Wed_04_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[4] == 1 ){
                    this.Wed_05_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[5] == 1 ){
                    this.Wed_06_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[6] == 1 ){
                    this.Wed_07_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[7] == 1 ){
                    this.Wed_08_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[8] == 1 ){
                    this.Wed_09_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[9] == 1 ){
                    this.Wed_10_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[10] == 1 ){
                    this.Wed_11_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Wed[11] == 1 ){
                    this.Wed_12_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                
                /*--------------------------------------------------------------------*/
                
                if( Class_Unix.Timearr_Thu[0] == 1 ){
                    this.Thu_01_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[1] == 1 ){
                    this.Thu_02_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[2] == 1 ){
                    this.Thu_03_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[3] == 1 ){
                    this.Thu_04_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[4] == 1 ){
                    this.Thu_05_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[5] == 1 ){
                    this.Thu_06_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[6] == 1 ){
                    this.Thu_07_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[7] == 1 ){
                    this.Thu_08_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[8] == 1 ){
                    this.Thu_09_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[9] == 1 ){
                    this.Thu_10_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[10] == 1 ){
                    this.Thu_11_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Thu[11] == 1 ){
                    this.Thu_12_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                
                /*--------------------------------------------------------------------*/
                
                if( Class_Unix.Timearr_Fri[0] == 1 ){
                    this.Fri_01_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[1] == 1 ){
                    this.Fri_02_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[2] == 1 ){
                    this.Fri_03_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[3] == 1 ){
                    this.Fri_04_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[4] == 1 ){
                    this.Fri_05_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[5] == 1 ){
                    this.Fri_06_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[6] == 1 ){
                    this.Fri_07_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[7] == 1 ){
                    this.Fri_08_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[8] == 1 ){
                    this.Fri_09_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[9] == 1 ){
                    this.Fri_10_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[10] == 1 ){
                    this.Fri_11_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
                if( Class_Unix.Timearr_Fri[11] == 1 ){
                    this.Fri_12_Class.innerHTML =  `<td>${Class_Unix.name}</td>`;
                }
            }
        }
    }
}

Show_Class.ShowUScore();
Show_Class.AppendClass01();
Show_Class.AppendClass02();
Show_Class.AppendClass03();
Show_Class.AppendClass04();
Show_Class.AppendClass05();
Show_Class.AppendClass06();
Show_Class.AppendClass07();
Show_Class.AppendClass08();
Show_Class.AppendClass09();
Show_Class.AppendClass10();
Show_Class.AppendClass11();
Show_Class.AppendClass12();
Show_Class.AppendClass13();
Show_Class.AppendClass14();
Show_Class.AppendClass15();
Show_Class.AppendClass16();
Show_Class.AppendClass17();
Show_Class.AppendClass18();
Show_Class.AppendClass19();
Show_Class.AppendClass20();