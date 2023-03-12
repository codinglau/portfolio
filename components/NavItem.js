import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavItems({ items }) {
  const router = useRouter();

  return (
    <>
      {
        items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-base ${
              router.asPath === item.href
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            {item.name}
            {router.asPath === item.href && (
              <i className="bi bi-arrow-down"></i>
            )}
          </Link>
        ))
      }
    </>
  );
}