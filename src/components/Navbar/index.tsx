import Layout from "../LayoutContainer";
import Button from "../Button";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
  })
  
export default function Navbar(){
    return (
        <Layout className="fixed right-0 top-10">
            <Layout className="flex items-center m-2">
                <Button type="button" className={`mr-8 text-xl ${roboto.className}`}>Home</Button>
                <Button type="button" className={`mr-8 text-xl ${roboto.className}`}>Services</Button>
                <Button type="button" className={`mr-8 text-xl ${roboto.className}`}>Projects</Button>
            </Layout>
        </Layout>
    )
}