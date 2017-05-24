// 206

const list = {
  head: {
    val: 1,
    next: {
      val: 2,
      next: null,
    }
  }
};

function reverseList(head) {
  if (!head || !head.next) {
    return head;
  }
  var newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

const res = reverseList(list.head);
console.log(res);
