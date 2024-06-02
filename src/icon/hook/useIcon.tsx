import TuneIcon from '@mui/icons-material/Tune';
import { useCallback } from 'react';
import { ButtonColorType } from '../../md/component/button/MdButton';

import {
  AccountBalance as AccountBalanceIcon,
  AccountBox as AccountBoxIcon,
  AccountCircle as AccountCircleIcon,
  AddIcCall as AddIcCallIcon,
  Add as AddIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  AdsClick as AdsClickIcon,
  Alarm as AlarmIcon,
  Announcement as AnnouncementIcon,
  ArrowBackIos,
  ArrowCircleRight as ArrowCircleRightIcon,
  Article as ArticleIcon,
  Bookmark as BookmarkIcon,
  Brightness4 as Brightness4Icon,
  Brightness5 as Brightness5Icon,
  Cached as CachedIcon,
  CardGiftcard as CardGiftcardIcon,
  Chat as ChatIcon,
  Check as CheckIcon,
  Checklist as ChecklistIcon,
  Close as CloseIcon,
  ContentCopy as ContentCopyIcon,
  Create as CreateIcon,
  Dashboard as DashboardIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Email as EmailIcon,
  ExitToApp as ExitToAppIcon,
  Expand as ExpandIcon,
  Facebook as FacebookIcon,
  FitScreen as FitScreenIcon,
  Folder as FolderIcon,
  Google as GoogleIcon,
  Help as HelpIcon,
  Home,
  HourglassEmpty as HourglassEmptyIcon,
  Inbox as InboxIcon,
  Info as InfoIcon,
  InsertLink as InsertLinkIcon,
  Key as KeyIcon,
  LocalGroceryStore as LocalGroceryStoreIcon,
  Login as LoginIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
  ModelTraining as ModelTrainingIcon,
  Movie as MovieIcon,
  Notifications as NotificationsIcon,
  Password as PasswordIcon,
  PersonAdd as PersonAddIcon,
  Person as PersonIcon,
  PhotoCameraFront as PhotoCameraFrontIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  QuestionAnswer as QuestionAnswerIcon,
  ScreenSearchDesktop as ScreenSearchDesktopIcon,
  Search as SearchIcon,
  Send as SendIcon,
  Settings as SettingsIcon,
  Share as ShareIcon,
  ShoppingCart as ShoppingCartIcon,
  SmartToy as SmartToyIcon,
  Sms as SmsIcon,
  StarRate as StarRateIcon,
  UnfoldLess as UnfoldLessIcon,
  Upload as UploadIcon,
} from '@mui/icons-material';
import { IListDto } from '../../dto/list/ListDto';

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    google: true;
    facebook: true;
    premium: true;
  }
}

export const ICONS = {
  add: { react: (color: ButtonColorType) => <AddIcon color={color} /> },
  back: { react: (color: ButtonColorType) => <ArrowBackIos color={color} /> },
  delete: { react: (color: ButtonColorType) => <DeleteIcon color={color} /> },
  folder: { react: (color: ButtonColorType) => <FolderIcon color={color} /> },
  settings: { react: (color: ButtonColorType) => <SettingsIcon color={color} /> },
  shopping: { react: (color: ButtonColorType) => <ShoppingCartIcon color={color} /> },
  alarm: { react: (color: ButtonColorType) => <AlarmIcon color={color} /> },
  account: { react: (color: ButtonColorType) => <AccountBalanceIcon color={color} /> },
  avatar: { react: (color: ButtonColorType) => <AccountCircleIcon color={color} /> },
  call: { react: (color: ButtonColorType) => <AddIcCallIcon color={color} /> },
  movie: { react: (color: ButtonColorType) => <MovieIcon color={color} /> },
  pencil: { react: (color: ButtonColorType) => <CreateIcon color={color} /> },
  exit: { react: (color: ButtonColorType) => <ExitToAppIcon color={color} /> },
  google: { react: (color: ButtonColorType) => <GoogleIcon color={color} /> },
  facebook: { react: (color: ButtonColorType) => <FacebookIcon color={color} /> },
  personAdd: { react: (color: ButtonColorType) => <PersonAddIcon color={color} /> },
  search: { react: (color: ButtonColorType) => <SearchIcon color={color} /> },
  searchBig: { react: (color: ButtonColorType) => <ScreenSearchDesktopIcon color={color} /> },
  close: { react: (color: ButtonColorType) => <CloseIcon color={color} /> },
  sun: { react: (color: ButtonColorType) => <Brightness5Icon color={color} /> },
  moon: { react: (color: ButtonColorType) => <Brightness4Icon color={color} /> },
  info: { react: (color: ButtonColorType) => <InfoIcon color={color} /> },
  menu: { react: (color: ButtonColorType) => <MenuIcon color={color} /> },
  inbox: { react: (color: ButtonColorType) => <InboxIcon color={color} /> },
  mail: { react: (color: ButtonColorType) => <MailIcon color={color} /> },
  star: { react: (color: ButtonColorType) => <StarRateIcon color={color} /> },
  click: { react: (color: ButtonColorType) => <AdsClickIcon color={color} /> },
  camera: { react: (color: ButtonColorType) => <PhotoCameraFrontIcon color={color} /> },
  dashboard: { react: (color: ButtonColorType) => <DashboardIcon color={color} /> },
  link: { react: (color: ButtonColorType) => <InsertLinkIcon color={color} /> },
  admin: { react: (color: ButtonColorType) => <AdminPanelSettingsIcon color={color} /> },
  user: { react: (color: ButtonColorType) => <PersonIcon color={color} /> },
  profile: { react: (color: ButtonColorType) => <AccountBoxIcon color={color} /> },
  home: { react: (color: ButtonColorType) => <Home color={color} /> },
  login: { react: (color: ButtonColorType) => <LoginIcon color={color} /> },
  password: { react: (color: ButtonColorType) => <PasswordIcon color={color} /> },
  refresh: { react: (color: ButtonColorType) => <CachedIcon color={color} /> },
  bookmark: { react: (color: ButtonColorType) => <BookmarkIcon color={color} /> },
  gift: { react: (color: ButtonColorType) => <CardGiftcardIcon color={color} /> },
  notification: { react: (color: ButtonColorType) => <NotificationsIcon color={color} /> },
  right: { react: (color: ButtonColorType) => <ArrowCircleRightIcon color={color} /> },
  news: { react: (color: ButtonColorType) => <AnnouncementIcon color={color} /> },
  blog: { react: (color: ButtonColorType) => <ArticleIcon color={color} /> },
  checklist: { react: (color: ButtonColorType) => <ChecklistIcon color={color} /> },
  help: { react: (color: ButtonColorType) => <HelpIcon color={color} /> },
  check: { react: (color: ButtonColorType) => <CheckIcon color={color} /> },
  chat: { react: (color: ButtonColorType) => <ChatIcon color={color} /> },
  sms: { react: (color: ButtonColorType) => <SmsIcon color={color} /> },
  faq: { react: (color: ButtonColorType) => <QuestionAnswerIcon color={color} /> },
  toy: { react: (color: ButtonColorType) => <SmartToyIcon color={color} /> },
  construction: { react: (color: ButtonColorType) => <PrecisionManufacturingIcon color={color} /> },
  wait: { react: (color: ButtonColorType) => <HourglassEmptyIcon color={color} /> },
  copy: { react: (color: ButtonColorType) => <ContentCopyIcon color={color} /> },
  message: { react: (color: ButtonColorType) => <MessageIcon color={color} /> },
  key: { react: (color: ButtonColorType) => <KeyIcon color={color} /> },
  share: { react: (color: ButtonColorType) => <ShareIcon color={color} /> },
  send: { react: (color: ButtonColorType) => <SendIcon color={color} /> },
  download: { react: (color: ButtonColorType) => <DownloadIcon color={color} /> },
  upload: { react: (color: ButtonColorType) => <UploadIcon color={color} /> },
  market: { react: (color: ButtonColorType) => <LocalGroceryStoreIcon color={color} /> },
  training: { react: (color: ButtonColorType) => <ModelTrainingIcon color={color} /> },
  email: { react: (color: ButtonColorType) => <EmailIcon color={color} /> },
  fullscreen: { react: (color: ButtonColorType) => <FitScreenIcon color={color} /> },
  expand: { react: (color: ButtonColorType) => <ExpandIcon color={color} /> },
  reducer: { react: (color: ButtonColorType) => <UnfoldLessIcon color={color} /> },
  tune: { react: (color: ButtonColorType) => <TuneIcon color={color} /> },
};

export const useIcon = () => {
  const getIcon = useCallback((icon?: string, color: ButtonColorType = 'inherit') => {
    let iconReact = undefined;
    Object.entries(ICONS).forEach(([key, data]) => {
      if (key === icon) {
        iconReact = data.react(color);
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
