import Sorter from './Sorter';
import NumbersCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';
import LinkedList from './LinkedList';

const numbers = new NumbersCollection([3, 4, 5, 1, 3, 5, 2]);
const characters = new CharactersCollection('zxywvutsrqponmlkjihgfedcba');
const linkedList = new LinkedList();
linkedList.add(9);
linkedList.add(3);
linkedList.add(-18);
linkedList.add(94);
linkedList.add(41);
linkedList.add(-34);

numbers.sort();
characters.sort();
linkedList.sort();

console.log(numbers.data);
console.log(characters.data);
linkedList.print();
