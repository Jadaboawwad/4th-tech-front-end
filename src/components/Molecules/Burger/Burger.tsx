import { appText } from 'data/appText'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import Container from 'components/Atoms/Container/Container'
import BurgerStyles from 'components/Molecules/Burger/Burger.module.css'


const Burger: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false)


  return (
    <Container className={BurgerStyles.burgerWrapper}>
      <Container className={BurgerStyles.menuWrapper}>
        <p>{appText.menu.label}</p>
        <Container
          className={isActive ? BurgerStyles.change : BurgerStyles.barsWrapper}
          onClick={() => setIsActive(!isActive)}
          testId="bars"
        >
          <div className={BurgerStyles.bar1} />
          <div className={BurgerStyles.bar2} />
          <div className={BurgerStyles.bar3} />
        </Container>
      </Container>

   
        {isActive && (
          <ul className={BurgerStyles.burgerList}>
            {appText.navItems.map((el, idx) => (
                <li key={el}>
                  <Link to={`/${appText.links[idx]}`}>{el}</Link>
                </li>
              ))}
          </ul>
        )}

    </Container>
  )
}

export default Burger
