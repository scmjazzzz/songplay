import { useSearchParams, useRouter } from 'next/navigation'

export function useRedirect() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const redirectToPath = searchParams.get('next') ?? '/'

  const redirect = () => {
    router.push(redirectToPath)
  }

  return redirect
}
