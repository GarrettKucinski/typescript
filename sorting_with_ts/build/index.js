"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbers = new NumbersCollection_1.default([3, 4, 5, 1, 3, 5, 2]);
var characters = new CharactersCollection_1.default('zxywvutsrqponmlkjihgfedcba');
var linkedList = new LinkedList_1.default();
linkedList.add(9);
linkedList.add(3);
linkedList.add(-18);
linkedList.add(94);
linkedList.add(41);
linkedList.add(-34);
var numSorter = new Sorter_1.default(numbers);
var charSorter = new Sorter_1.default(characters);
var llSorter = new Sorter_1.default(linkedList);
numSorter.sort();
charSorter.sort();
llSorter.sort();
console.log(numbers.data);
console.log(characters.data);
linkedList.print();
