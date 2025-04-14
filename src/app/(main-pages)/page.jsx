import Link from "next/link";
import Loading from "@/app/loading";

export default function Home() {
    return (
        <div className=" flex flex-col min-h-screen ">
            <div className='h-[65px]'></div>
            <main className="flex w-full flex-col">
                <h1>Hello Next.Js</h1>
                <Link href={'/dashboard/products'}>Go to Dashboard</Link>
            </main>

        </div>
    );
}
