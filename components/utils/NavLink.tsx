import { useRouter } from 'next/router'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface NavLinkProps {
  href: string;
  exact?: boolean;
  className?: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, exact, children, ...restProps }) => {
	const { asPath } = useRouter()
	const isActive = exact
		? asPath === href
		: asPath.startsWith(href) || asPath.includes(href)

	if (isActive) {
		restProps.className += ' active'
	}

	return (
		<Link href={href}>
			<a {...restProps}>{children}</a>
		</Link>
	)
}

NavLink.defaultProps = {
	exact: false,
}

export default NavLink
