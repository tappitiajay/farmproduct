import vercel from "@/app/vercel.png"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex justify-between px-4 py-4 bg-slate-25">
        <div>
        <Link href="/">
          <Image src={vercel} height={30} width={30} alt="Logo of the website" />
        </Link>
          </div>
          <div className="flex space-x-4">
            <Button asChild variant="outline" size='sm'>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild variant="outline" size='sm'>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild size='sm'>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
      </div>
    </div>
  )
}

export default Home