// Map Doubling the values;

const array1 = [1,2,3,4,5];

const newArray1 = array1.map(num => {
    return num * 2
});

console.log(newArray1);

// Filter: Find the account balances greater that 10,000

const array2 = [
  {acctId: 1, balance: 5000},
  {acctId: 1, balance: 15000},
  {acctId: 1, balance: 150000},
  {acctId: 1, balance: 15},
]

const newArray2 = array2.filter(acct => {
  if(acct.balance > 10000){
    return true;
  }
});

console.log(newArray2);

// Reduce: Find the maximum
const array3 = [1,54,213,6,7,25486];

const newArray3 = array3.reduce((acc, curr) => {
    if(curr > acc){
      return curr;
    } else{
        return acc;
    }
}, 0);

console.log(newArray3)