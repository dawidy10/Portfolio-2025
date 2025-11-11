import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ptSerif } from "@/app/layout";
export default function ToolsAndTech() {
	return (
		<div className="w-[55vw] mt-50 text-center">
			<h1 className={`text-5xl ${ptSerif.className}`}>Tools & Technologies</h1>
			<div className="w-full flex flex-wrap gap-4 lg:gap-8 mt-14 justify-center">
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/cpp.svg" />
					<AvatarFallback>C++</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/react.svg" />
					<AvatarFallback>React JS</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/nextjs.svg" />
					<AvatarFallback>Next JS</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/java.svg" />
					<AvatarFallback>Java</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/github.svg" />
					<AvatarFallback>GitHub</AvatarFallback>
				</Avatar>
				<Avatar className="h-10 w-10">
					<AvatarImage src="/Tools/figma.svg" />
					<AvatarFallback>Figma</AvatarFallback>
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
					<AvatarImage src="/Tools/python.svg" />
					<AvatarFallback>Python</AvatarFallback>
				</Avatar>
			</div>
			{/* <p className="mt-16 text-xl">
				My go-to tech stack for web development is{" "}
				<span>
					<br />
				</span>
				<span className="text-accent">NextJS - TailwindCSS - Supabase.</span>
			</p> */}
			<p className="text-xl mt-14">
				Through coursework and academic projects, I have developed a solid foundation in programming and
				software development using <b>C, C++, Java, Python, SQL, Verilog</b>. On the web development side, I’ve
				worked on projects built with <b>React and Next.js</b>, using <b>Supabase</b> for backend services and{" "}
				<b>Tailwind CSS </b>
				for modern, responsive design. I rely on <b>Figma </b> as my go-to design tool.
			</p>
			{/* <p className="mt-10 md:text-lg">
				I also have experience building projects with languages such as Java, Python, C++ and Verilog
			</p> */}
		</div>
	);
}
