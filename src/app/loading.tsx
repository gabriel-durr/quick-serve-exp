import { QseLoading } from '~/animations/qse-loading'

export default async function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <QseLoading />
    </div>
  )
}
