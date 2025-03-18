import * as React from "react"
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 
const tuberCancerLogo = "/brain.png";
export function TuberCancer() {
  return (
    <Card >
      <CardHeader >
      <div className="flex items-center gap-2">
          <Image
            src={tuberCancerLogo}
            alt="Brain Cancer Logo"
            width={50} // Adjust size as needed
            height={50}
            className="rounded-full filter invert brightness-0"
          />
           <CardTitle className="break-words whitespace-normal w-full">
            Tuberculosis
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>Tuberculosis is an infectious disease that primarily affects the lungs.</p>
      </CardContent>
       <CardFooter className="flex justify-center">
       <Link href="/imageuploader/tuberup">
              <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-300 transition">
                Know more
              </button>
              </Link>
            </CardFooter>
    </Card>
  )
}
