import { AdaptiveView } from '../_components/view'
import MobileFeedPage from './mobile'
import DesktopFeedPage from './desktop'

export default async function FeedPage() {
  return <AdaptiveView mobile={<MobileFeedPage />} desktop={<DesktopFeedPage />} />
}
