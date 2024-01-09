import NotFoundImage from '@/assets/NotFoundImage'
import { Button } from '@/components'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-12 p-6">
      <NotFoundImage />
      <Link to="/">
        <Button>
          <h3 className="text-base lg:text-lg">Return to the main page</h3>
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
