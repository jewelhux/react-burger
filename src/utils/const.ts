import {
  wsConnectFeed as socketFeedConnect,
  wsDisconnectFeed as socketFeedDisconnect,
  wsConnectingFeed as socketFeedConnecting,
  wsOpenFeed as socketFeedOpen,
  wsCloseFeed as socketFeedClose,
  wsErrorFeed as socketFeedError,
  wsMessageFeed as socketFeedessage,
} from '../services/actions/socketFeedActions';
import {
  wsConnectProfile as socketProfileConnect,
  wsDisconnectProfile as socketProfileDisconnect,
  wsConnectingProfile as socketProfileConnecting,
  wsOpenProfile as socketProfileOpen,
  wsCloseProfile as socketProfileClose,
  wsErrorProfile as socketProfileError,
  wsMessageProfile as socketProfileessage,
} from '../services/actions/socketProfileActions';

const BURGER_API_URL = 'https://norma.nomoreparties.space/api';
const DATA_ADRESS = `${BURGER_API_URL}/ingredients`;
const WS_ORDERS_URL = 'wss://norma.nomoreparties.space/orders/all';
const WS_USER_ORDERS_URL = 'wss://norma.nomoreparties.space/orders';

const OREDER_MOCK_DATA = {
  orderId: 1337,
};

const ITEM_DND_TYPE = {
  BOX: 'box',
  SORT: 'sort',
};

const WS_FEED_ACTIONS = {
  wsConnect: socketFeedConnect,
  wsDisconnect: socketFeedDisconnect,
  wsConnecting: socketFeedConnecting,
  onOpen: socketFeedOpen,
  onClose: socketFeedClose,
  onError: socketFeedError,
  onMessage: socketFeedessage,
};

const WS_PROFILE_ACTIONS = {
  wsConnect: socketProfileConnect,
  wsDisconnect: socketProfileDisconnect,
  wsConnecting: socketProfileConnecting,
  onOpen: socketProfileOpen,
  onClose: socketProfileClose,
  onError: socketProfileError,
  onMessage: socketProfileessage,
};

const PROFILE_LINK = {
  base: '/',
  userData: '/profile',
  userOrder: '/profile/orders',
};

const HEADER_LINK = {
  base: '/',
  feed: '/feed',
  profile: '/profile',
};

export {
  DATA_ADRESS,
  OREDER_MOCK_DATA,
  ITEM_DND_TYPE,
  BURGER_API_URL,
  WS_FEED_ACTIONS,
  WS_PROFILE_ACTIONS,
  WS_ORDERS_URL,
  WS_USER_ORDERS_URL,
  PROFILE_LINK,
  HEADER_LINK,
};
