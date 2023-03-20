// 原链表删除
var removeElements = function (head, val) {
  while (!!head && head.val === val) {
    head = head.next;
  }
  let curr = head;
  while (!!curr && curr.next) {
    let next = curr.next;
    if (next.val === val) {
      curr.next = next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

// 使用虚拟头节点
var removeElements = function (head, val) {
  let res = new ListNode(0, head);
  let curr = res;
  while (!!curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return res.next || [];
};
