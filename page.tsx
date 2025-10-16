
import Card from "@/components/card";
import Image from "next/image";

export default function LearnComponent() {
  return (
    <div className="w-full p-10 gap-5 flex flex-wrap justify-center">
      {/* CARD 1 */}
      <div className="flex flex-col items-center">
        <Card
          imageSource="https://i.pinimg.com/736x/03/bb/08/03bb08f78af1bd1aa010afe2ad642840.jpg"
          name="my istri🥰"
        >
          karbit pergi ajah😡
        </Card>
        <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Lihat Detail
        </button>
      </div>

      {/* CARD 2 */}
      <div className="flex flex-col items-center">
        <Card
          imageSource="https://i.pinimg.com/736x/95/d0/87/95d0870c39b41d45c92d147889a24256.jpg"
          name="anak kecil luwh"
        >
          orang dewasa dilarang masuk😜
        </Card>
        <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Lihat Detail
        </button>
      </div>

      {/* CARD 3 */}
      <div className="flex flex-col items-center">
        <Card
          imageSource="https://i.pinimg.com/736x/49/08/4a/49084aebf9c7cfdb94f7b8107e211e28.jpg"
          name="Gweh banget🥶"
        >
          aseli no howak
        </Card>
        <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Lihat Detail
        </button>
      </div>

      {/* CARD 4 */}
      <div className="flex flex-col items-center">
        <Card
          imageSource="https://i.pinimg.com/736x/49/08/4a/49084aebf9c7cfdb94f7b8107e211e28.jpg"
          name="Buzzer luwh😡"
        >
          awas kamu yah😡
        </Card>
        <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Lihat Detail
        </button>
      </div>

      {/* CARD 5 */}
      <div className="flex flex-col items-center">
        <Card
          imageSource="https://scontent.fsub32-1.fna.fbcdn.net/v/t39.30808-6/518400400_1095552519300171_1131930284097399877_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHUKvMag5u-US-8CeRgNzRBwUBXGi16TJfBQFcaLXpMl0Z9jWOP-Ok5Kz0sv2nnoaJ2EwUxsGiSjMgDMIEc247w&_nc_ohc=5htg-mzO_YsQ7kNvwHAxGEf&_nc_oc=AdmTYn99JQiKb3gBWWLs7mLYk2NYDeQSzQDtlJWuBH4o1DuAeL7RnTObFfS42TEeR6o&_nc_zt=23&_nc_ht=scontent.fsub32-1.fna&_nc_gid=yAfI1m_dEE_c5Vi42hnp_w&oh=00_AfdLScytqIrvETtzRgRdFcme-ryaWi-c5B6mXwpNfEBlXg&oe=68F3CF07"
          name="My kisah aseli no howak🥵"
        >
          aseli no fek fek😜
        </Card>
        <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
