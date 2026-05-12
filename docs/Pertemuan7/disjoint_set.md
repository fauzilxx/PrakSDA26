---
sidebar_position: 2
---

# Disjoint Set

![Disjoint Set](/img/disjoint.png)

Disjoint Set adalah struktur data yang digunakan untuk mengelompokkan data ke dalam beberapa kelompok terpisah berdasarkan hubungan tertentu. Struktur data ini sering disebut juga sebagai **Union Find** atau **Disjoint Set Union (DSU)**.

Konsep utamanya adalah:
- Setiap data berada dalam suatu kelompok.
- Setiap kelompok memiliki satu perwakilan (*representative/root*).
- Dua data dianggap berada dalam kelompok yang sama jika memiliki representative yang sama.

Contohnya:

```
A berteman dengan B
B berteman dengan C
D berteman dengan E
```

Dari data ini akan memberikan informasi bahwa A berada dalam satu jaringan yang sama dengan C melalui B, dan A tidak berada dalam jaringan dengan D (D hanya berteman dengan E).

## Konsep Representative

Setiap kelompok memiliki satu wakil yang disebut *representative/root/parent utama*. Contohnya, ada jaringan pertemanan antara A, B, dan C. Kita misalkan representative akhirnya adalah C, sehingga kita dapat menuliskan:

| Nama | Representative |
|------|----------------|
| A | C |
| B | C |
| C | C |

## Implementasi Code

Disjoint Set dalam Java dapat diimplementasikan menggunakan Array, HashMap, dan Tree yang akan memetakan setiap data ke perwakilan dari kelompoknya. Dalam contoh ini diberikan dalam bentuk **HashMap**:

```java
import java.util.HashMap;
import java.util.Map;

public class DisjointSet {

    private Map<String, String> perwakilan = new HashMap<>();

    public void makeSet(String nama) {
        perwakilan.put(nama, nama);
    }

    // Fungsi "find" untuk mencari perwakilan dari elemen
    public String find(String nama) {
        if (!perwakilan.get(nama).equals(nama)) {
            perwakilan.put(nama, find(perwakilan.get(nama))); // Path compression
        }
        return perwakilan.get(nama);
    }

    // Fungsi "union" untuk menggabungkan dua kelompok
    public void union(String a, String b) {
        String repA = find(a);
        String repB = find(b);
        if (!repA.equals(repB)) {
            perwakilan.put(repA, repB);
        }
    }

    // Fungsi untuk mengecek apakah dua elemen dalam kelompok yang sama
    public boolean isSameGroup(String a, String b) {
        return find(a).equals(find(b));
    }

    // Contoh penggunaan
    public static void main(String[] args) {
        DisjointSet ds = new DisjointSet();

        ds.makeSet("Andi");
        ds.makeSet("Budi");
        ds.makeSet("Caca");
        ds.makeSet("Deni");
        ds.makeSet("Edo");

        ds.union("Andi", "Budi");
        ds.union("Budi", "Caca");
        ds.union("Deni", "Edo");

        if (ds.isSameGroup("Andi", "Caca")) {
            System.out.println("Andi dan Caca berada dalam satu jaringan yang sama");
        }

        if (!ds.isSameGroup("Andi", "Edo")) {
            System.out.println("Andi dan Edo TIDAK berada dalam satu jaringan yang sama");
        }
    }
}
```
