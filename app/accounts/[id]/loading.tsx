import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingAccountDetailsPage = () => {
  return (
    <div>
      <h1 className="mb-2"><Skeleton width="6rem" height="2rem"/></h1>
      <p className="mb-2"><strong>Description:</strong> <Skeleton width="8rem"/></p>
      <p className="mb-2"><strong>IBAN:</strong> <Skeleton width="12rem"/></p>
      <p className="mb-2"><strong>Status:</strong> <Skeleton width="5rem"/></p>
      <p className="mb-2"><strong>Created At:</strong> <Skeleton width="8rem"/></p>
    </div>
  )
}

export default LoadingAccountDetailsPage
