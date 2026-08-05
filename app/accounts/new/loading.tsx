import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingNewAccountPage = () => {
  return (
    <div className="max-w-xl">
      <form className="space-y-3">
        <Skeleton/>
        <Skeleton height="5rem"/>
        <Skeleton/>
        <Skeleton width="2rem"/>
      </form>
    </div>
  )
}

export default LoadingNewAccountPage
