---
sidebar_position: 3
---

# STACK
Stack adalah struktur data yang bersifat LIFO (Last In, First Out), 
artinya untuk elemen yang terakhir ditambahkan adalah elemen yang pertama dihapus. 

![Gambaran Stack](/img/Stack.png)

## A. Deklarasi dan Inisialisasi Stack

    **Contoh Kode:**
        ```
        import java.util.Stack;
        Stack<String> fruits = new Stack<>();
        ```
## B. Operasi Dasar pada Stack
1. Menambahkan Elemen ke Stack (Push)

    **Contoh Kode:**
        ```
        fruits.push(“Apple”); // Menambahkan elemen ke atas stack
        fruits.push(“Berry”);
        fruits.push(“Peach”);
        ```
2. Melihat Elemen Teratas (Peek)

    **Contoh Kode:**
        ```
        String fruit = fruits.peek();
        System.out.println(“Buah teratas: “ + fruit);
        ```
3. Menghapus Elemen Teratas (Pop)

    **Contoh Kode:**
        ```
        String removedFruit = fruits.pop(); // Menghapus dan mengembalikan elemen teratas
        System.out.println(“Buah yang diambil: “ + removedFruit);
        ```
4. Memeriksa Apakah Stack Kosong

    **Contoh Kode:**
        ```
        if (fruits.isEmpty()) {
            System.out.println(“Stack kosong”);
        } else {
            System.out.println(“Stack terisi”);
        }
        ```
