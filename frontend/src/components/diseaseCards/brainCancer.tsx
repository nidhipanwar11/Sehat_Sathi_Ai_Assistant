import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; 

const brainCancerLogo = "/brain.png";

export function BrainCancer() {
  return (
    <Card >
      {/* Ensure logo and title are in a single flex container */}
      <CardHeader>
        <div className="flex items-center gap-2">
          <Image
            src={brainCancerLogo}
            alt="Brain Cancer Logo"
            width={50}
            height={50}
            className="rounded-full filter invert brightness-0"
          />
          <CardTitle >Brain Cancer</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>Brain cancer is a disease where cells in the brain grow uncontrollably.</p>
      </CardContent>
      <CardFooter className="flex justify-center">
      <Link href="/imageuploader/brainup">
        <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-300 transition">
          Know more
        </button>
        </Link>
      </CardFooter>
    </Card>
  );
}
