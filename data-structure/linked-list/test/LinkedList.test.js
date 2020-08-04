import LinkedList from '../LinkedList';

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
const searchResult = linkedList.search(3);
const searchResult2 = linkedList.search(999);
console.log('searchResult', searchResult);
console.log('searchResult2', searchResult2);
