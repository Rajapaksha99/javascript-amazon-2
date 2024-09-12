import { fromatCurrency } from '../scripts/utils/money.js';

console.log('convert centes into dollers');
if (fromatCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('works with zero');
if (fromatCurrency(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('rounds up to the nearest cents');
if (fromatCurrency(2000.5) === '200.01'){
  console.log('passed');
}else{
  console.log('failed');
}