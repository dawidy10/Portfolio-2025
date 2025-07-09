import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function CallToAction({ link }) {
	return (
		<Button
			asChild
			className="bg-accent text-white border-[0.5px] border-[#FF8957] shadow-[0_0_8px_3px_rgba(225,90,48,0.3)] hover:bg-accent text-md"
		>
			<Link href={link}>
				<p className="font-bold">See my work</p>
			</Link>
		</Button>
	);
}
