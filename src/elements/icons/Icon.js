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
  } else if (props.icon == "AcademicCapIcon") return <AcademicCapIcon />;
  else if (props.icon == "AdjustmentsIcon") return <AdjustmentsIcon />;
  else if (props.icon == "AnnotationIcon") return <AnnotationIcon />;
  else if (props.icon == "ArchiveIcon") return <ArchiveIcon />;
  else if (props.icon == "ArrowCircleDownIcon") return <ArrowCircleDownIcon />;
  else if (props.icon == "ArrowCircleLeftIcon") return <ArrowCircleLeftIcon />;
  else if (props.icon == "ArrowCircleRightIcon")
    return <ArrowCircleRightIcon />;
  else if (props.icon == "ArrowCircleUpIcon") return <ArrowCircleUpIcon />;
  else if (props.icon == "ArrowDownIcon") return <ArrowDownIcon />;
  else if (props.icon == "ArrowLeftIcon") return <ArrowLeftIcon />;
  else if (props.icon == "ArrowNarrowDownIcon") return <ArrowNarrowDownIcon />;
  else if (props.icon == "ArrowNarrowLeftIcon") return <ArrowNarrowLeftIcon />;
  else if (props.icon == "ArrowNarrowRightIcon")
    return <ArrowNarrowRightIcon />;
  else if (props.icon == "ArrowNarrowUpIcon") return <ArrowNarrowUpIcon />;
  else if (props.icon == "ArrowRightIcon") return <ArrowRightIcon />;
  else if (props.icon == "ArrowSmDownIcon") return <ArrowSmDownIcon />;
  else if (props.icon == "ArrowSmLeftIcon") return <ArrowSmLeftIcon />;
  else if (props.icon == "ArrowSmRightIcon") return <ArrowSmRightIcon />;
  else if (props.icon == "ArrowSmUpIcon") return <ArrowSmUpIcon />;
  else if (props.icon == "ArrowUpIcon") return <ArrowUpIcon />;
  else if (props.icon == "ArrowsExpandIcon") return <ArrowsExpandIcon />;
  else if (props.icon == "AtSymbolIcon") return <AtSymbolIcon />;
  else if (props.icon == "BackspaceIcon") return <BackspaceIcon />;
  else if (props.icon == "BadgeCheckIcon") return <BadgeCheckIcon />;
  else if (props.icon == "BanIcon") return <BanIcon />;
  else if (props.icon == "BeakerIcon") return <BeakerIcon />;
  else if (props.icon == "BellIcon") return <BellIcon />;
  else if (props.icon == "BookOpenIcon") return <BookOpenIcon />;
  else if (props.icon == "BookmarkAltIcon") return <BookmarkAltIcon />;
  else if (props.icon == "BookmarkIcon") return <BookmarkIcon />;
  else if (props.icon == "BriefcaseIcon") return <BriefcaseIcon />;
  else if (props.icon == "CakeIcon") return <CakeIcon />;
  else if (props.icon == "CalculatorIcon") return <CalculatorIcon />;
  else if (props.icon == "CalendarIcon") return <CalendarIcon />;
  else if (props.icon == "CameraIcon") return <CameraIcon />;
  else if (props.icon == "CashIcon") return <CashIcon />;
  else if (props.icon == "ChartBarIcon") return <ChartBarIcon />;
  else if (props.icon == "ChartPieIcon") return <ChartPieIcon />;
  else if (props.icon == "ChartSquareBarIcon") return <ChartSquareBarIcon />;
  else if (props.icon == "ChatAlt2Icon") return <ChatAlt2Icon />;
  else if (props.icon == "ChatAltIcon") return <ChatAltIcon />;
  else if (props.icon == "ChatIcon") return <ChatIcon />;
  else if (props.icon == "CheckCircleIcon") return <CheckCircleIcon />;
  else if (props.icon == "CheckIcon") return <CheckIcon />;
  else if (props.icon == "ChevronDoubleDownIcon")
    return <ChevronDoubleDownIcon />;
  else if (props.icon == "ChevronDoubleLeftIcon")
    return <ChevronDoubleLeftIcon />;
  else if (props.icon == "ChevronDoubleRightIcon")
    return <ChevronDoubleRightIcon />;
  else if (props.icon == "ChevronDoubleUpIcon") return <ChevronDoubleUpIcon />;
  else if (props.icon == "ChevronDownIcon") return <ChevronDownIcon />;
  else if (props.icon == "ChevronLeftIcon") return <ChevronLeftIcon />;
  else if (props.icon == "ChevronRightIcon") return <ChevronRightIcon />;
  else if (props.icon == "ChevronUpIcon") return <ChevronUpIcon />;
  else if (props.icon == "ChipIcon") return <ChipIcon />;
  else if (props.icon == "ClipboardCheckIcon") return <ClipboardCheckIcon />;
  else if (props.icon == "ClipboardCopyIcon") return <ClipboardCopyIcon />;
  else if (props.icon == "ClipboardIcon") return <ClipboardIcon />;
  else if (props.icon == "ClipboardListIcon") return <ClipboardListIcon />;
  else if (props.icon == "ClockIcon") return <ClockIcon />;
  else if (props.icon == "CloudDownloadIcon") return <CloudDownloadIcon />;
  else if (props.icon == "CloudIcon") return <CloudIcon />;
  else if (props.icon == "CloudUploadIcon") return <CloudUploadIcon />;
  else if (props.icon == "CodeIcon") return <CodeIcon />;
  else if (props.icon == "CogIcon") return <CogIcon />;
  else if (props.icon == "CollectionIcon") return <CollectionIcon />;
  else if (props.icon == "ColorSwatchIcon") return <ColorSwatchIcon />;
  else if (props.icon == "CreditCardIcon") return <CreditCardIcon />;
  else if (props.icon == "CubeIcon") return <CubeIcon />;
  else if (props.icon == "CubeTransparentIcon") return <CubeTransparentIcon />;
  else if (props.icon == "CurrencyBangladeshiIcon")
    return <CurrencyBangladeshiIcon />;
  else if (props.icon == "CurrencyDollarIcon") return <CurrencyDollarIcon />;
  else if (props.icon == "CurrencyEuroIcon") return <CurrencyEuroIcon />;
  else if (props.icon == "CurrencyPoundIcon") return <CurrencyPoundIcon />;
  else if (props.icon == "CurrencyRupeeIcon") return <CurrencyRupeeIcon />;
  else if (props.icon == "CurrencyYenIcon") return <CurrencyYenIcon />;
  else if (props.icon == "CursorClickIcon") return <CursorClickIcon />;
  else if (props.icon == "DatabaseIcon") return <DatabaseIcon />;
  else if (props.icon == "DesktopComputerIcon") return <DesktopComputerIcon />;
  else if (props.icon == "DeviceMobileIcon") return <DeviceMobileIcon />;
  else if (props.icon == "DeviceTabletIcon") return <DeviceTabletIcon />;
  else if (props.icon == "DocumentAddIcon") return <DocumentAddIcon />;
  else if (props.icon == "DocumentDownloadIcon")
    return <DocumentDownloadIcon />;
  else if (props.icon == "DocumentDuplicateIcon")
    return <DocumentDuplicateIcon />;
  else if (props.icon == "DocumentIcon") return <DocumentIcon />;
  else if (props.icon == "DocumentRemoveIcon") return <DocumentRemoveIcon />;
  else if (props.icon == "DocumentReportIcon") return <DocumentReportIcon />;
  else if (props.icon == "DocumentSearchIcon") return <DocumentSearchIcon />;
  else if (props.icon == "DocumentTextIcon") return <DocumentTextIcon />;
  else if (props.icon == "DotsCircleHorizontalIcon")
    return <DotsCircleHorizontalIcon />;
  else if (props.icon == "DotsHorizontalIcon") return <DotsHorizontalIcon />;
  else if (props.icon == "DotsVerticalIcon") return <DotsVerticalIcon />;
  else if (props.icon == "DownloadIcon") return <DownloadIcon />;
  else if (props.icon == "DuplicateIcon") return <DuplicateIcon />;
  else if (props.icon == "EmojiHappyIcon") return <EmojiHappyIcon />;
  else if (props.icon == "EmojiSadIcon") return <EmojiSadIcon />;
  else if (props.icon == "ExclamationCircleIcon")
    return <ExclamationCircleIcon />;
  else if (props.icon == "ExclamationIcon") return <ExclamationIcon />;
  else if (props.icon == "ExternalLinkIcon") return <ExternalLinkIcon />;
  else if (props.icon == "EyeIcon") return <EyeIcon />;
  else if (props.icon == "EyeOffIcon") return <EyeOffIcon />;
  else if (props.icon == "FastForwardIcon") return <FastForwardIcon />;
  else if (props.icon == "FilmIcon") return <FilmIcon />;
  else if (props.icon == "FilterIcon") return <FilterIcon />;
  else if (props.icon == "FingerPrintIcon") return <FingerPrintIcon />;
  else if (props.icon == "FireIcon") return <FireIcon />;
  else if (props.icon == "FlagIcon") return <FlagIcon />;
  else if (props.icon == "FolderAddIcon") return <FolderAddIcon />;
  else if (props.icon == "FolderDownloadIcon") return <FolderDownloadIcon />;
  else if (props.icon == "FolderIcon") return <FolderIcon />;
  else if (props.icon == "FolderOpenIcon") return <FolderOpenIcon />;
  else if (props.icon == "FolderRemoveIcon") return <FolderRemoveIcon />;
  else if (props.icon == "GiftIcon") return <GiftIcon />;
  else if (props.icon == "GlobeAltIcon") return <GlobeAltIcon />;
  else if (props.icon == "GlobeIcon") return <GlobeIcon />;
  else if (props.icon == "HandIcon") return <HandIcon />;
  else if (props.icon == "HashtagIcon") return <HashtagIcon />;
  else if (props.icon == "HeartIcon") return <HeartIcon />;
  else if (props.icon == "HomeIcon") return <HomeIcon />;
  else if (props.icon == "IdentificationIcon") return <IdentificationIcon />;
  else if (props.icon == "InboxIcon") return <InboxIcon />;
  else if (props.icon == "InboxInIcon") return <InboxInIcon />;
  else if (props.icon == "InformationCircleIcon")
    return <InformationCircleIcon />;
  else if (props.icon == "KeyIcon") return <KeyIcon />;
  else if (props.icon == "LibraryIcon") return <LibraryIcon />;
  else if (props.icon == "LightBulbIcon") return <LightBulbIcon />;
  else if (props.icon == "LightningBoltIcon") return <LightningBoltIcon />;
  else if (props.icon == "LinkIcon") return <LinkIcon />;
  else if (props.icon == "LocationMarkerIcon") return <LocationMarkerIcon />;
  else if (props.icon == "LockClosedIcon") return <LockClosedIcon />;
  else if (props.icon == "LockOpenIcon") return <LockOpenIcon />;
  else if (props.icon == "LoginIcon") return <LoginIcon />;
  else if (props.icon == "LogoutIcon") return <LogoutIcon />;
  else if (props.icon == "MailIcon") return <MailIcon />;
  else if (props.icon == "MailOpenIcon") return <MailOpenIcon />;
  else if (props.icon == "MapIcon") return <MapIcon />;
  else if (props.icon == "MenuAlt1Icon") return <MenuAlt1Icon />;
  else if (props.icon == "MenuAlt2Icon") return <MenuAlt2Icon />;
  else if (props.icon == "MenuAlt3Icon") return <MenuAlt3Icon />;
  else if (props.icon == "MenuAlt4Icon") return <MenuAlt4Icon />;
  else if (props.icon == "MenuIcon") return <MenuIcon />;
  else if (props.icon == "MicrophoneIcon") return <MicrophoneIcon />;
  else if (props.icon == "MinusCircleIcon") return <MinusCircleIcon />;
  else if (props.icon == "MinusIcon") return <MinusIcon />;
  else if (props.icon == "MinusSmIcon") return <MinusSmIcon />;
  else if (props.icon == "MoonIcon") return <MoonIcon />;
  else if (props.icon == "MusicNoteIcon") return <MusicNoteIcon />;
  else if (props.icon == "NewspaperIcon") return <NewspaperIcon />;
  else if (props.icon == "OfficeBuildingIcon") return <OfficeBuildingIcon />;
  else if (props.icon == "PaperAirplaneIcon") return <PaperAirplaneIcon />;
  else if (props.icon == "PaperClipIcon") return <PaperClipIcon />;
  else if (props.icon == "PauseIcon") return <PauseIcon />;
  else if (props.icon == "PencilAltIcon") return <PencilAltIcon />;
  else if (props.icon == "PencilIcon") return <PencilIcon />;
  else if (props.icon == "PhoneIcon") return <PhoneIcon />;
  else if (props.icon == "PhoneIncomingIcon") return <PhoneIncomingIcon />;
  else if (props.icon == "PhoneMissedCallIcon") return <PhoneMissedCallIcon />;
  else if (props.icon == "PhoneOutgoingIcon") return <PhoneOutgoingIcon />;
  else if (props.icon == "PhotographIcon") return <PhotographIcon />;
  else if (props.icon == "PlayIcon") return <PlayIcon />;
  else if (props.icon == "PlusCircleIcon") return <PlusCircleIcon />;
  else if (props.icon == "PlusIcon") return <PlusIcon />;
  else if (props.icon == "PlusSmIcon") return <PlusSmIcon />;
  else if (props.icon == "PresentationChartBarIcon")
    return <PresentationChartBarIcon />;
  else if (props.icon == "PresentationChartLineIcon")
    return <PresentationChartLineIcon />;
  else if (props.icon == "PrinterIcon") return <PrinterIcon />;
  else if (props.icon == "PuzzleIcon") return <PuzzleIcon />;
  else if (props.icon == "QrcodeIcon") return <QrcodeIcon />;
  else if (props.icon == "QuestionMarkCircleIcon")
    return <QuestionMarkCircleIcon />;
  else if (props.icon == "ReceiptRefundIcon") return <ReceiptRefundIcon />;
  else if (props.icon == "ReceiptTaxIcon") return <ReceiptTaxIcon />;
  else if (props.icon == "RefreshIcon") return <RefreshIcon />;
  else if (props.icon == "ReplyIcon") return <ReplyIcon />;
  else if (props.icon == "RewindIcon") return <RewindIcon />;
  else if (props.icon == "RssIcon") return <RssIcon />;
  else if (props.icon == "SaveAsIcon") return <SaveAsIcon />;
  else if (props.icon == "SaveIcon") return <SaveIcon />;
  else if (props.icon == "ScaleIcon") return <ScaleIcon />;
  else if (props.icon == "ScissorsIcon") return <ScissorsIcon />;
  else if (props.icon == "SearchCircleIcon") return <SearchCircleIcon />;
  else if (props.icon == "SearchIcon") return <SearchIcon />;
  else if (props.icon == "SelectorIcon") return <SelectorIcon />;
  else if (props.icon == "ServerIcon") return <ServerIcon />;
  else if (props.icon == "ShareIcon") return <ShareIcon />;
  else if (props.icon == "ShieldCheckIcon") return <ShieldCheckIcon />;
  else if (props.icon == "ShieldExclamationIcon")
    return <ShieldExclamationIcon />;
  else if (props.icon == "ShoppingBagIcon") return <ShoppingBagIcon />;
  else if (props.icon == "ShoppingCartIcon") return <ShoppingCartIcon />;
  else if (props.icon == "SortAscendingIcon") return <SortAscendingIcon />;
  else if (props.icon == "SortDescendingIcon") return <SortDescendingIcon />;
  else if (props.icon == "SparklesIcon") return <SparklesIcon />;
  else if (props.icon == "SpeakerphoneIcon") return <SpeakerphoneIcon />;
  else if (props.icon == "StarIcon") return <StarIcon />;
  else if (props.icon == "StatusOfflineIcon") return <StatusOfflineIcon />;
  else if (props.icon == "StatusOnlineIcon") return <StatusOnlineIcon />;
  else if (props.icon == "StopIcon") return <StopIcon />;
  else if (props.icon == "SunIcon") return <SunIcon />;
  else if (props.icon == "SupportIcon") return <SupportIcon />;
  else if (props.icon == "SwitchHorizontalIcon")
    return <SwitchHorizontalIcon />;
  else if (props.icon == "SwitchVerticalIcon") return <SwitchVerticalIcon />;
  else if (props.icon == "TableIcon") return <TableIcon />;
  else if (props.icon == "TagIcon") return <TagIcon />;
  else if (props.icon == "TemplateIcon") return <TemplateIcon />;
  else if (props.icon == "TerminalIcon") return <TerminalIcon />;
  else if (props.icon == "ThumbDownIcon") return <ThumbDownIcon />;
  else if (props.icon == "ThumbUpIcon") return <ThumbUpIcon />;
  else if (props.icon == "TicketIcon") return <TicketIcon />;
  else if (props.icon == "TranslateIcon") return <TranslateIcon />;
  else if (props.icon == "TrashIcon") return <TrashIcon />;
  else if (props.icon == "TrendingDownIcon") return <TrendingDownIcon />;
  else if (props.icon == "TrendingUpIcon") return <TrendingUpIcon />;
  else if (props.icon == "TruckIcon") return <TruckIcon />;
  else if (props.icon == "UploadIcon") return <UploadIcon />;
  else if (props.icon == "UserAddIcon") return <UserAddIcon />;
  else if (props.icon == "UserCircleIcon") return <UserCircleIcon />;
  else if (props.icon == "UserGroupIcon") return <UserGroupIcon />;
  else if (props.icon == "UserIcon") return <UserIcon />;
  else if (props.icon == "UserRemoveIcon") return <UserRemoveIcon />;
  else if (props.icon == "UsersIcon") return <UsersIcon />;
  else if (props.icon == "VariableIcon") return <VariableIcon />;
  else if (props.icon == "VideoCameraIcon") return <VideoCameraIcon />;
  else if (props.icon == "ViewBoardsIcon") return <ViewBoardsIcon />;
  else if (props.icon == "ViewGridAddIcon") return <ViewGridAddIcon />;
  else if (props.icon == "ViewGridIcon") return <ViewGridIcon />;
  else if (props.icon == "ViewListIcon") return <ViewListIcon />;
  else if (props.icon == "VolumeOffIcon") return <VolumeOffIcon />;
  else if (props.icon == "VolumeUpIcon") return <VolumeUpIcon />;
  else if (props.icon == "WifiIcon") return <WifiIcon />;
  else if (props.icon == "XCircleIcon") return <XCircleIcon />;
  else if (props.icon == "XIcon") return <XIcon />;
  else if (props.icon == "ZoomInIcon") return <ZoomInIcon />;
  else if (props.icon == "ZoomOutIcon") return <ZoomOutIcon />;
}
