import {
  connect as socketFeedConnect,
  disconnect as socketFeedDisconnect,
  wsConnecting as socketFeedConnecting,
  wsOpen as socketFeedOpen,
  wsClose as socketFeedClose,
  wsError as socketFeedError,
  wsMessage as socketFeedessage,
} from '../services/actions/socketFeed';

const BURGER_API_URL = 'https://norma.nomoreparties.space/api';
const DATA_ADRESS = `${BURGER_API_URL}/ingredients`;

const OREDER_MOCK_DATA = {
  orderId: 1337,
};

const ITEM_DND_TYPE = {
  BOX: 'box',
  SORT: 'sort',
};

const WS_FEED_ACTHIONS = {
  wsConnect: socketFeedConnect,
  wsDisconnect: socketFeedDisconnect,
  wsConnecting: socketFeedConnecting,
  onOpen: socketFeedOpen,
  onClose: socketFeedClose,
  onError: socketFeedError,
  onMessage: socketFeedessage,
};

export { DATA_ADRESS, OREDER_MOCK_DATA, ITEM_DND_TYPE, BURGER_API_URL, WS_FEED_ACTHIONS };
