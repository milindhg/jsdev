/* https://leetcode.com/problems/reveal-cards-in-increasing-order/description/

In a deck of cards, every card has a unique integer.  You can order the deck in any order you want.

Initially, all the cards start face down (unrevealed) in one deck.

Now, you do the following steps repeatedly, until all cards are revealed:

Take the top card of the deck, reveal it, and take it out of the deck.
If there are still cards in the deck, put the next top card of the deck at the bottom of the deck.
If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
Return an ordering of the deck that would reveal the cards in increasing order.

The first entry in the answer is considered to be the top of the deck.


Solution:   https://leetcode.com/accounts/login/?next=/submissions/detail/202205077/ beats 20.91% JS Submissions.
            Simple approach is to keep filling alternate empty spots.
            1. keep adding elements already visited/added to answer into a set. This is to basically have a end condition for the while loop.
            2. Keep traversing the answer array in circular fashion (i.e. using the mod operator on end of array.) and keep skipping 1 empty spot and fill the next empty spot.
            doing this you will get the answer.

 */

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    var len = deck.length;
    // console.log("deck = " + deck);
    deck = deck.sort(function(a,b){
        return a-b;
    });
    //console.log("deck = " + deck);
    var j = 0;
    var ans = [];
    var i = 0;
    while(i<len){
        ans.push('$');
        i++;
    }
    
    var mySet = new Set();
    ans[0] = deck[0];
    i = 0;
    j=1;
    mySet.add(deck[0]);
    
    while(mySet.size<len){
        var dollarsCount = 0;
        while(dollarsCount<2){
            i = (i+1)%len;
            if(ans[i]=='$')
                dollarsCount++
        }
        while(ans[i]!='$'){
            i = (i+1)%len;
        }
        ans[i] = deck[j];
        mySet.add(deck[j]);
        j++;
    }
    return ans;  
};

var main = function(){
    var input = [17,13,11,2,3,5,7];
    console.log(deckRevealedIncreasing(input)); 
    input = [1,2,3,4,5,6,7,8,9,10];
    console.log(deckRevealedIncreasing(input));
};

main();