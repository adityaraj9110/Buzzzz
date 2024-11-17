import { publicImages } from 'shared/config'

export type SitePromise = {
  label: string
  url: string
}

export const sitePromisesData: SitePromise[] = [
  { label: '24/7 Service', url: publicImages['24HrsImage'] },
  { label: 'Real-Time Tracking', url: publicImages['location'] },
  { label: 'Affordable Rides', url: publicImages['rupees'] },
  { label: 'Safety First', url: publicImages['safety'] },
]
