import Image from "next/image";
export default function HeroSection() {
	return (
		<div className="w-full h-[80vh] relative">
			<Image alt="HeroBG" fill objectFit="cover" src="/home-bg.jpg" />
		</div>
	);
}
