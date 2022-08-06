import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
    href: string;
    exact: boolean;
    className: string;
    children: ReactNode;
}

NavLink.defaultProps = {
    exact: false,
}

export default function NavLink(props: NavLinkProps) {
    const { href, exact, children, ...restProps } = props;
    const { asPath } = useRouter();
    const isActive = exact ? asPath === href : asPath.startsWith(href) || asPath.includes(href);

    if (isActive) {
        restProps.className += ' active';
    }

    return (
        <Link href={href}>
            <a {...restProps}>
                {children}
            </a>
        </Link>
    );
}