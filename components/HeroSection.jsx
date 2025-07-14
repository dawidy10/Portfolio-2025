import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";
import CallToAction from "./CallToAction";
export default function HeroSection() {
	return (
		<div className="w-full h-[80vh] relative bg-foreground rounded-md overflow-hidden">
			<Image alt="HeroBG" fill objectFit="cover" src="/home-bg.jpg" className="opacity-20 md:opacity-40" />
			<div className="absolute z-10 left-10 bottom-10 flex flex-col md:flex-row items-start md:items-center gap-4">
				<Avatar className="w-40 h-40">
					<AvatarImage src="avatar.jpg" />
					<AvatarFallback className="bg-foreground text-white">DB</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-2 md:gap-1 text-white">
					<h1 className="text-5xl">David Buraga</h1>
					<p className="text-xl">Developer & Designer</p>
					<div className="flex gap-1">
						<MapPin fill="white" size={20} />
						<p>Iași, Romania</p>
					</div>
					<div>
						<CallToAction text="See my work" link="/projects" />
					</div>
				</div>
			</div>
		</div>
	);
}
