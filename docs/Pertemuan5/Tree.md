# Tree

## Pengantar Tree

Tree adalah struktur data non-linear di mana node-node disusun dalam bentuk hierarki. Tree sendiri mengambil konsep dari sebuah pohon terbalik.

![Tree](/img/tree.png)

Struktur ini terdiri dari:

- **Node**: menyimpan data, di mana:
  - Setiap node hanya memiliki satu parent (kecuali root node).
  - Node bisa memiliki 0 atau lebih anak (child).
  - Terdapat satu node khusus sebagai akar pohon disebut **root** (tidak memiliki parent).
- **Edge**: relasi/hubungan antar node

---

## Pentingnya Tree

- Tree berguna untuk menyimpan data yang secara alami membentuk struktur hierarki.
- Sistem file pada komputer disusun dalam bentuk tree, di mana folder dapat berisi subfolder dan file.
- **DOM (Document Object Model)** pada halaman HTML juga berbentuk tree:
  - Tag `<html>` adalah root (akar)
  - `<head>` dan `<body>` adalah child (anak) dari root
  - Tag-tag tersebut dapat memiliki child sendiri, sehingga membentuk struktur hierarki
- Tree membantu dalam pengorganisasian data dan proses pencarian data secara efisien, terutama untuk hubungan yang bersifat hierarkis.

---

## Terminologi Dasar

![Terminologi](/img/terminology.png)

| Istilah | Definisi |
|---|---|
| **Node** | Elemen dalam tree yang menyimpan data |
| **Root** | Node paling atas; tidak memiliki parent |
| **Leaf Node** | Node paling bawah; tidak memiliki child |
| **Branch Node** | Node di tengah; memiliki parent dan child |
| **Parent** | Node yang memiliki child (garisan ke bawah) |
| **Child** | Node yang memiliki parent (garisan ke atas) |
| **Sibling** | Node-node yang berbagi parent yang sama |
| **Subtree** | Bagian kecil dari sebuah tree yang lebih besar |
| **Degree** | Jumlah child yang dimiliki sebuah node |
| **Level** | Tingkatan node (root berada di Level 0) |
| **Depth** | Jumlah edge dari root ke node tersebut |
| **Height** | Jumlah edge dari node ke leaf node terjauh di bawahnya |
| **Size** | Total jumlah node dalam tree |

---

## Yang Membedakan Tree dengan Struktur Data Lain

![Tree Different](/img/tree-diff.png)

- **Tree vs List**: Tree disusun secara bertingkat-tingkat (hierarki) sedangkan list disusun secara lurus (linear). List hanya memiliki satu hubungan, yaitu elemen sebelum dan elemen sesudahnya, sedangkan tree memiliki hubungan bertingkat.
- **Tree vs Graph**: Struktur tree tidak membentuk cycle sedangkan graph membentuk cycle. Pada graph, node (vertex) terhubung dengan node lain secara bebas dan tanpa batasan tertentu, sedangkan tidak boleh ada cycle pada sebuah tree.

---

## Operasi Dasar Tree

### Create
Membuat tree adalah proses awal untuk membentuk tree, yaitu dengan membuat node pertama yang disebut **root**.

### Insert
Insert adalah proses menambahkan node baru ke dalam tree sebagai child dari node tertentu. Node yang ditambahkan akan menjadi bagian dari struktur tree dan memiliki hubungan parent–child dengan node tempat ia dimasukkan.

### Delete
Delete adalah proses menghapus node dari tree. Ketika sebuah node dihapus, maka seluruh child yang berada di bawah node tersebut juga akan ikut terhapus (karena hubungan terputus).

### Search
Search adalah proses mencari node dengan nilai tertentu di dalam tree. Karena tree tidak selalu terurut, pencarian biasanya dilakukan dengan cara menjelajahi node satu per satu menggunakan traversal.

### Traversal
Traversal adalah proses mengunjungi semua node dalam tree dengan urutan tertentu. Traversal digunakan sebagai dasar untuk operasi lain seperti search, print, atau pengolahan data.

![Traversal](/img/traversal.png)
![Traversal](/img/traversal2.png)

#### Inorder (Left → Root → Right)

```java
void inorder(Node root) {
    if (root == null) return;
    inorder(root.left);                // Kunjungi kiri
    System.out.print(root.data + " "); // Proses root
    inorder(root.right);               // Kunjungi kanan
}
```

> **Penggunaan**: Mendapatkan data terurut, utamanya dari BST. Inorder pada BST selalu menghasilkan urutan ascending.

#### Postorder (Left → Right → Root)

```java
void postorder(Node root) {
    if (root == null) return;
    postorder(root.left);              // Kunjungi kiri
    postorder(root.right);             // Kunjungi kanan
    System.out.print(root.data + " "); // Proses root (terakhir)
}
```

> **Penggunaan**: Penghapusan tree (deletion) — child harus dihapus sebelum parent-nya, mencegah memory leak.

#### Preorder (Root → Left → Right)

```java
void preorder(Node root) {
    if (root == null) return;
    System.out.print(root.data + " "); // Proses root
    preorder(root.left);               // Kunjungi kiri
    preorder(root.right);              // Kunjungi kanan
}
```

> **Penggunaan**: Menyalin / kloning sebuah tree — root harus diproses lebih dulu sebelum child-nya.

#### Level Order (Level per level, kiri ke kanan)

```java
import java.util.LinkedList;
import java.util.Queue;

void levelOrder(Node root) {
    if (root == null) return;

    Queue<Node> queue = new LinkedList<>();
    queue.add(root);

    while (!queue.isEmpty()) {
        Node current = queue.poll();
        System.out.print(current.data + " ");

        if (current.left != null)  queue.add(current.left);
        if (current.right != null) queue.add(current.right);
    }
}
```

> **Penggunaan**: Shortest path / jarak terpendek — menemukan jalur terpendek antara dua node.

---

## Jenis-Jenis Tree

![Tree Types](/img/tree-types.png)

### Binary Tree
Tree di mana setiap node maksimal punya **2 anak**.

- **Binary Search Tree (BST)**
  - Aturan: Kiri < Root, Kanan > Root

- **Balanced Binary Tree** — Tree yang dijaga agar tidak terlalu miring (seimbang) supaya operasi tetap cepat.
  - **AVL Tree**: Selisih tinggi kiri & kanan maksimal 1. Otomatis melakukan rotasi kalau tidak seimbang.
  - **Red Black Tree**: Menggunakan aturan warna (merah/hitam). Lebih fleksibel dibanding AVL. Banyak dipakai di sistem nyata (misalnya map/dictionary).
  - **Splay Tree**: Node yang sering diakses akan dipindah ke atas. Cocok untuk data yang sering diakses berulang.

### Ternary Tree
Tree di mana setiap node punya maksimal **3 anak**.

- Ternary Search Tree
- Ternary Heap

### N-ary Tree
Tree di mana setiap node bisa punya **N anak** (bebas).

---

## Implementasi Tree di Java

```java
import java.util.ArrayList;

class Node {
    int data;
    ArrayList<Node> childrenNode = new ArrayList<>();

    // Constructor
    Node(int data) {
        this.data = data;
    }

    // Insert child node
    public void insert(Node new_node) {
        childrenNode.add(new_node);
    }

    // Remove child node by index
    public void remove_with_index(int index) {
        if (index < 0 || index >= childrenNode.size()) {
            System.out.println("Child node dengan index " + index + " dari parent node '" + this.data + "' tidak ditemukan di dalam range index 0 - " + childrenNode.size());
            return;
        }

        childrenNode.remove(index);
        System.out.println("Child node dari parent node '" + this.data + "' dengan index " + index + " berhasil dihapus");
    }

    // Pre-order traversal (private helper)
    private void _traversal(Node node, int depth) {
        for (int i = 0; i < depth; i++) {
            System.out.print("---");
        }
        System.out.println("> " + node.data);

        for (Node child : node.childrenNode) {
            _traversal(child, depth + 1);
        }
    }

    public void traversal() {
        _traversal(this, 0);
    }

    // Post-order traversal (private helper)
    private void _post_traversal(Node node, int depth) {
        for (Node child : node.childrenNode) {
            _post_traversal(child, depth + 1);
        }
        for (int i = 0; i < depth; i++) {
            System.out.print("---");
        }
        System.out.println("> " + node.data);
    }

    public void post_traversal() {
        _post_traversal(this, 0);
    }
}

public class TreeMain {
    public static void main(String[] args) {
        Node root         = new Node(0);
        Node childNode_1  = new Node(1);
        Node childNode_2  = new Node(2);
        Node childNode_3  = new Node(3);
        Node childNode_1_1   = new Node(4);
        Node childNode_1_2   = new Node(5);
        Node childNode_2_1   = new Node(6);
        Node childNode_2_2   = new Node(7);
        Node childNode_3_1   = new Node(8);
        Node childNode_3_1_1 = new Node(9);

        root.insert(childNode_1);
        root.insert(childNode_2);
        root.insert(childNode_3);
        childNode_1.insert(childNode_1_1);
        childNode_1.insert(childNode_1_2);
        childNode_2.insert(childNode_2_1);
        childNode_2.insert(childNode_2_2);
        childNode_3.insert(childNode_3_1);
        childNode_3_1.insert(childNode_3_1_1);

        root.traversal();

        System.out.println("");

        childNode_1.remove_with_index(20);
        childNode_1.remove_with_index(0);

        System.out.println("");

        root.traversal();
    }
}
```

---

## Visualisasi

Coba visualisasi BST secara interaktif di sini:
[https://www.cs.usfca.edu/~galles/visualization/BST.html](https://www.cs.usfca.edu/~galles/visualization/BST.html)