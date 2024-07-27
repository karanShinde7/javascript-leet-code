// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//https://leetcode.com/problems/add-two-numbers

// Create Class with value and next as linked list contains the 2 elements (value & next pointer)
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    // create temp node like a pointer
    let tempNode = new ListNode();
    let currentNode = tempNode;
    let carry = 0;

    // loop throgh both lists (lists can vary in length) & carry must be 0 at the end.
    while (l1 !== null || l2 !== null || carry !== 0) {
        // if any list found to be null put value as 0
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        // ex: 9 + 9 = 18 > 18 % 10 = 8 > carry 1 > so the stmt will be 9 + 9 + 1 = 19
        let sum = val1 + val2 + carry;
        // to avoid double digit number 
        carry = Math.floor(sum / 10);
        // Put remaining value after addition ex: 9 + 9 = 18 > 18 % 10 = 8
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return tempNode.next;
}

// Create link list from array 
function generateLinList(arr) {
    let tempNode = new ListNode();
    let currentNode = tempNode;
    // traverse through until the array finishes.
    for (let val of arr) {
        // first value pushed
        currentNode.next = new ListNode(val);
        // next will point to next position
        currentNode = currentNode.next;
    }
    return tempNode.next;
}

// Console link list
function consoleLinkList(node) {
    let result = [];
    while (node !== null) {
        // get value from node
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

// generate 2 link lists by passing an array.
let l1 = generateLinList([2, 4, 3]);
consoleLinkList(l1); // 2 -> 4 -> 3
let l2 = generateLinList([5, 6, 4]);
consoleLinkList(l2); // 5 -> 6 -> 4

let result = addTwoNumbers(l1, l2);
consoleLinkList(result); // 7 -> 0 -> 8
