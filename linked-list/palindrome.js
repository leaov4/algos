//Given a singly linked list, check if it's a palindrome;

//1st step- understand node and Linkedlist classes, implement them if they aren't given. 
//find middle, then reverse 2nd half.

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null               
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode("a")
let node2 = new ListNode("b")
let node3 = new ListNode("c")
let node4 = new ListNode("b")
let node5 = new ListNode("a")

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let list = new LinkedList(node1)

//ESSENTIAL REVERSE LIST FUNCTION 
const reverse = (head) => {
    let previous = null
    while (head !== null) {
      next = head.next
      head.next = previous
      previous = head
      head = next
    }
    return previous
  }


const palindromeCheck = (list) => {
    let slow = list.head;
    let fast = list.head;
    let temp, previous;
    let reversed;

    //now slow has middle
    while(slow !== null && fast!== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    //get 2nd half
    let middle = slow;

    //reverse "slow"
    reversed = reverse(slow);

    let even = true;
    //compare 2nd half with 1st half, middle with previous 
    while(reversed && middle){
        if (reversed.data !== middle.data) {
            even = false;
            break
        }
        reversed = reversed.next;
        middle = middle.next
    }
    console.log (even)
    return even;
}

palindromeCheck(list)

