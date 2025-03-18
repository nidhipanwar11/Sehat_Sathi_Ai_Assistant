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

const breastCancerLogo = "/body.png";

export function BreastCancer() {
  return (
    <Card >
      {/* Wrapping image and title inside a flex div */}
      <CardHeader>
        <div className="flex items-center gap-2">
          <Image
            src={breastCancerLogo}
            alt="Breast Cancer Logo"
            width={50}
            height={50}
            className="rounded-full filter invert brightness-100 opacity-60"
          />
          <CardTitle >Lung Cancer</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>Lung cancer is a disease in which cells in the lungs grow uncontrollably.</p>
      </CardContent>
       <CardFooter className="flex justify-center">
        <Link href="/imageuploader/chestup">
              <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-300 transition">
                Know more
              </button></Link>
            </CardFooter>
    </Card>
  );
}
