import { isServerMobile } from '@/shared/utils/is-server-mobile'
import MobileFeedPage from './mobile'
import DesktopFeedPage from './desktop'

export default async function FeedPage() {
  const isMobile = await isServerMobile()

  return isMobile ? <MobileFeedPage /> : <DesktopFeedPage />
}
