import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function ToolsAndTech() {
	return (
		<div className="w-full text-center mt-30">
			<h1 className="text-5xl">Tools & Technologies</h1>
			<div className="w-full flex flex-wrap justify-center gap-8 mt-16">
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
		</div>
	);
}
