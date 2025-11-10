import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dmSans } from "@/app/layout";
export default function CallToAction({ text, link }) {
	return (
		<Button
			asChild
			className="bg-accent text-white border-[0.5px] border-[#FF8957] shadow-[0_0_8px_3px_rgba(225,90,48,0.3)] hover:bg-[#C05635] text-md p-5"
		>
			<Link href={link}>
				<p className={`font-bold text-lg ${dmSans.className}`}>{text}</p>
			</Link>
		</Button>
	);
}
