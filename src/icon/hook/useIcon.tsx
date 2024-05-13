import { ArrowBackIos } from '@mui/icons-material';
import { useCallback } from 'react';
import { IListDto } from '../../utils/list/ListUtils';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AlarmIcon from '@mui/icons-material/Alarm';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArticleIcon from '@mui/icons-material/Article';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import CachedIcon from '@mui/icons-material/Cached';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ChatIcon from '@mui/icons-material/Chat';
import CheckIcon from '@mui/icons-material/Check';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CreateIcon from '@mui/icons-material/Create';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandIcon from '@mui/icons-material/Expand';
import FacebookIcon from '@mui/icons-material/Facebook';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import FolderIcon from '@mui/icons-material/Folder';
import GoogleIcon from '@mui/icons-material/Google';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import InfoIcon from '@mui/icons-material/Info';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import KeyIcon from '@mui/icons-material/Key';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LoginIcon from '@mui/icons-material/Login';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MovieIcon from '@mui/icons-material/Movie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SmsIcon from '@mui/icons-material/Sms';
import StarRateIcon from '@mui/icons-material/StarRate';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UploadIcon from '@mui/icons-material/Upload';

export type IconColorType =
  | 'inherit'
  | 'action'
  | 'disabled'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export const ICONS = {
  add: { react: (color: IconColorType) => <AddIcon color={color} /> },
  back: { react: (color: IconColorType) => <ArrowBackIos color={color} /> },
  delete: { react: (color: IconColorType) => <DeleteIcon color={color} /> },
  folder: { react: (color: IconColorType) => <FolderIcon color={color} /> },
  settings: { react: (color: IconColorType) => <SettingsIcon color={color} /> },
  shopping: { react: (color: IconColorType) => <ShoppingCartIcon color={color} /> },
  alarm: { react: (color: IconColorType) => <AlarmIcon color={color} /> },
  account: { react: (color: IconColorType) => <AccountBalanceIcon color={color} /> },
  avatar: { react: (color: IconColorType) => <AccountCircleIcon color={color} /> },
  call: { react: (color: IconColorType) => <AddIcCallIcon color={color} /> },
  movie: { react: (color: IconColorType) => <MovieIcon color={color} /> },
  pencil: { react: (color: IconColorType) => <CreateIcon color={color} /> },
  exit: { react: (color: IconColorType) => <ExitToAppIcon color={color} /> },
  google: { react: (color: IconColorType) => <GoogleIcon color={color} /> },
  facebook: { react: (color: IconColorType) => <FacebookIcon color={color} /> },
  personAdd: { react: (color: IconColorType) => <PersonAddIcon color={color} /> },
  search: { react: (color: IconColorType) => <SearchIcon color={color} /> },
  searchBig: { react: (color: IconColorType) => <ScreenSearchDesktopIcon color={color} /> },
  close: { react: (color: IconColorType) => <CloseIcon color={color} /> },
  sun: { react: (color: IconColorType) => <Brightness5Icon color={color} /> },
  moon: { react: (color: IconColorType) => <Brightness4Icon color={color} /> },
  info: { react: (color: IconColorType) => <InfoIcon color={color} /> },
  menu: { react: (color: IconColorType) => <MenuIcon color={color} /> },
  inbox: { react: (color: IconColorType) => <InboxIcon color={color} /> },
  mail: { react: (color: IconColorType) => <MailIcon color={color} /> },
  star: { react: (color: IconColorType) => <StarRateIcon color={color} /> },
  click: { react: (color: IconColorType) => <AdsClickIcon color={color} /> },
  camera: { react: (color: IconColorType) => <PhotoCameraFrontIcon color={color} /> },
  dashboard: { react: (color: IconColorType) => <DashboardIcon color={color} /> },
  link: { react: (color: IconColorType) => <InsertLinkIcon color={color} /> },
  admin: { react: (color: IconColorType) => <AdminPanelSettingsIcon color={color} /> },
  user: { react: (color: IconColorType) => <PersonIcon color={color} /> },
  profile: { react: (color: IconColorType) => <AccountBoxIcon color={color} /> },
  home: { react: (color: IconColorType) => <HomeIcon color={color} /> },
  login: { react: (color: IconColorType) => <LoginIcon color={color} /> },
  password: { react: (color: IconColorType) => <PasswordIcon color={color} /> },
  refresh: { react: (color: IconColorType) => <CachedIcon color={color} /> },
  bookmark: { react: (color: IconColorType) => <BookmarkIcon color={color} /> },
  gift: { react: (color: IconColorType) => <CardGiftcardIcon color={color} /> },
  notification: { react: (color: IconColorType) => <NotificationsIcon color={color} /> },
  right: { react: (color: IconColorType) => <ArrowCircleRightIcon color={color} /> },
  news: { react: (color: IconColorType) => <AnnouncementIcon color={color} /> },
  blog: { react: (color: IconColorType) => <ArticleIcon color={color} /> },
  checklist: { react: (color: IconColorType) => <ChecklistIcon color={color} /> },
  help: { react: (color: IconColorType) => <HelpIcon color={color} /> },
  check: { react: (color: IconColorType) => <CheckIcon color={color} /> },
  chat: { react: (color: IconColorType) => <ChatIcon color={color} /> },
  sms: { react: (color: IconColorType) => <SmsIcon color={color} /> },
  faq: { react: (color: IconColorType) => <QuestionAnswerIcon color={color} /> },
  toy: { react: (color: IconColorType) => <SmartToyIcon color={color} /> },
  construction: { react: (color: IconColorType) => <PrecisionManufacturingIcon color={color} /> },
  wait: { react: (color: IconColorType) => <HourglassEmptyIcon color={color} /> },
  copy: { react: (color: IconColorType) => <ContentCopyIcon color={color} /> },
  message: { react: (color: IconColorType) => <MessageIcon color={color} /> },
  key: { react: (color: IconColorType) => <KeyIcon color={color} /> },
  share: { react: (color: IconColorType) => <ShareIcon color={color} /> },
  send: { react: (color: IconColorType) => <SendIcon color={color} /> },
  download: { react: (color: IconColorType) => <DownloadIcon color={color} /> },
  upload: { react: (color: IconColorType) => <UploadIcon color={color} /> },
  market: { react: (color: IconColorType) => <LocalGroceryStoreIcon color={color} /> },
  training: { react: (color: IconColorType) => <ModelTrainingIcon color={color} /> },
  email: { react: (color: IconColorType) => <EmailIcon color={color} /> },
  fullscreen: { react: (color: IconColorType) => <FitScreenIcon color={color} /> },
  expand: { react: (color: IconColorType) => <ExpandIcon color={color} /> },
  reducer: { react: (color: IconColorType) => <UnfoldLessIcon color={color} /> },
};

export const useIcon = () => {
  const getIcon = useCallback((icon?: string, color?: IconColorType, disabled?: boolean) => {
    let colorOk: IconColorType = color ?? 'inherit';
    if (disabled) {
      colorOk = 'disabled';
    }
    let iconReact = undefined;
    Object.entries(ICONS).forEach(([key, data]) => {
      if (key === icon) {
        iconReact = data.react(colorOk);
      }
    });
    return iconReact;
  }, []);

  const getIconListDto = useCallback((): IListDto[] => {
    const removes = [
      'add',
      'back',
      'click',
      'close',
      'delete',
      'exit',
      'inbox',
      'login',
      'menu',
      'moon',
      'notification',
      'password',
      'personAdd',
      'refresh',
      'right',
      'sun',
      'user',
      'login',
      'password',
      'refresh',
      'right',
      'news',
      'blog',
      'wait',
      'copy',
      'send',
      'download',
      'upload',
      'market',
    ];

    return Object.entries(ICONS)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .filter((icon) => !removes.includes(icon[0]))
      .map(([key]) => {
        return { id: key, libelle: key, icon: key };
      });
  }, []);

  return { getIcon, getIconListDto };
};
