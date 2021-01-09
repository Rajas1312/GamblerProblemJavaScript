console.log("welcome to gambler problem")
const INITIAL_STAKE=100
let stake=100;
let win=1;
let lose=1
let days=1
let amount_for_days=0;
let luckiest_day=0;
let unluckiest_day=0;
class Gambler{
    getGame(){
        while(days<=20){
            while(stake!=0){
                let result=Math.ceil(Math.random()*10%2)
                if(result==1){
                    console.log("won the game")
                    stake=stake+win
                    if(stake>=150){
                        console.log("the amonut won ",stake-INITIAL_STAKE)
                        console.log("winning day",days)
                        luckiest_day++
                        amount_for_days=amount_for_days+stake;
                        days++
                        break;
                    }
                }
                if(result==2){
                    console.log("lost the game")
                    stake=stake-lose
                    if(stake<=50){
                        console.log("the amount lost ",Math.abs(stake-INITIAL_STAKE))
                        console.log("losing day",days)
                        unluckiest_day++
                        amount_for_days=amount_for_days+stake
                        days++
                        break;
                    }
                }
            }
            stake=100;
        }
        console.log("amoutnt after 20 days",amount_for_days)
        console.log("number of luckiest days are ",luckiest_day)
        console.log("number of unluckiest days are ",unluckiest_day)
    }
    checkForPlayAnother=()=>{
        if(luckiest_day>unluckiest_day){
            stake=100;
            win=1;
            lose=1
            days=1
            amount_for_days=0;
            luckiest_day=0;
            unluckiest_day=0;
            this.getGame()
        }else{
            console.log("gambler dose not want to play more")
        }
    }    
}
module.exports=new Gambler();