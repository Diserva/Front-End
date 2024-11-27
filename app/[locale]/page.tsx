import Link from "next/link";

export default function page() {
  return (
    <div>page <Link href={"/some"}>click</Link></div>
  )
}
