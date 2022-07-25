//1 Permutation programming
function allPermutations (items) {
     
    let results = [];
    function permute (arr, memo) {
    var cur, memo = memo || [];
    for (let i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        cur[0] = cur[0].replace("*", "0");
        if (arr.length === 0) {
            results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
    }
        return results;
    }
    permute(items);
    return results;
}
     
var values = ["0", "*", "1"];
var permutated = allPermutations(values);
console.table(permutated);

// 2 Testing a primitive calculator app
/*
1: Only displays 10 digits
2: Negative numbers are suported
3: Only integer are suported
4: No decimal point, divisions round to 0
5: Results in higher order number shows ERR
*/

/* TC 1 
type 10 / 3
type x 1000000000
type + 500
type - 2000000500
assert that displays 1000000000
*/

/* TC 2
given it displayed 1000000000 in the previous test case
type Xy 5
assert that display shows "ERR"
reset
*/


//3 Yoroi wallet testing
//TC 1 
/*
1:  Start the wallet creation by clicking "Create wallet" on the main dashboard
2:  Select "Carano" or "Ergo" currency platform
3:  Select "Create Wallet" on the Create overlay
4:  On the create wallet overlay, complete the fields:
    Wallet name (with at least 40 characters to check limits)
        note: more than 40 characters should result in a warning message
    Spending password (with at least 10 characters)
        note: less than 10 characters should result in a warning message
    Repeat spending password 

EXPECTED RESULTS

1:  In case any of the fields shows the warning message, the "CREATE PERSONAL WALLET" button should be desable
2:  Only when the requirements are met the "CREATE PERSONAL WALLET" button should be enabled
*/

// TC2
/*
1:  Start the wallet creation by clicking "Create wallet" on the main dashboard
2:  Select "Carano" or "Ergo" currency platform
3:  Select "Create Wallet" on the Create overlay
4:  On the create wallet overlay, complete the fields:
    Wallet name (with at least 40 characters to check limits)
        note: more than 40 characters should result in a warning message
    Spending password (with at least 10 characters)
        note: less than 10 characters should result in a warning message
    Repeat spending password 
5:  Click on "CREATE PERSONAL WALLET"

EXPECTED RESULTS 

1:  RECOVERY PHRASE screen is showed.
    "CONTINUE" button is show with a countdown of 8 seconds and its desabled
    until the checkbox item of the screen is not check, the continue button will remain desabled
2:  After clicking the checkbox item the "CONTINUE" button is enabled, and clicable    

CONTINUE FLOW

5:  Click on the "CONTINUE BUTTON"
6:  RECOVERY PHRASE screen is show, with corresponding recovery phrase messages (Take note of it , will be used in the next steps)
7:  click on "YES, I'VE WRITTEN IT DOWN"
8:  RECOVERY PHRASE selection screen is show, with the list of words to create the phrase showed in the preview screen
    and a "CLEAR" and "REMOVE LAST" button at the bottom

EXPECTED RESULTS

1:  If no words are selected, "CLEAR" and "REMOVE LAST" should be desabled
    When a single word is selected the buttons become enabled.
2:  When the recovery phrase is correctly entered , a new screen is show with title "RECOVERY PHRASE"
    and two checkbox items

CONTINUE FLOW

9:  In the current screen , mark the two checkbox items.
10: Click "CONFIRM" ("CONFIRM" is disable until the checkbox items are check).

EXPECTED RESULTS

1:  User is redirected to the newly created wallet dashboard.
2:  The title of the dashboard is the name of the wallet entered in step 4.
*/