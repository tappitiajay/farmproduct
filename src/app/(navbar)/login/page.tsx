import vercel from "@/app/vercel.png"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
const page = () => {
  return (
    <div>
        <div className="flex justify-between px-4 py-4 bg-slate-25">
        <div>
            <Link href="/">
                <Image src={vercel} height={30} width={30} alt="Logo of the website" />
            </Link>
        </div>
        <div className="flex space-x-4">
                <Button asChild variant="outline" size='sm'>
                <Link href="/contact">Contact</Link>
                </Button>
                <Button asChild size='sm'>
                <Link href="/signup">Sign Up</Link>
                </Button>
        </div>
        </div>
        <div >
            <h1 className="text-2xl font-bold md-6 flex flex-col items-center justify-center py-10">Login in to FarmProduct</h1>
            <div className="flex flex-col items-center justify-center space-y-3">
            <button className="w-60 px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-500 transition flex items-center justify-center">
                Continue with Google
            </button>
            <button className="w-60 px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-500 transition flex items-center justify-center">
                Continue with Facebook
            </button>
            </div>
            <Link href='/login/email' className="text-blue-600 flex flex-col items-center justify-center py-3">Continue with Email →</Link>
        </div>
        <div className="my-6 border-t border-gray-300"></div>
        <div className="flex flex-col items-center justify-center py-3">
            <Link href='/signup' className="text-blue-600">Don't have an account? Sign Up</Link>
        </div>
        <div className="my-6 border-t border-gray-300"></div>
    </div>
    )
}

export default page