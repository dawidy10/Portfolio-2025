import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Testimonial() {
	return (
		<Card className="w-full">
			<CardHeader className="flex items-center gap-4">
				<Avatar className="w-10 h-10">
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<CardTitle className="font-medium">
					<p className="text-xl">Daniel White</p>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales tincidunt ornare. Maecenas
					vel purus nec purus rutrum finibus. Pellentesque quis sagittis ligula. Pellentesque tempor eget
					tellus pharetra placerat. Nullam hendrerit est suscipit, fringilla leo quis, placerat est. Nulla
					egestas enim at dui fringilla, sit amet facilisis eros consequat. Vestibulum ut porta magna.
				</p>
			</CardContent>
		</Card>
	);
}
