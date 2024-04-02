/* 
    You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

    Merge all the linked-lists into one sorted linked-list and return it.

    

    Example 1:

    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6
    Example 2:

    Input: lists = []
    Output: []
    Example 3:

    Input: lists = [[]]
    Output: []
*/

let lists = [[1,4,5],[1,3,4],[2,6]];

const arraySorted = (lista) => {
    let numbers = [];
    if (lista.length === 0) {
        return lista
    } 
    if (lista.length === 1) {
        return []
    }
    if (lista.length > 1) {
        for (const array of lista) {
            for (let index = 0; index < array.length; index++) {
                let list = array[index]
                numbers.push(list);
            }
        }
    }
    return numbers.sort()
}

console.log(arraySorted(lists));