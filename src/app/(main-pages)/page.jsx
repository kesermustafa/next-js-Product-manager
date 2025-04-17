import ImageResponse from "@/app/components/ImageResponse";
import Slider2 from "@/app/components/Slider2";

export const metadata = {
    title: "Home Page",
    description: "Generated by create next app",
};

export default function Home() {

    return (
        <div className=" flex flex-col min-h-screen ">
            <main className="flex w-full flex-col">
                <Slider2/>
                <ImageResponse/>
            </main>
        </div>
    );
}
