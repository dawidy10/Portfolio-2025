import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
export default function ShowEmail() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" className="cursor-pointer">
					<p className="font-bold">Show Email</p>
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<p>davidburaga04@gmail(dot)com</p>
			</PopoverContent>
		</Popover>
	);
}
