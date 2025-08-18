import { Badge } from "@/components/ui/badge";
import ShowEmail from "@/components/ShowEmail";
import CallToAction from "@/components/CallToAction";
export default function Project() {
	return (
		<div className="flex flex-col gap-8 items-center mt-14 px-10">
			<img src="/BlindHope/logo.svg" alt="Blind Hope" className="w-50" />
			<div className="flex flex-col items-center gap-2 mt-4">
				<h1 className="text-3xl">Blind Hope - Java 2D Platformer</h1>
				<div className="flex mt-4">
					<Badge className="mr-2 opacity-50">Game Development</Badge>
					<Badge className="mr-2 opacity-50">Logo Design</Badge>
				</div>
			</div>
		</div>
	);
}
