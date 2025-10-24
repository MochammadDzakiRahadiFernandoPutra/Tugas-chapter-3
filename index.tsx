import Image from "next/image";
type Props = {
  imageSource: string;
  name: string;
  children: React.ReactNode;
};
export default function Card(prop: Props) {
  return (
    <div className="w-full md:w-60 border p-5 rounded-sm flex flex-col items-center">
      <Image
        alt="image1"
        width={100}
        height={100}
        className="rounded-full"
        src={prop.imageSource}
      />
      <strong className="mt-3 text-center font-semibold text-lg">
        {prop.name}
      </strong>
      <div className="font-thin text-sm text-center">{prop.children}</div>
    </div>
  );
}
