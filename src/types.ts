/**
 * File ini menyimpan semua definisi tipe data (Interfaces)
 * agar kode komponen utama tetap bersih.
 */

export interface TechPillProps {
  svgPath: string;
  name: string;
  color: string;
}

// Anda bisa menambahkan interface lain di sini nanti
export interface TechStackGroup {
  title: string;
  items: TechPillProps[];
}
