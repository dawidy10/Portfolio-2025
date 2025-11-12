import ProjectCard from "@/components/ProjectCard";
export default function Projects() {
	return (
		<>
			<h1 className="text-5xl mt-20">Personal & Client Work</h1>
			<div className="grid gird-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14 w-full mt-20">
				<ProjectCard
					image="/BlindHopeLogoBlack.svg"
					tags={["Game Development", "Logo Design"]}
					link="blind-hope"
				/>
				<ProjectCard
					image="/ApologiaLogoBlack.svg"
					tags={["Branding", "Logo Design"]}
					link="apologia-reformata"
				/>
				<ProjectCard image="/SharkLogoBlack.svg" tags={["Logo Design", "Branding"]} link="shark" />

				<ProjectCard
					image="/transformatLogoBlack.svg"
					tags={["Logo Design", "Branding", "Clothing Design"]}
					link="transformat"
				/>

				<ProjectCard image="/IancuLogoBlack.svg" tags={["Logo Design", "Branding"]} link="iancu" />
			</div>
			<p className="mt-30 text-center font-bold">davidburaga 2025</p>
		</>
	);
}
