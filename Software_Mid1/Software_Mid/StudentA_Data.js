window.StudentA = {
    score: 12,
    score_min: 10,
    score_full: 25,
    
    A: function(){
        localStorage.setItem('MyScoreA',  this.score.toString() );
    },
    full: function(){
        if( this.score > 25 ){
            alert("你的學分滿了!!!");
        }
    }
}

// StudentA.A();

