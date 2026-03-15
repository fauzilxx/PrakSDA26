---
sidebar_position: 2
---

# LIST
List adalah struktur data yang menyimpan sejumlah nilai terurut. Terdapat 2 jenis list yang paling umum digunakan, ArrayList dan LinkedList.

## A. ArrayList
ArrayList dapat dikatakan sebagai versi dinamis dari array dengan 
kemampuannya yang dapat mengubah ukuran secara dinamis. Namun dibalik kelebihannya, terdapat operasi yang cukup berat ketika menambah dan menghapus elemen.

![Gambaran ArrayList](/img/ArrayList.png)
## Deklarasi dan Inisialisasi List

    **Contoh Kode:**
        ```
        List<tipeData> namaVariabel = new ArrayList<>();
        List<Integer> numbers = new ArrayList<>();
        ```
## Operasi Dasar pada ArrayList
1. Menambahkan Elemen ke ArrayList

    **Contoh Kode:**
        ```
        numbers.add(7); // Menambah elemen di indeks terakhir
        numbers.add(0, 6); // Menambah elemen di indeks pertama
        ```
2. Menghapus Elemen (Remove)

    **Contoh Kode:**
    ```
    numbers.remove(1); // Hapus indeks ke-1
    numbers.remove(Integer.valueOf(6)); // Hapus elemen bernilai 42
    ```
3. Mengakses Elemen (Get)

    **Contoh Kode:**
        ```
        int num = numbers.get(0); // Ambil elemen indeks pertama 
        ```
4. Iterasi

    **Contoh Kode:**
        ```
        for (int i = 0; i < numbers.size(); i++) {
            System.out.println(“Indeks ke-” + i + “: “ + numbers.get(i));
        }
        for (int num : numbers) {
            System.out.println(num);
        }
        numbers.forEach(num -> {
            System.out.println(num);
        });
        numbers.forEach(System.out::println);
        ```
## B. LinkedList
LinkedList adalah sebuah list yang menyimpan elemen sebagai objek yang berbeda dalam suatu Node (simpul) yang saling terhubung satu sama lain.

![Gambaran LinkedList](/img/LinkedList.png)
## Deklarasi dan Inisialisasi LinkedList
    **Contoh Kode:**
        ```
        List<tipeData> namaVariabel = new LinkedList<>();
        List<String> names = new LinkedList<>();
        ```
## Operasi Dasar pada LinkedList
 1. Menambahkan Elemen ke LinkedList

    **Contoh Kode:**
        ```
        names.add(“Fauzil”); // Menambahkan di node/indeks terakhir
        names.addFirst(“Aleng”) // Menambahkan di node/indeks pertama
        ```
 2. Menghapus Elemen (Remove)

    **Contoh Kode:**
        ```
        names.remove(1); // Hapus indeks ke-1
        names.remove(“Fauzil”); // Hapus elemen bernilai “Fauzil”
        ```
 3. Mengakses Elemen (Get)

    **Contoh Kode:**
        ```
        String name = names.get(1); // Ambil elemen indeks pertama
        ```
 4. Iterasi

    **Contoh Kode:**
        ```
        for (int i = 0; i < names.size(); i++) {
        System.out.println(“Hai “ + names.get(i));
        }
        for (String name : names) {
            System.out.println(names);
        }
        names.forEach(name-> {
            System.out.println(names)
        });
        names.forEach(System.out::println);
        ```
