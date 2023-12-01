let Class_01 = {
    focus01_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus01_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus01_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus01_flag = 0;
        }
        localStorage.setItem('focus01_flag', this.focus01_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus01");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus01_flag');
        if (focusFlagValue !== null) {
            this.focus01_flag = parseInt(focusFlagValue);
            //alert(this.focus01_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus01_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_01.init();

let Class_02 = {
    focus02_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus02_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus02_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus02_flag = 0;
        }
        localStorage.setItem('focus02_flag', this.focus02_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus02");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus02_flag');
        if (focusFlagValue !== null) {
            this.focus02_flag = parseInt(focusFlagValue);
            // alert(this.focus02_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus02_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_02.init();

let Class_03 = {
    focus03_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus03_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus03_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus03_flag = 0;
        }
        localStorage.setItem('focus03_flag', this.focus03_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus03");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus03_flag');
        if (focusFlagValue !== null) {
            this.focus03_flag = parseInt(focusFlagValue);
            //alert(this.focus03_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus03_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_03.init();

let Class_04 = {
    focus04_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus04_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus04_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus04_flag = 0;
        }
        localStorage.setItem('focus04_flag', this.focus04_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus04");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus04_flag');
        if (focusFlagValue !== null) {
            this.focus04_flag = parseInt(focusFlagValue);
            //alert(this.focus04_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus04_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_04.init();

let Class_05 = {
    focus05_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus05_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus05_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus05_flag = 0;
        }
        localStorage.setItem('focus05_flag', this.focus05_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus05");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus05_flag');
        if (focusFlagValue !== null) {
            this.focus05_flag = parseInt(focusFlagValue);
            //alert(this.focus05_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus05_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_05.init();

let Class_06 = {
    focus06_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus06_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus06_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus06_flag = 0;
        }
        localStorage.setItem('focus06_flag', this.focus06_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus06");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus06_flag');
        if (focusFlagValue !== null) {
            this.focus06_flag = parseInt(focusFlagValue);
            //alert(this.focus06_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus06_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_06.init();

let Class_07 = {
    focus07_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus07_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus07_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus07_flag = 0;
        }
        localStorage.setItem('focus07_flag', this.focus07_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus07");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus07_flag');
        if (focusFlagValue !== null) {
            this.focus07_flag = parseInt(focusFlagValue);
            //alert(this.focus07_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus07_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_07.init();

let Class_08 = {
    focus08_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus08_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus08_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus08_flag = 0;
        }
        localStorage.setItem('focus08_flag', this.focus08_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus08");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus08_flag');
        if (focusFlagValue !== null) {
            this.focus08_flag = parseInt(focusFlagValue);
            //alert(this.focus08_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus08_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_08.init();

let Class_09 = {
    focus09_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus09_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus09_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus09_flag = 0;
        }
        localStorage.setItem('focus09_flag', this.focus09_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus09");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus09_flag');
        if (focusFlagValue !== null) {
            this.focus09_flag = parseInt(focusFlagValue);
            //alert(this.focus09_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus09_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_09.init();

let Class_10 = {
    focus10_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus10_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus10_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus10_flag = 0;
        }
        localStorage.setItem('focus10_flag', this.focus10_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus10");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus10_flag');
        if (focusFlagValue !== null) {
            this.focus10_flag = parseInt(focusFlagValue);
            //alert(this.focus10_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus10_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
};

Class_10.init();

let Class_11 = {
    focus11_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus11_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus11_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus11_flag = 0;
        }
        localStorage.setItem('focus11_flag', this.focus11_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus11");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus11_flag');
        if (focusFlagValue !== null) {
            this.focus11_flag = parseInt(focusFlagValue);
            //alert(this.focus11_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus11_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_11.init();

let Class_12 = {
    focus12_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus12_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus12_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus12_flag = 0;
        }
        localStorage.setItem('focus12_flag', this.focus12_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus12");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus12_flag');
        if (focusFlagValue !== null) {
            this.focus12_flag = parseInt(focusFlagValue);
            //alert(this.focus12_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus12_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_12.init();

let Class_13 = {
    focus13_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus13_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus13_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus13_flag = 0;
        }
        localStorage.setItem('focus13_flag', this.focus13_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus13");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus13_flag');
        if (focusFlagValue !== null) {
            this.focus13_flag = parseInt(focusFlagValue);
            //alert(this.focus13_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus13_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_13.init();

let Class_14 = {
    focus14_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus14_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus14_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus14_flag = 0;
        }
        localStorage.setItem('focus14_flag', this.focus14_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus14");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus14_flag');
        if (focusFlagValue !== null) {
            this.focus14_flag = parseInt(focusFlagValue);
            //alert(this.focus14_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus14_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_14.init();

let Class_15 = {
    focus15_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus15_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus15_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus15_flag = 0;
        }
        localStorage.setItem('focus15_flag', this.focus15_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus15");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus15_flag');
        if (focusFlagValue !== null) {
            this.focus15_flag = parseInt(focusFlagValue);
            //alert(this.focus15_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus15_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_15.init();

let Class_16 = {
    focus16_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus16_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus16_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus16_flag = 0;
        }
        localStorage.setItem('focus16_flag', this.focus16_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus16");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus16_flag');
        if (focusFlagValue !== null) {
            this.focus16_flag = parseInt(focusFlagValue);
            //alert(this.focus16_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus16_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_16.init();

let Class_17 = {
    focus17_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus17_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus17_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus17_flag = 0;
        }
        localStorage.setItem('focus17_flag', this.focus17_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus17");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus17_flag');
        if (focusFlagValue !== null) {
            this.focus17_flag = parseInt(focusFlagValue);
            //alert(this.focus17_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus17_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_17.init();

let Class_18 = {
    focus18_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus18_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus18_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus18_flag = 0;
        }
        localStorage.setItem('focus18_flag', this.focus18_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus18");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus18_flag');
        if (focusFlagValue !== null) {
            this.focus18_flag = parseInt(focusFlagValue);
            //alert(this.focus18_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus18_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_18.init();

let Class_19 = {
    focus19_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus19_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus19_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus19_flag = 0;
        }
        localStorage.setItem('focus19_flag', this.focus19_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus19");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus19_flag');
        if (focusFlagValue !== null) {
            this.focus19_flag = parseInt(focusFlagValue);
            //alert(this.focus19_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus19_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_19.init();

let Class_20 = {
    focus20_flag: 0,
    button: null,

    handleClick: function(event) {
        if (this.focus20_flag == 0) {
            this.button.innerText = "取消關注";
            this.focus20_flag = 1;
        } else {
            this.button.innerText = "關注";
            this.focus20_flag = 0;
        }
        localStorage.setItem('focus20_flag', this.focus20_flag.toString());
    },

    addEventListenerToButton: function() {
        this.button = document.getElementById("Focus20");
        if (this.button) {
            this.button.addEventListener("click", this.handleClick.bind(this));
        } else {
            console.error("Button not found.");
        }
    },

    init: function() {
        const focusFlagValue = localStorage.getItem('focus20_flag');
        if (focusFlagValue !== null) {
            this.focus20_flag = parseInt(focusFlagValue);
            //alert(this.focus20_flag);
            this.addEventListenerToButton();
            this.setButtonInnerText();
        } else {
            this.addEventListenerToButton();
        }
    },

    setButtonInnerText: function() {
        if( this.button != null ){
            if (this.focus20_flag === 0) {
                this.button.innerText = "關注";
            } else {
                this.button.innerText = "取消關注";
            }
        }
    },
}

Class_20.init();