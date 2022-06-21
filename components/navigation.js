import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Navigation() {
  return (
    <>
      <Container>
          {
            <>
                <ul className="flex justify-end">
                    <li>
                        <a
                        href={`/`}
                        className="hover:text-success duration-200 transition-colors p-4 block"
                        >
                        Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                        href={`https://medium.com/@lisafeets`}
                        className="hover:text-success duration-200 transition-colors p-4 block"
                        >
                        Blog
                        </a>
                    </li>
                    <li>
                        <a
                        href={`/about`}
                        className="hover:text-success duration-200 transition-colors p-4 block"
                        >
                        About
                        </a>
                    </li>
                </ul>
            </>
          }
      </Container>
    </>
  )
}
