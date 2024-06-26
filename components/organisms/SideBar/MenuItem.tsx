import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon: 'ic-menu-overview' | 'ic-menu-transaction' | 'ic-menu-messages' | 'ic-menu-card' | 'ic-menu-rewards' | 'ic-menu-settings' | 'ic-menu-logout';
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function MenuItem(props: Readonly<Partial<MenuItemProps>>) {
  const { title, icon, active, href = '/', onClick } = props

  const classItem = cx({
    'item': true,
    'active': active,
    'mb-30': true,
  })

  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="Overview" />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <Link href="" className="text-lg text-decoration-none">{title}</Link>
        ) : (
          <Link href={href} className="text-lg text-decoration-none">{title}</Link>
        )}
      </p>
    </div>
  )
}
