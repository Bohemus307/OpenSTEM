import Image from "next/image";


const SignInLogo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <Image
        width={100}
        height={100}
        src={"/images/scientist.png"}
        alt={"biology style icon"}
      />
    </div>
  );
}
export default SignInLogo;

