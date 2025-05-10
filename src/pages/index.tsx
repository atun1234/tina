import Link from "next/link";
import { use, useState } from "react";

export default function Home() {
  const [ukuran, setukuran] = useState(100)
  return (
    <>
  <Link href="/biodata">Ke Halaman Biodata</Link> <br />
     <i>Tina Tun </i> <br />
  <b>NIM : 23650003 </b> <br />
     <b>Prodi : Teknik Informatika</b>  <br />
    <img  width ={ukuran} src="poster2.jpg"  /> <br />
    <b>SUUD'ZOON</b>  
    <br />
    {ukuran}
    <br />
    <button onClick={()=> {
      setukuran(ukuran + 10)
    }}> Ubah Ukuran </button>

    <button onClick={()=> {
      setukuran(ukuran - 10)
    }}> Kurangi Ukuran </button>
    </>
  );
}
