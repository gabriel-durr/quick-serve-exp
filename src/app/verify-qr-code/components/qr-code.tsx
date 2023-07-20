import QRCode from 'react-qr-code'

type QrCodeProps = {
  otpAuthUrl: string
}

export const QrCode = async ({ otpAuthUrl }: QrCodeProps) => <QRCode value={otpAuthUrl} />
