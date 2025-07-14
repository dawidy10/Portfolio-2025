import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function ProjectsLayout({ children }) {
	return (
		<div className="w-full md:px-20 pt-10 px-6 pb-10">
			<Link className="flex gap-2" href="/">
				<ArrowLeft />
				<p className="text-lg">Home</p>
			</Link>
			{children}
		</div>
	);
}
