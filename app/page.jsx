import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import ToolsAndTech from "@/components/ToolsAndTech";
import Testimonial from "@/components/Testimonial";
import ShowEmail from "@/components/ShowEmail";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="w-full border-l-1 border-r-1 mt-10 px-14 py-10">
				<h1 className="text-5xl">Hi, I'm David.</h1>
				<p className="mt-4 text-lg w-1/2">
					I’m a computer engineering student who likes to code cool projects and make them look good.
				</p>
				<h1 className="text-5xl mt-15">Projects</h1>
				<div className="flex w-full justify-between gap-4 mt-10">
					<ProjectCard image="/BlindHopeLogoBlack.svg" tags={["Web Desing", "Logo Design", "Branding"]} />
					<ProjectCard image="/ApologiaLogoBlack.svg" tags={["Web Desing", "Logo Design", "Branding"]} />
					<ProjectCard image="/IancuLogoBlack.svg" tags={["Web Desing", "Logo Design", "Branding"]} />
				</div>
				<div className="w-full text-center mt-20">
					<CallToAction text="More Projects >" link="/" />
				</div>
				<ToolsAndTech />
				<h1 className="text-5xl mt-30">What people say</h1>
				<div className="flex justify-between gap-4 w-full mt-10">
					<Testimonial />
					<Testimonial />
					<Testimonial />
				</div>
				<h1 className="text-5xl mt-20">Connect with me</h1>
				<div className="flex mt-10 gap-6">
					<ShowEmail />
					<CallToAction text="Book a call >" link="/" />
					<Avatar className="rounded-none">
						<AvatarImage src="/Tools/linkedin.svg" />
						<AvatarFallback>LinkedIn</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarImage src="/Tools/github.svg" />
						<AvatarFallback>Github</AvatarFallback>
					</Avatar>
				</div>
				<p className="mt-30 text-center font-bold">davidburaga 2025</p>
			</div>
		</>
	);
}
