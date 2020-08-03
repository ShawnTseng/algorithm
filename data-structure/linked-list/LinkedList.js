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
    const newNode = new LinkedListNode(value, this.head); // 指向head
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
      // 如果是第一個節點,也會是head
      this.head = newNode;
    }
    if (this.tail) {
      // 如果有tail, 才被tail指向
      this.tail.next = newNode;
    }
    this.tail = newNode; // 更新tail
    return this;
  }
}
