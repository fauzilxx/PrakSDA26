---
sidebar_position: 4
---

# QUEUE

Queue adalah struktur data yang bersifat FIFO (First In, First Out), 
artinya untuk elemen yang pertama kali ditambahkan adalah elemen yang pertama dihapus.

![Gambaran Queue](/img/Queue.png)

## A. Deklarasi dan Inisialisasi Queue

    **Contoh Kode:**
        ```
        import java.util.Queue;
        import java.util.LinkedList;
        Queue<String> pingfestQueue = new LinkedList<>();
        ```
## B. Operasi Dasar pada Queue

1. Menambahkan Elemen ke Queue (Enqueue)

    **Contoh Kode:**
        ```
        pingfestQueue.add(“Fauzil Azhim”); // Enqueue elemen (fungsi LinkedList)
        pingfestQueue.offer(“Velengio Deriksen”); // Alternatif, tidak melempar exception jika penuh (fungsi Queue)
        ```
2. Melihat Elemen Terdepan (Peek)

    **Contoh Kode:**
        ```
        String serving = pingfestQueue.peek();
        System.out.println(“Melayani “ + serving);
        ```
3. Menghapus Elemen Terdepan (Dequeue)

    **Contoh Kode:**
        ```
        String served = pingfestQueue.poll(); // Menghapus dan mengembalikan elemen terdepan 
        System.out.println(“Silakan masuk “ + served);
        ```
4. Mengecek Ukuran Queue (Size)

    **Contoh Kode:**
        ```
        System.out.println(“In line: “ + pingfestQueue.size());
        ```
5. Mengecek Status Queue (isEmpty)

    **Contoh Kode:**
        ```
        if (pingfestQueue.isEmpty()) {
            System.out.println(“Pingfest Rungkad”);
        } else {
            System.out.println(“Alhamdulillah”);
        }
        ```