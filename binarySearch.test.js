describe('testing binary search module', ()=> {
  const Node = require('./binarySearchTree');
  test('BST - 0 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(8);
    node.insert(11);
    /** 
     *          12    <--- level - 0
     *         /
     *       10
     *      /  \
     *     8    11 
    */
    expect.assertions(1);
    expect(node.search(0)).toEqual(12);
  });
  test('BST - 1 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    // node.insert(14);
    node.insert(8);
    node.insert(11);
    /** 
     *          12
     *         /
     *       10       <--- level - 1
     *      /  \
     *     8    11 
    */
    expect.assertions(1);
    expect(node.search(1)).toEqual(10);
  });
  test('BST - 1 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(14);
    node.insert(8);
    node.insert(11);
    /** 
     *          12
     *         / \
     *       10  14     <--- level - 1
     *      /  \
     *     8    11 
    */
    expect.assertions(1);
    expect(node.search(1)).toEqual(14);
  });
  test('BST - 2 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(14);
    node.insert(8);
    node.insert(11);
    node.insert(13);
    /** 
     *            12
     *          /    \
     *        10      14 
     *       /  \     /
     *      8   11  13    <--- level - 2
    */
    expect.assertions(1);
    expect(node.search(2)).toEqual(13);
  });
  test('BST - 2 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(14);
    node.insert(8);
    node.insert(11);
    node.insert(13);
    node.insert(15);
    /** 
     *            12
     *          /    \
     *        10      14 
     *       /  \     / \
     *      8   11  13   15 <--- level - 2
    */
    expect.assertions(1);
    expect(node.search(2)).toEqual(15);
  });
  test('BST - 3 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(14);
    node.insert(8);
    node.insert(11);
    node.insert(13);
    node.insert(15);
    node.insert(80);
    /** 
     *            12
     *          /    \
     *        10      14 
     *       /  \     / \
     *      8   11  13   15
     *                    \
     *                     80  <--- level - 3
    */
    expect.assertions(1);
    expect(node.search(3)).toEqual(80);
  });
  test('BST - 4 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(14);
    node.insert(8);
    node.insert(11);
    node.insert(13);
    node.insert(15);
    node.insert(80);
    node.insert(70);
    /** 
     *            12
     *          /    \
     *        10      14 
     *       /  \     / \
     *      8   11  13   15
     *                    \
     *                     80
     *                    /
     *                   70     <--- level - 4
    */
    expect.assertions(1);
    expect(node.search(4)).toEqual(70);
  });
  test('BST - 5 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(14);
    node.insert(8);
    node.insert(11);
    node.insert(13);
    node.insert(15);
    node.insert(80);
    node.insert(70);
    node.insert(60);
    /** 
     *            12
     *          /    \
     *        10      14 
     *       /  \     / \
     *      8   11  13   15
     *                    \
     *                     80
     *                    /
     *                   70
     *                  /
     *                 60       <--- level - 5
    */
    expect.assertions(1);
    expect(node.search(5)).toEqual(60);
  });
  test('BST - 6 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(14);
    node.insert(8);
    node.insert(11);
    node.insert(13);
    node.insert(15);
    node.insert(80);
    node.insert(70);
    node.insert(60);
    node.insert(55);
    /** 
     *            12
     *          /    \
     *        10      14 
     *       /  \     / \
     *      8   11  13   15
     *                    \
     *                     80
     *                    /
     *                   70
     *                  /
     *                 60
     *                /
     *               55             <--- level - 6
    */
    expect.assertions(1);
    expect(node.search(6)).toEqual(55);
  });
  test('BST - 4 right level testing', ()=> {
    const node = new Node(12);
    node.insert(10);
    node.insert(14);
    node.insert(8);
    node.insert(11);
    node.insert(13);
    node.insert(15);
    node.insert(80);
    node.insert(70);
    node.insert(60);
    node.insert(55);
    node.insert(85);

    /** 
     *            12
     *          /    \
     *        10      14 
     *       /  \     / \
     *      8   11  13   15
     *                    \
     *                     80
     *                    /  \
     *                   70   85               <--- level - 4
     *                  /
     *                 60
     *                /
     *               55
    */
    expect.assertions(1);
    expect(node.search(4)).toEqual(85);
  });

})