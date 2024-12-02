import { appText } from 'data/appText'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import Container from 'components/Atoms/Container/Container'
import NavbarStyles from 'components/Molecules/Navbar/Navbar.module.css'
import { useViewport } from 'hooks/useViewport'


const Navbar: FC = () => (
  <>
    {useViewport() === 'extra-large' && (
      <Container className={NavbarStyles.navbarWrapper}>
        <ul className={NavbarStyles.navbarList} data-testid="navbarList">
          {appText.navItems.map((el, idx) => (
              <li data-testid="listitem" key={el}>
                <Link to={`/${appText.links[idx]}`}>{el}</Link>
              </li>
            ))}
        </ul>
      </Container>
    )}
  </>
)

export default Navbar
