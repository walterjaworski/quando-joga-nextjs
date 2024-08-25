import escudo from "@/public/images/escudo-athletico.svg";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <>
      <Image
        src={escudo}
        alt="Escudo Athlético"
        width={50}
      />
    </>
  );
}
