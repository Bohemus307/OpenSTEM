import Image from "next/image";
import Link from "next/link";


const HeaderLogo: React.FC = () => {
  return (
    <Link
      className="flex flex-col items-center justify-center bg-white rounded-md border border-black p-1"
      href={"/"}
      passHref
    >
      <Image
        width={50}
        height={50}
        src={"/images/biology1.png"}
        alt={"stem hub icon"}
      />
      <span className="text-xl font-light font-sans">Stem Hub</span>
    </Link>
  );
}
export default HeaderLogo;