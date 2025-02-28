import { headers } from 'next/headers'
import { HEADERS } from '../constants/headers'

export async function isServerMobile() {
  const headersList = await headers()
  const device = headersList.get(HEADERS.DEVICE_TYPE)

  return !!(device === 'mobile')
}
