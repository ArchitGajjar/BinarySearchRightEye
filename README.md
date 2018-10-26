# BinarySearchRightEye
This is Binary search Tree source code where we are searching an index from righ side using level. For more
informations about how this module works, please look down below for testing code samples.

## Installation
Please install the Node environment first from the nodejs.org and open your terminal, clone this repository and 
hit npm install.

``` shell
    npm install
```

## Binary Search Right Eye code sample node - ES6 style
- binarySearchTree.js (source code)
- binarySearch.test.js (test code)

After installing node and packages(e.g jest) and, you need to require this binary search module into your code
for testing.

```javascript
const node = require('./binarySearchTree');
```
## Binary search testing
- User will give an input as interger to the search method which is consider here as level.
- Test 1  {input : 0, output : 12}
```
               12    <--- level - 0
              /
            10
           /  \
          8    11 

```
- Test 2  {input : 1, output : 10}
```
               12
              /
            10       <--- level - 1
           /  \
          8    11 

```
- Test 3  {input : 1, output : 14}
```
               12
              /  \
            10    14    <--- level - 1
           /  \
          8    11 

```
- Test 4  {input : 2, output : 13}
```
                12
              /   \
            10     14
           / \    /
          8  11  13     <--- level - 2

```
- Test 5  {input : 2, output : 15}
```
                12
              /   \
            10     14
           / \    /  \
          8  11  13  15   <--- level - 2

```
- Test 6  {input : 3, output : 80}
```
                12
              /   \
            10     14
           / \    /  \
          8  11  13  15
                       \
                        80   <--- level - 3

```
- Test 7  {input : 4, output : 70}
```
                12
              /   \
            10     14
           / \    /  \
          8  11  13  15
                       \
                        80
                       / 
                      70      <--- level - 4

```
- Test 8  {input : 5, output : 60}
```
                12
              /   \
            10     14
           / \    /  \
          8  11  13  15
                       \
                        80
                       / 
                      70 
                     /     
                    60        <--- level - 5

```
- Test 9  {input : 6, output : 60}
```
                12
              /   \
            10     14
           / \    /  \
          8  11  13  15
                       \
                        80
                       / 
                      70 
                     /     
                    60
                   /
                  55            <--- level - 6
```
- Test 10  {input : 4, output : 85}
```
                12
              /   \
            10     14
           / \    /  \
          8  11  13  15
                       \
                        80
                       /  \
                      70   85   <--- level - 4
                     /
                    60
                   /
                  55
```


## Contributor

[Archit Gajjar](mailto:architgajjar1992@gmail.com), Software Developer@Autodesk

