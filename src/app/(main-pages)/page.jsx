import ImageResponse from "@/app/components/ImageResponse";

import Slider2 from "@/app/components/Slider2";

export default function Home() {

    return (
        <div className=" flex flex-col min-h-screen ">
            <div className='!h-[65px]'></div>

            <main className="flex w-full flex-col">

                <Slider2/>
                <ImageResponse/>
            </main>





        </div>
    );
}
