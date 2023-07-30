import Footer from "./footer";

export default function Section() {
    return (
        <div className='relative top-0 flex flex-col justify-center items-center right-0 w-full md:w-[82%] h-screen p-3 md:ps-0'>
            <main className="relative w-full bg-slate-400 h-full rounded-t-lg flex items-center justify-center z-0">
                content
            </main>
            <div className="relative w-full">
                <Footer />
            </div>
        </div>
    )
}
