import { Badge } from "@/components/ui/badge";
import ShowEmail from "@/components/ShowEmail";
import CallToAction from "@/components/CallToAction";
export default function Project() {
	return (
		<div className="flex flex-col gap-8 items-center mt-14 md:px-10">
			<img src="/BlindHope/logo.svg" alt="Blind Hope" className="w-50" />
			<div className="flex flex-col items-center gap-2 mt-4">
				<h1 className="text-3xl">Blind Hope - Java 2D Platformer</h1>
				<div className="flex mt-4">
					<Badge className="mr-2 opacity-50">Game Development</Badge>
					<Badge className="mr-2 opacity-50">Logo Design</Badge>
				</div>
			</div>
			<img src="/BlindHope/menu.png" alt="" />
			<div className="flex flex-col lg:flex-row gap-8 w-full">
				<div className="lg:w-[70%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full" src="/BlindHope/level1.png" alt="" />
				</div>
				<div className="lg:w-[30%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full w-full" src="/BlindHope/sketch.jpg" alt="" />
				</div>
			</div>
			<img src="/BlindHope/blindfold.gif" alt="" />
			<div className="flex flex-col lg:flex-row gap-8 w-full">
				<div className="lg:w-[40%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full" src="/BlindHope/icon.jpg" alt="" />
				</div>
				<div className="lg:w-[60%] overflow-hidden lg:h-100">
					<img className="object-cover lg:h-full" src="/BlindHope/level2.png" alt="" />
				</div>
			</div>
			<img src="/BlindHope/level3.png" alt="" />
			<img src="/BlindHope/uml.png" alt="" />
			<div className="mt-10 w-full">
				<h1 className="text-4xl lg:text-5xl">Need help with a project?</h1>
				<div className="flex flex-wrap mt-10 gap-6">
					<ShowEmail />
					<CallToAction text="Book a call >" link="https://calendly.com/davidburaga10/discutie-1-la-1" />
				</div>
			</div>
			<p className="mt-30 text-center font-bold">davidburaga 2025</p>
		</div>
	);
}
