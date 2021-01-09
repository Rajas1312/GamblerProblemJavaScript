console.log("welcome to gambler problem")
const INITIAL_STAKE=100
let stake=100;
let win=1;
let lose=1
let days=1
let amount_for_days=0;
class Gambler{
    getGame(){
        while(days<=20){
            while(stake!=0){
                let result=Math.ceil(Math.random()*10%2)
                if(result==1){
                    console.log("won the game")
                    stake=stake+win
                    if(stake>=150){
                        amount_for_days=amount_for_days+stake;
                        days++
                        break;
                    }
                }
                if(result==2){
                    console.log("lost the game")
                    stake=stake-lose
                    if(stake<=50){
                        amount_for_days=amount_for_days+stake
                        days++
                        break;
                    }
                }
            }
            stake=100;
        }
        console.log("amoutnt after 20 days",amount_for_days)
    }
}
module.exports=new Gambler();