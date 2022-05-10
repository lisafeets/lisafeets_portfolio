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
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="hover:text-success duration-200 transition-colors p-4 block"
                        >
                        Blog
                        </a>
                    </li>
                    <li>
                        <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="hover:text-success duration-200 transition-colors p-4 block"
                        >
                        Works
                        </a>
                    </li>
                    <li>
                        <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="hover:text-success duration-200 transition-colors p-4 block"
                        >
                        Contact
                        </a>
                    </li>
                </ul>
            </>
          }
      </Container>
    </>
  )
}
