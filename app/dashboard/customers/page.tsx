import Link from 'next/link';
export default function Page() {
    return (
    <Link href="../" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
            <span>Log in</span>
          </Link>
    );
  }