import ProjectCard from "@/components/ProjectCard";
export default function Projects() {
	return (
		<>
			<h1 className="text-5xl mt-20">Personal & Client Work</h1>
			<div className="grid gird-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14 w-full mt-20">
				<ProjectCard image="/VesselLogoBlack.svg" tags={["Web Development", "Web Desing", "Logo Design"]} />
				<ProjectCard image="/BlindHopeLogoBlack.svg" tags={["Web Desing", "Logo Design", "Branding"]} />
				<ProjectCard
					image="/ApologiaLogoBlack.svg"
					tags={["Web Desing", "Logo Design", "Branding"]}
					link="apologia-reformata"
				/>
				<ProjectCard image="/IancuLogoBlack.svg" tags={["Web Desing", "Logo Design", "Branding"]} />
			</div>
			<p className="mt-30 text-center font-bold">davidburaga 2025</p>
		</>
	);
}
