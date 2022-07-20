import {
  AcademicCapIcon,
  AdjustmentsIcon,
  AnnotationIcon,
  ArchiveIcon,
  ArrowCircleDownIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowCircleUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowNarrowDownIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  ArrowNarrowUpIcon,
  ArrowRightIcon,
  ArrowsExpandIcon,
  ArrowSmDownIcon,
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
  ArrowSmUpIcon,
  ArrowUpIcon,
  AtSymbolIcon,
  BackspaceIcon,
  BadgeCheckIcon,
  BanIcon,
  BeakerIcon,
  BellIcon,
  BookmarkAltIcon,
  BookmarkIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CakeIcon,
  CalculatorIcon,
  CalendarIcon,
  CameraIcon,
  CashIcon,
  ChartBarIcon,
  ChartPieIcon,
  ChartSquareBarIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  ChatIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChipIcon,
  ClipboardCheckIcon,
  ClipboardCopyIcon,
  ClipboardIcon,
  ClipboardListIcon,
  ClockIcon,
  CloudDownloadIcon,
  CloudIcon,
  CloudUploadIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  ColorSwatchIcon,
  CreditCardIcon,
  CubeIcon,
  CubeTransparentIcon,
  CurrencyBangladeshiIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyRupeeIcon,
  CurrencyYenIcon,
  CursorClickIcon,
  DatabaseIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
  DocumentAddIcon,
  DocumentDownloadIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  DocumentRemoveIcon,
  DocumentReportIcon,
  DocumentSearchIcon,
  DocumentTextIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
  DownloadIcon,
  DuplicateIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  FastForwardIcon,
  FilmIcon,
  FilterIcon,
  FingerPrintIcon,
  FireIcon,
  FlagIcon,
  FolderAddIcon,
  FolderDownloadIcon,
  FolderIcon,
  FolderOpenIcon,
  FolderRemoveIcon,
  GiftIcon,
  GlobeAltIcon,
  GlobeIcon,
  HandIcon,
  HashtagIcon,
  HeartIcon,
  HomeIcon,
  IdentificationIcon,
  InboxIcon,
  InboxInIcon,
  InformationCircleIcon,
  KeyIcon,
  LibraryIcon,
  LightBulbIcon,
  LightningBoltIcon,
  LinkIcon,
  LocationMarkerIcon,
  LockClosedIcon,
  LockOpenIcon,
  LoginIcon,
  LogoutIcon,
  MailIcon,
  MailOpenIcon,
  MapIcon,
  MenuAlt1Icon,
  MenuAlt2Icon,
  MenuAlt3Icon,
  MenuAlt4Icon,
  MenuIcon,
  MicrophoneIcon,
  MinusCircleIcon,
  MinusIcon,
  MinusSmIcon,
  MoonIcon,
  MusicNoteIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PauseIcon,
  PencilAltIcon,
  PencilIcon,
  PhoneIcon,
  PhoneIncomingIcon,
  PhoneMissedCallIcon,
  PhoneOutgoingIcon,
  PhotographIcon,
  PlayIcon,
  PlusCircleIcon,
  PlusIcon,
  PlusSmIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  PrinterIcon,
  PuzzleIcon,
  QrcodeIcon,
  QuestionMarkCircleIcon,
  ReceiptRefundIcon,
  ReceiptTaxIcon,
  RefreshIcon,
  ReplyIcon,
  RewindIcon,
  RssIcon,
  SaveAsIcon,
  SaveIcon,
  ScaleIcon,
  ScissorsIcon,
  SearchCircleIcon,
  SearchIcon,
  SelectorIcon,
  ServerIcon,
  ShareIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  StarIcon,
  StatusOfflineIcon,
  StatusOnlineIcon,
  StopIcon,
  SunIcon,
  SupportIcon,
  SwitchHorizontalIcon,
  SwitchVerticalIcon,
  TableIcon,
  TagIcon,
  TemplateIcon,
  TerminalIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  TicketIcon,
  TranslateIcon,
  TrashIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  TruckIcon,
  UploadIcon,
  UserAddIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
  UserRemoveIcon,
  UsersIcon,
  VariableIcon,
  VideoCameraIcon,
  ViewBoardsIcon,
  ViewGridAddIcon,
  ViewGridIcon,
  ViewListIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  WifiIcon,
  XCircleIcon,
  XIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@heroicons/react/outline";
import React from "react";

import Unsplash from "./Unsplash";

export default function Icon(props) {
  if (props.icon == "Unsplash") {
    return <Unsplash />;
  } else if (props.icon == "Growth") {
    return (
      <span className="text-growth-500 h-8 w-8 flex-shrink-0 text-4xl">𝔊</span>
    );
  } else if (props.icon == "AcademicCapIcon")
    return (
      <AcademicCapIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "AdjustmentsIcon")
    return (
      <AdjustmentsIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "AnnotationIcon")
    return (
      <AnnotationIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArchiveIcon")
    return (
      <ArchiveIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowCircleDownIcon")
    return (
      <ArrowCircleDownIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowCircleLeftIcon")
    return (
      <ArrowCircleLeftIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowCircleRightIcon")
    return (
      <ArrowCircleRightIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowCircleUpIcon")
    return (
      <ArrowCircleUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowDownIcon")
    return (
      <ArrowDownIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowLeftIcon")
    return (
      <ArrowLeftIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowNarrowDownIcon")
    return (
      <ArrowNarrowDownIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowNarrowLeftIcon")
    return (
      <ArrowNarrowLeftIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowNarrowRightIcon")
    return (
      <ArrowNarrowRightIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowNarrowUpIcon")
    return (
      <ArrowNarrowUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowRightIcon")
    return (
      <ArrowRightIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowSmDownIcon")
    return (
      <ArrowSmDownIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowSmLeftIcon")
    return (
      <ArrowSmLeftIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowSmRightIcon")
    return (
      <ArrowSmRightIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowSmUpIcon")
    return (
      <ArrowSmUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowUpIcon")
    return (
      <ArrowUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ArrowsExpandIcon")
    return (
      <ArrowsExpandIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "AtSymbolIcon")
    return (
      <AtSymbolIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "BackspaceIcon")
    return (
      <BackspaceIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "BadgeCheckIcon")
    return (
      <BadgeCheckIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "BanIcon")
    return (
      <BanIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "BeakerIcon")
    return (
      <BeakerIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "BellIcon")
    return (
      <BellIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "BookOpenIcon")
    return (
      <BookOpenIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "BookmarkAltIcon")
    return (
      <BookmarkAltIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "BookmarkIcon")
    return (
      <BookmarkIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "BriefcaseIcon")
    return (
      <BriefcaseIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CakeIcon")
    return (
      <CakeIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CalculatorIcon")
    return (
      <CalculatorIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CalendarIcon")
    return (
      <CalendarIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CameraIcon")
    return (
      <CameraIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CashIcon")
    return (
      <CashIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChartBarIcon")
    return (
      <ChartBarIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChartPieIcon")
    return (
      <ChartPieIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChartSquareBarIcon")
    return (
      <ChartSquareBarIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChatAlt2Icon")
    return (
      <ChatAlt2Icon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChatAltIcon")
    return (
      <ChatAltIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChatIcon")
    return (
      <ChatIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CheckCircleIcon")
    return (
      <CheckCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CheckIcon")
    return (
      <CheckIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChevronDoubleDownIcon")
    return (
      <ChevronDoubleDownIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChevronDoubleLeftIcon")
    return (
      <ChevronDoubleLeftIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChevronDoubleRightIcon")
    return (
      <ChevronDoubleRightIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChevronDoubleUpIcon")
    return (
      <ChevronDoubleUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChevronDownIcon")
    return (
      <ChevronDownIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChevronLeftIcon")
    return (
      <ChevronLeftIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChevronRightIcon")
    return (
      <ChevronRightIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChevronUpIcon")
    return (
      <ChevronUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ChipIcon")
    return (
      <ChipIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ClipboardCheckIcon")
    return (
      <ClipboardCheckIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ClipboardCopyIcon")
    return (
      <ClipboardCopyIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ClipboardIcon")
    return (
      <ClipboardIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ClipboardListIcon")
    return (
      <ClipboardListIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ClockIcon")
    return (
      <ClockIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CloudDownloadIcon")
    return (
      <CloudDownloadIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CloudIcon")
    return (
      <CloudIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CloudUploadIcon")
    return (
      <CloudUploadIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CodeIcon")
    return (
      <CodeIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CogIcon")
    return (
      <CogIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "CollectionIcon")
    return (
      <CollectionIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ColorSwatchIcon")
    return (
      <ColorSwatchIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CreditCardIcon")
    return (
      <CreditCardIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CubeIcon")
    return (
      <CubeIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CubeTransparentIcon")
    return (
      <CubeTransparentIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CurrencyBangladeshiIcon")
    return (
      <CurrencyBangladeshiIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CurrencyDollarIcon")
    return (
      <CurrencyDollarIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CurrencyEuroIcon")
    return (
      <CurrencyEuroIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CurrencyPoundIcon")
    return (
      <CurrencyPoundIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CurrencyRupeeIcon")
    return (
      <CurrencyRupeeIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CurrencyYenIcon")
    return (
      <CurrencyYenIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "CursorClickIcon")
    return (
      <CursorClickIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DatabaseIcon")
    return (
      <DatabaseIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DesktopComputerIcon")
    return (
      <DesktopComputerIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DeviceMobileIcon")
    return (
      <DeviceMobileIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DeviceTabletIcon")
    return (
      <DeviceTabletIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DocumentAddIcon")
    return (
      <DocumentAddIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DocumentDownloadIcon")
    return (
      <DocumentDownloadIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DocumentDuplicateIcon")
    return (
      <DocumentDuplicateIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DocumentIcon")
    return (
      <DocumentIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DocumentRemoveIcon")
    return (
      <DocumentRemoveIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DocumentReportIcon")
    return (
      <DocumentReportIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DocumentSearchIcon")
    return (
      <DocumentSearchIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DocumentTextIcon")
    return (
      <DocumentTextIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DotsCircleHorizontalIcon")
    return (
      <DotsCircleHorizontalIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DotsHorizontalIcon")
    return (
      <DotsHorizontalIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DotsVerticalIcon")
    return (
      <DotsVerticalIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DownloadIcon")
    return (
      <DownloadIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "DuplicateIcon")
    return (
      <DuplicateIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "EmojiHappyIcon")
    return (
      <EmojiHappyIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "EmojiSadIcon")
    return (
      <EmojiSadIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ExclamationCircleIcon")
    return (
      <ExclamationCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ExclamationIcon")
    return (
      <ExclamationIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ExternalLinkIcon")
    return (
      <ExternalLinkIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "EyeIcon")
    return (
      <EyeIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "EyeOffIcon")
    return (
      <EyeOffIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FastForwardIcon")
    return (
      <FastForwardIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FilmIcon")
    return (
      <FilmIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FilterIcon")
    return (
      <FilterIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FingerPrintIcon")
    return (
      <FingerPrintIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FireIcon")
    return (
      <FireIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FlagIcon")
    return (
      <FlagIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FolderAddIcon")
    return (
      <FolderAddIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FolderDownloadIcon")
    return (
      <FolderDownloadIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FolderIcon")
    return (
      <FolderIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FolderOpenIcon")
    return (
      <FolderOpenIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "FolderRemoveIcon")
    return (
      <FolderRemoveIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "GiftIcon")
    return (
      <GiftIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "GlobeAltIcon")
    return (
      <GlobeAltIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "GlobeIcon")
    return (
      <GlobeIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "HandIcon")
    return (
      <HandIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "HashtagIcon")
    return (
      <HashtagIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "HeartIcon")
    return (
      <HeartIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "HomeIcon")
    return (
      <HomeIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "IdentificationIcon")
    return (
      <IdentificationIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "InboxIcon")
    return (
      <InboxIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "InboxInIcon")
    return (
      <InboxInIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "InformationCircleIcon")
    return (
      <InformationCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "KeyIcon")
    return (
      <KeyIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "LibraryIcon")
    return (
      <LibraryIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "LightBulbIcon")
    return (
      <LightBulbIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "LightningBoltIcon")
    return (
      <LightningBoltIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "LinkIcon")
    return (
      <LinkIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "LocationMarkerIcon")
    return (
      <LocationMarkerIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "LockClosedIcon")
    return (
      <LockClosedIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "LockOpenIcon")
    return (
      <LockOpenIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "LoginIcon")
    return (
      <LoginIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "LogoutIcon")
    return (
      <LogoutIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MailIcon")
    return (
      <MailIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MailOpenIcon")
    return (
      <MailOpenIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MapIcon")
    return (
      <MapIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "MenuAlt1Icon")
    return (
      <MenuAlt1Icon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MenuAlt2Icon")
    return (
      <MenuAlt2Icon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MenuAlt3Icon")
    return (
      <MenuAlt3Icon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MenuAlt4Icon")
    return (
      <MenuAlt4Icon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MenuIcon")
    return (
      <MenuIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MicrophoneIcon")
    return (
      <MicrophoneIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MinusCircleIcon")
    return (
      <MinusCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MinusIcon")
    return (
      <MinusIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MinusSmIcon")
    return (
      <MinusSmIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MoonIcon")
    return (
      <MoonIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "MusicNoteIcon")
    return (
      <MusicNoteIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "NewspaperIcon")
    return (
      <NewspaperIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "OfficeBuildingIcon")
    return (
      <OfficeBuildingIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PaperAirplaneIcon")
    return (
      <PaperAirplaneIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PaperClipIcon")
    return (
      <PaperClipIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PauseIcon")
    return (
      <PauseIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PencilAltIcon")
    return (
      <PencilAltIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PencilIcon")
    return (
      <PencilIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PhoneIcon")
    return (
      <PhoneIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PhoneIncomingIcon")
    return (
      <PhoneIncomingIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PhoneMissedCallIcon")
    return (
      <PhoneMissedCallIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PhoneOutgoingIcon")
    return (
      <PhoneOutgoingIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PhotographIcon")
    return (
      <PhotographIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PlayIcon")
    return (
      <PlayIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PlusCircleIcon")
    return (
      <PlusCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PlusIcon")
    return (
      <PlusIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PlusSmIcon")
    return (
      <PlusSmIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PresentationChartBarIcon")
    return (
      <PresentationChartBarIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PresentationChartLineIcon")
    return (
      <PresentationChartLineIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PrinterIcon")
    return (
      <PrinterIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "PuzzleIcon")
    return (
      <PuzzleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "QrcodeIcon")
    return (
      <QrcodeIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "QuestionMarkCircleIcon")
    return (
      <QuestionMarkCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ReceiptRefundIcon")
    return (
      <ReceiptRefundIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ReceiptTaxIcon")
    return (
      <ReceiptTaxIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "RefreshIcon")
    return (
      <RefreshIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ReplyIcon")
    return (
      <ReplyIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "RewindIcon")
    return (
      <RewindIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "RssIcon")
    return (
      <RssIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "SaveAsIcon")
    return (
      <SaveAsIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SaveIcon")
    return (
      <SaveIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ScaleIcon")
    return (
      <ScaleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ScissorsIcon")
    return (
      <ScissorsIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SearchCircleIcon")
    return (
      <SearchCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SearchIcon")
    return (
      <SearchIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SelectorIcon")
    return (
      <SelectorIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ServerIcon")
    return (
      <ServerIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ShareIcon")
    return (
      <ShareIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ShieldCheckIcon")
    return (
      <ShieldCheckIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ShieldExclamationIcon")
    return (
      <ShieldExclamationIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ShoppingBagIcon")
    return (
      <ShoppingBagIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ShoppingCartIcon")
    return (
      <ShoppingCartIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SortAscendingIcon")
    return (
      <SortAscendingIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SortDescendingIcon")
    return (
      <SortDescendingIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SparklesIcon")
    return (
      <SparklesIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SpeakerphoneIcon")
    return (
      <SpeakerphoneIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "StarIcon")
    return (
      <StarIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "StatusOfflineIcon")
    return (
      <StatusOfflineIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "StatusOnlineIcon")
    return (
      <StatusOnlineIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "StopIcon")
    return (
      <StopIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SunIcon")
    return (
      <SunIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "SupportIcon")
    return (
      <SupportIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SwitchHorizontalIcon")
    return (
      <SwitchHorizontalIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "SwitchVerticalIcon")
    return (
      <SwitchVerticalIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TableIcon")
    return (
      <TableIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TagIcon")
    return (
      <TagIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "TemplateIcon")
    return (
      <TemplateIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TerminalIcon")
    return (
      <TerminalIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ThumbDownIcon")
    return (
      <ThumbDownIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ThumbUpIcon")
    return (
      <ThumbUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TicketIcon")
    return (
      <TicketIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TranslateIcon")
    return (
      <TranslateIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TrashIcon")
    return (
      <TrashIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TrendingDownIcon")
    return (
      <TrendingDownIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TrendingUpIcon")
    return (
      <TrendingUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "TruckIcon")
    return (
      <TruckIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "UploadIcon")
    return (
      <UploadIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "UserAddIcon")
    return (
      <UserAddIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "UserCircleIcon")
    return (
      <UserCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "UserGroupIcon")
    return (
      <UserGroupIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "UserIcon")
    return (
      <UserIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "UserRemoveIcon")
    return (
      <UserRemoveIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "UsersIcon")
    return (
      <UsersIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "VariableIcon")
    return (
      <VariableIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "VideoCameraIcon")
    return (
      <VideoCameraIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ViewBoardsIcon")
    return (
      <ViewBoardsIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ViewGridAddIcon")
    return (
      <ViewGridAddIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ViewGridIcon")
    return (
      <ViewGridIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ViewListIcon")
    return (
      <ViewListIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "VolumeOffIcon")
    return (
      <VolumeOffIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "VolumeUpIcon")
    return (
      <VolumeUpIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "WifiIcon")
    return (
      <WifiIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "XCircleIcon")
    return (
      <XCircleIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "XIcon")
    return (
      <XIcon className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`} />
    );
  else if (props.icon == "ZoomInIcon")
    return (
      <ZoomInIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
  else if (props.icon == "ZoomOutIcon")
    return (
      <ZoomOutIcon
        className={`${props.stroke == "1" ? "stroke-1" : "stroke-2"}`}
      />
    );
}
