---
sidebar_position: 5
---

# Tugas 7: Implementasi Balanced Binary Search Tree

Dalam praktikum ini, mahasiswa diminta untuk mengetahui perbedaan antara kedua jenis **Balanced Binary Search Tree (AVL Tree dan Red-Black Tree)** melalui implementasi langsung pada sistem.


## 1. Tujuan Penugasan

- Memahami perbedaan antara **AVL Tree** dan **Red-Black Tree**.
- Memilih Balanced Binary Search Tree yang tepat untuk diimplementasikan pada program.
- Memahami balancing method AVL Tree dan Red-Black Tree


## 2. Pilihan Struktur Data

- AVL Tree (balancing berdasarkan balance factor)
- Red-Black Tree (balancing berdasarkan warna)


## 3. Ketentuan Pengerjaan

1. Gunakan kode dasar yang telah diberikan.
2. Memilih salah 1 dari kedua Balanced Binary Search Tree.
3. Program dibebaskan sesuai kreatifitas mahasiswa.
4. Setiap proses **wajib** diberi komentar penjelasan singkat.
5. Berikan alasan pemilihan Balanced Binary Search Tree menggunakan komentar pada line akhir kode program.
6. Program harus bisa dijalankan (compile & run tanpa error).


## 4. Kode Dasar (Template)

Salin kode berikut sebagai titik awal pengerjaan:

**AVL Tree**
```java
class AVLTree {
    class Node {
        int key, height;
        Node left, right;
        Node(int d) {
            key = d;
            height = 1;
        }
    }

    Node root;

    // --- UTILITY METHODS ---
    int height(Node N) {
        if (N == null) return 0;
        return N.height;
    }

    int max(int a, int b) {
        return (a > b) ? a : b;
    }

    int getBalance(Node N) {
        if (N == null) return 0;
        return height(N.left) - height(N.right);
    }

    // --- ROTATIONS ---
    Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = max(height(y.left), height(y.right)) + 1;
        x.height = max(height(x.left), height(x.right)) + 1;

        return x; // New root
    }

    Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = max(height(x.left), height(x.right)) + 1;
        y.height = max(height(y.left), height(y.right)) + 1;

        return y; // New root
    }

    // --- INSERTION ---
    Node insert(Node node, int key) {
        // 1. Standard BST Insert
        if (node == null) return (new Node(key));

        if (key < node.key)
            node.left = insert(node.left, key);
        else if (key > node.key)
            node.right = insert(node.right, key);
        else return node; // Duplicate keys not allowed

        // 2. Update height of this ancestor node
        node.height = 1 + max(height(node.left), height(node.right));

        // 3. Get the balance factor
        int balance = getBalance(node);

        // 4. Balance the tree (4 Cases)
        // Left Left Case
        if (balance > 1 && key < node.left.key)
            return rightRotate(node);

        // Right Right Case
        if (balance < -1 && key > node.right.key)
            return leftRotate(node);

        // Left Right Case
        if (balance > 1 && key > node.left.key) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && key < node.right.key) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    }

    // --- DELETION ---
    Node minValueNode(Node node) {
        Node current = node;
        while (current.left != null) current = current.left;
        return current;
    }

    Node deleteNode(Node root, int key) {
        // 1. Standard BST Delete
        if (root == null) return root;

        if (key < root.key)
            root.left = deleteNode(root.left, key);
        else if (key > root.key)
            root.right = deleteNode(root.right, key);
        else {
            if ((root.left == null) || (root.right == null)) {
                Node temp = null;
                if (temp == root.left) temp = root.right;
                else temp = root.left;

                if (temp == null) {
                    temp = root;
                    root = null;
                } else root = temp; 
            } else {
                Node temp = minValueNode(root.right);
                root.key = temp.key;
                root.right = deleteNode(root.right, temp.key);
            }
        }

        if (root == null) return root;

        // 2. Update height
        root.height = max(height(root.left), height(root.right)) + 1;

        // 3. Get balance factor
        int balance = getBalance(root);

        // 4. Balance the tree (4 Cases)
        // Left Left Case
        if (balance > 1 && getBalance(root.left) >= 0)
            return rightRotate(root);

        // Left Right Case
        if (balance > 1 && getBalance(root.left) < 0) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        // Right Right Case
        if (balance < -1 && getBalance(root.right) <= 0)
            return leftRotate(root);

        // Right Left Case
        if (balance < -1 && getBalance(root.right) > 0) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }
}
```

**Red-Black Tree**
```java
class RedBlackTree {
    class Node {
        int data;
        Node parent, left, right;
        int color; // 1 for Red, 0 for Black
    }

    private Node root;
    private Node TNULL; // Sentinel node for NIL leaves

    public RedBlackTree() {
        TNULL = new Node();
        TNULL.color = 0;
        TNULL.left = null;
        TNULL.right = null;
        root = TNULL;
    }

    // --- ROTATIONS ---
    public void leftRotate(Node x) {
        Node y = x.right;
        x.right = y.left;
        if (y.left != TNULL) y.left.parent = x;
        y.parent = x.parent;
        if (x.parent == null) root = y;
        else if (x == x.parent.left) x.parent.left = y;
        else x.parent.right = y;
        y.left = x;
        x.parent = y;
    }

    public void rightRotate(Node x) {
        Node y = x.left;
        x.left = y.right;
        if (y.right != TNULL) y.right.parent = x;
        y.parent = x.parent;
        if (x.parent == null) root = y;
        else if (x == x.parent.right) x.parent.right = y;
        else x.parent.left = y;
        y.right = x;
        x.parent = y;
    }

    // --- INSERTION ---
    public void insert(int key) {
        Node node = new Node();
        node.parent = null;
        node.data = key;
        node.left = TNULL;
        node.right = TNULL;
        node.color = 1; // New nodes are always red

        Node y = null;
        Node x = this.root;

        // Standard iterative BST insert
        while (x != TNULL) {
            y = x;
            if (node.data < x.data) x = x.left;
            else x = x.right;
        }

        node.parent = y;
        if (y == null) root = node;
        else if (node.data < y.data) y.left = node;
        else y.right = node;

        if (node.parent == null) {
            node.color = 0; // Root is always black
            return;
        }

        if (node.parent.parent == null) return;

        insertFixup(node);
    }

    private void insertFixup(Node k) {
        Node u; // Uncle node
        while (k.parent.color == 1) {
            if (k.parent == k.parent.parent.right) {
                u = k.parent.parent.left; // Uncle
                if (u.color == 1) { // Case 1: Uncle is Red
                    u.color = 0;
                    k.parent.color = 0;
                    k.parent.parent.color = 1;
                    k = k.parent.parent;
                } else {
                    if (k == k.parent.left) { // Case 2: Uncle is Black, Triangle Shape
                        k = k.parent;
                        rightRotate(k);
                    }
                    // Case 3: Uncle is Black, Line Shape
                    k.parent.color = 0;
                    k.parent.parent.color = 1;
                    leftRotate(k.parent.parent);
                }
            } else {
                u = k.parent.parent.right; // Uncle
                if (u.color == 1) { // Case 1
                    u.color = 0;
                    k.parent.color = 0;
                    k.parent.parent.color = 1;
                    k = k.parent.parent;
                } else {
                    if (k == k.parent.right) { // Case 2
                        k = k.parent;
                        leftRotate(k);
                    }
                    // Case 3
                    k.parent.color = 0;
                    k.parent.parent.color = 1;
                    rightRotate(k.parent.parent);
                }
            }
            if (k == root) break;
        }
        root.color = 0; // Ensure root is always black
    }

    // --- DELETION ---
    public void deleteNode(int data) {
        Node z = TNULL;
        Node x, y;
        Node curr = root;

        // Find the node
        while (curr != TNULL) {
            if (curr.data == data) z = curr;
            if (curr.data <= data) curr = curr.right;
            else curr = curr.left;
        }

        if (z == TNULL) return; // Not found

        y = z;
        int yOriginalColor = y.color;
        if (z.left == TNULL) {
            x = z.right;
            transplant(z, z.right);
        } else if (z.right == TNULL) {
            x = z.left;
            transplant(z, z.left);
        } else {
            y = minimum(z.right);
            yOriginalColor = y.color;
            x = y.right;
            if (y.parent == z) x.parent = y;
            else {
                transplant(y, y.right);
                y.right = z.right;
                y.right.parent = y;
            }
            transplant(z, y);
            y.left = z.left;
            y.left.parent = y;
            y.color = z.color;
        }
        // If the deleted node was black, it broke the black-depth rule. Fix it.
        if (yOriginalColor == 0) deleteFixup(x);
    }

    private void transplant(Node u, Node v) {
        if (u.parent == null) root = v;
        else if (u == u.parent.left) u.parent.left = v;
        else u.parent.right = v;
        v.parent = u.parent;
    }

    private Node minimum(Node node) {
        while (node.left != TNULL) node = node.left;
        return node;
    }

    private void deleteFixup(Node x) {
        Node s; // Sibling node
        while (x != root && x.color == 0) {
            if (x == x.parent.left) {
                s = x.parent.right;
                if (s.color == 1) { // Case 1: Sibling is Red
                    s.color = 0;
                    x.parent.color = 1;
                    leftRotate(x.parent);
                    s = x.parent.right;
                }
                if (s.left.color == 0 && s.right.color == 0) { // Case 2: Sibling is Black, both children Black
                    s.color = 1;
                    x = x.parent;
                } else {
                    if (s.right.color == 0) { // Case 3: Sibling is Black, left child Red, right child Black
                        s.left.color = 0;
                        s.color = 1;
                        rightRotate(s);
                        s = x.parent.right;
                    }
                    // Case 4: Sibling is Black, right child Red
                    s.color = x.parent.color;
                    x.parent.color = 0;
                    s.right.color = 0;
                    leftRotate(x.parent);
                    x = root;
                }
            } else {
                // Symmetric cases for right child
                s = x.parent.left;
                if (s.color == 1) {
                    s.color = 0;
                    x.parent.color = 1;
                    rightRotate(x.parent);
                    s = x.parent.left;
                }
                if (s.right.color == 0 && s.right.color == 0) {
                    s.color = 1;
                    x = x.parent;
                } else {
                    if (s.left.color == 0) {
                        s.right.color = 0;
                        s.color = 1;
                        leftRotate(s);
                        s = x.parent.left;
                    }
                    s.color = x.parent.color;
                    x.parent.color = 0;
                    s.left.color = 0;
                    rightRotate(x.parent);
                    x = root;
                }
            }
        }
        x.color = 0;
    }
}
```

## 5. Bobot Penilaian

| No | Kriteria Penilaian | Bobot |
|---|---|---|
| 1 | Ketepatan struktur tree hasil insertion (sesuai gambar acuan) | 35% |
| 2 | Ketepatan deletion (index benar, node yang terhapus sesuai) | 30% |
| 3 | Logika program berjalan tanpa error (compile & run) | 20% |
| 4 | Kerapian kode dan kelengkapan komentar penjelasan | 15% |

## 6. Ketentuan Pengumpulan

- **File yang dikumpulkan:**
  - Source code `.java` yang telah dilengkapi.
  - Screenshot hasil program dijalankan (jika lebih dari 1 foto, gabungkan dalam format `.pdf`).
- Tidak perlu membuat laporan.
- Kode **wajib memiliki komentar** yang jelas sesuai ketentuan.
- **Tidak boleh mengubah** mengubah kode dasar.

**Format nama file:**

```
Source code  : KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA.java
Dokumentasi  : KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA.png  /  .pdf
```