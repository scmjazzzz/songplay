import { isServerMobile } from '@/shared/utils'
import MobileFeedPage from './mobile'
import DesktopFeedPage from './desktop'

export default async function FeedPage() {
  const isMobile = await isServerMobile()

  return isMobile ? <MobileFeedPage /> : <DesktopFeedPage />
}
