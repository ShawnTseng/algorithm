import LinkedListNode from './LinkedListNode';
export default class LinkedList {
  /**
   * 初始化Linked List的頭尾節點
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  pretend(value) {
    const newNode = new LinkedListNode(value, this.head); // 指向第二個
    this.head = newNode; // 更新head
    if (!this.tail) {
      // 如果是第一個節點,也會是tail
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  search(value) {
    let currentNode = this.head;
    while (!!currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode !== null ? currentNode.value : null;
  }
}
