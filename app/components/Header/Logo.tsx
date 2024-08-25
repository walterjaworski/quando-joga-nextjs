import Image from "next/image";
import escudo from "../../../public/images/escudo-athletico.svg";

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
