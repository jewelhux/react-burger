import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock-jest';
import { wsConnectFeed, wsConnectingFeed } from '../../actions/socketFeedActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('socketFeedReducer', () => {
  afterEach(() => {
    fetchMock.reset();
  });

  it('should handle wsConnectFeed', () => {
    const store = mockStore({});
    store.dispatch(wsConnectFeed());
    const actions = store.getActions();
    const expectedPayload = { type: 'FEED_CONNECT' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should handle wsConnectingFeed', () => {
    const store = mockStore({});
    store.dispatch(wsConnectingFeed());
    const actions = store.getActions();
    const expectedPayload = { type: 'FEED_WS_CONNECTING' };
    expect(actions).toEqual([expectedPayload]);
  });
});
