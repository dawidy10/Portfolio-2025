import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function ToolsAndTech() {
	return (
		<div className="w-full md:text-center mt-30">
			<h1 className="text-5xl">Tools & Technologies</h1>
			<div className="w-full flex flex-wrap justify-center gap-4 lg:gap-8 mt-16">
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/nextjs.svg" />
					<AvatarFallback>Next JS</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/react.svg" />
					<AvatarFallback>React JS</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/tailwind.svg" />
					<AvatarFallback>Tailwind CSS</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/supabase.svg" />
					<AvatarFallback>Supabase</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/figma.svg" />
					<AvatarFallback>Figma</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/github.svg" />
					<AvatarFallback>GitHub</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/cpp.svg" />
					<AvatarFallback>C++</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/java.svg" />
					<AvatarFallback>Java</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/python.svg" />
					<AvatarFallback>Python</AvatarFallback>
				</Avatar>
			</div>
			<p className="mt-16 text-xl">
				My go-to tech stack for web development is{" "}
				<span>
					<br />
				</span>
				<span className="text-accent">NextJS - TailwindCSS - Supabase.</span>
			</p>
			<p className="mt-10 md:text-lg">
				I also have experience building projects with languages such as Java, Python, C++ and Verilog
			</p>
		</div>
	);
}
