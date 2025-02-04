
import { Button } from "@/components/ui/button";

export default function Login() {
	
	return (
		<a href={process.env.NEXT_PUBLIC_DISCORD_AUTH_URL}>
			<Button className="!bg-red-600">Login</Button>
		</a>
	);
}
