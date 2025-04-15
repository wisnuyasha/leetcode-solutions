function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const printTree = (node, prefix = "", isLeft = true) => {
  if (!node) return;

  if (node.right) {
    printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
  }

  console.log(prefix + (isLeft ? "└── " : "┌── ") + `🔵 ${node.val}`);

  if (node.left) {
    printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
  }
};

const insert = (root, val) => {
  // create new node
  if (!root) return new TreeNode(val);

  // recursive until root is null (bottom child) and create new node (base case)
  if (val < root.val) root.left = insert(root.left, val);
  else root.right = insert(root.right, val);

  return root;
};

const search = (root, val) => {
  if (root.val === val) return root;

  if (root.val > val) return search(root.right, val);
  else return search(root.left, val);
};

const remove = (root, val) => {
  // kalo gaketemu
  if (!root) return null;

  if (val < root.val) root.left = remove(root.left, val);
  else if (val > root.val) root.right = remove(root.right, val);
  else {
    // case 1: no child
    if (!root.left && !root.right) return null;

    // case 2: 1 child
    // kalo kiri gaada, langsung sambung node kanannya
    // 2       2
    //  \   =   \
    //   3  =    5
    //   \
    //    5
    if (!root.left) return root.right;
    // vice versa
    if (!root.right) return root.left;

    // case 3: 2 child
    //  -> ambil yang paling kecil dari kanan,
    //  -> ganti value yang mau didelete dengan nomor paling kecil sebelumnya
    //      -> dengan cara explore kanan dari node, dan terus kekiri sampe null
    //  -> terus hapus aslinya dari bawah

    // contoh ilustrasi
    //          50
    //         /   \
    //       30     70
    //      /  \    / \
    //    20   40  60  90
    //                /  \
    //              80   100
    //             /
    //           75
    //          /
    //        72
    let successor = getMin(root.right);
    //         50
    //        /   \
    //      30     70
    //     /  \    / \
    //   20   40  60  90
    //               /  \
    //             80   100
    //            /
    //          75
    //          /
    //        72 -> successor
    root.val = successor.val;
    //       50
    //      /   \
    //    30     70
    //   /  \    / \
    // 20   40  60  90
    //             /  \
    //           80   100
    //          /
    //        75
    //        /
    //      72
    root.right = remove(root.right, successor.val);
    //       50
    //      /   \
    //    30     70
    //   /  \    / \
    // 20   40  60  90
    //             /  \
    //           80   100
    //          /
    //        75
    // SUCCESS
  }

  return root;
};

const getMin = (node) => {
  while (node.left) {
    node = node.left;
  }
  return node;
};

// create trees
let root = null;
root = insert(root, 50);

// child of 50
root = insert(root, 30);
root = insert(root, 70);

// child of 30
root = insert(root, 20);
root = insert(root, 40);

// child of 70
root = insert(root, 60);
root = insert(root, 90);

// child of 90
root = insert(root, 80);
root = insert(root, 100);

// child of 80
root = insert(root, 75);

// child of 75
root = insert(root, 72);

// search a node
// console.log(search(root, 5));

// print tree
console.log('\n==== Before Delete ====')
printTree(root);

// delete a node
root = remove(root, 70);

console.log('\n ==== After Delete ====')
printTree(root);

// run with :
// node 07-trees/learnbst.js
