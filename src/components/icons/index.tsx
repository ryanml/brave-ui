import styled, { StyledComponentClass } from 'styled-components'
// rotated imports
import ArrowIcon from './arrow'
import CaratIcon from './carat'

// rotated variants
function RotatedIconComponent (iconComponent: StyledComponentClass<any, any>, degrees: number) {
  return styled(iconComponent)`
    transform: rotate(${degrees}deg);
  `
}

// simple
export { default as AlertCircleIcon } from './alert-circle'
export const ArrowLeftIcon = RotatedIconComponent(ArrowIcon, 0)
export const ArrowRightIcon = RotatedIconComponent(ArrowIcon, 180)
export const ArrowDownIcon = RotatedIconComponent(ArrowIcon, -90)
export const ArrowUpIcon = RotatedIconComponent(ArrowIcon, 90)
export { default as BookmarkFolderIcon } from './bookmark-folder'
export const CaratRightIcon = RotatedIconComponent(CaratIcon, 180)
export const CaratLeftIcon = RotatedIconComponent(CaratIcon, 0)
export const CaratUpIcon = RotatedIconComponent(CaratIcon, 90)
export const CaratDownIcon = RotatedIconComponent(CaratIcon, -90)
export { default as CheckCircleIcon } from './check-circle'
export { default as CheckIcon } from './check'
export { default as ClipboardIcon } from './clipboard'
export { default as CloseCircleIcon } from './close-circle'
export { default as CloseStrokeIcon } from './close'
export { default as DownloadIcon } from './download'
export { default as EmoteSadIcon } from './emote-sad'
export { default as EmoteSmileIcon } from './emote-smile'
export { default as LogoYoutubeIcon } from './logo-youtube'
export { default as OpenNewIcon } from './open-new'
export { default as PaymentDueIcon } from './payment-due'
export { default as PrintIcon } from './print'
export { default as RefreshIcon } from './refresh'
export { default as SendIcon } from './send'
export { default as SettingsAdvancedIcon } from './settings-advanced'
export { default as SettingsIcon } from './settings'
export { default as ShieldAlertIcon } from './shield-alert'
export { default as ShieldAlertStrokeIcon } from './shield-alert-o'
export { default as ThumbsUpIcon } from './thumbs-up'
export { default as UpholdSystemIcon } from './logo-uphold'
export { default as VerifiedFillIcon } from './verified'
export { default as VerifiedIcon } from './verified-o'
export { default as WalletInfoIcon } from './wallet-info'
export { default as WalletAddIcon } from './wallet-add'
export { default as WalletBackupIcon } from './wallet-backup'
export { default as WalletBlockIcon } from './wallet-block'
export { default as WalletCloseIcon } from './wallet-close'
export { default as WalletCheckIcon } from './wallet-check'
export { default as WalletImportIcon } from './wallet-import'
export { default as WalletLockIcon } from './wallet-lock'
export { default as WalletManageIcon } from './wallet-manage'
export { default as WalletMinusIcon } from './wallet-minus'
export { default as WalletOpenIcon } from './wallet-open'
export { default as WalletWithdrawIcon } from './wallet-withdraw'

// complex, do not autogenerate
// TODO(petemill): Should have separate process for logos
export { default as BatColorIcon } from './fc-logo-bat'
export { default as BatGreyIcon } from './fc-logo-bat-grey'
export { default as BitcoinColorIcon } from './fc-logo-bitcoin'
export { default as DuckDuckGoIcon } from './fc-logo-ddg'
export { default as EthereumColorIcon } from './fc-logo-ethereum'
export { default as LitecoinColorIcon } from './fc-logo-litecoin'
export { default as LoaderIcon } from './loader'
export { default as PaperAirplaneIcon } from './paper-airplane'
export { default as TorLockIcon } from './tor-lock'
export { default as TwitchColorIcon } from './fc-logo-twitch'
export { default as TwitterColorIcon } from './fc-logo-twitter'
export { default as UpholdColorIcon } from './fc-logo-uphold'
export { default as YoutubeColorIcon } from './fc-logo-youtube'
export { default as SendTipsIcon } from './send-tips'

// illustrative
export { default as GiftIcon } from './illustrative/gift'
export { default as LoveIcon } from './illustrative/love'
export { default as MegaphoneIcon } from './illustrative/megaphone'
