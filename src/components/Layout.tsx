import { useEffect } from "react";
import { Footer, Navbar } from "./elements";

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

export const Layout = ({title, children}: LayoutProps) => {

    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>

        <Navbar></Navbar>

        <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}

        </main>


        <Footer></Footer>
        </>
    )
}