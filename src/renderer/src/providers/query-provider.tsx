import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

export function QueryProvider({ children }: PropsWithChildren): React.JSX.Element {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
