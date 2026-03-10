import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";
import CallToAction from "./CallToAction";
import { dmSans } from "@/app/layout";
import { ptSerif } from "@/app/layout";
import { LogoCarousel } from "./LogoCarousel";
import Link from "next/link";

const logos = [
	{ src: "/ApologiaLogoBlack2.svg", alt: "Brand 1" },
	{ src: "/SharkLogoBlack2.svg", alt: "Brand 2" },
	{ src: "/GenesisLogoBlack.svg", alt: "Brand 3" },
	{ src: "/TransformatLogoBlack.svg", alt: "Brand 5" },
	{ src: "/AloraLogoBlack.svg", alt: "Brand 4" },
];

export default function HeroSection() {
	return (
		<div className="w-full h-[80vh] relative border-1 rounded-md overflow-hidden text-center">
			<div className="absolute top-10 z-10 right-10 flex gap-8">
				<Link href="https://www.linkedin.com/in/david-buraga-aba007365/">
					<Avatar className="rounded-none">
						<AvatarImage src="/Tools/linkedin.svg" />
						<AvatarFallback>LI</AvatarFallback>
					</Avatar>
				</Link>
				<Link href="https://github.com/dawidy10">
					<Avatar>
						<AvatarImage src="/Tools/github.svg" />
						<AvatarFallback>GH</AvatarFallback>
					</Avatar>
				</Link>
			</div>
			<div className="flex flex-col gap-2 md:gap-1 items-center h-full justify-center">
				<h1 className={`text-4xl md:text-5xl ${ptSerif.className}`}>David Buraga</h1>
				<p className={`text-lg md:text-2xl ${dmSans.className}`}>Developer & Designer</p>
				<div className="mt-4 z-10">
					<CallToAction text="See my work" link="/projects" />
				</div>
			</div>
			<LogoCarousel logos={logos} />
		</div>
	);
}
