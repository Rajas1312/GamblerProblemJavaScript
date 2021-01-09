console.log("welcome to gambler problem")
const INITIAL_STAKE=100
let stake=100;
let win=1;
let lose=1
class Gambler{
    getGame(){
        let result=Math.ceil(Math.random()*10%2)
        if(result==1){
            console.log("won the game")
            stake=stake+win
            if(stake>=150){
                break;
            }
            
        }
        if(result==2){
            console.log("lost the game")
            stake=stake-lose
            if(stake<=50){
                break;
            }
        }
    }
}
module.exports=new Gambler();