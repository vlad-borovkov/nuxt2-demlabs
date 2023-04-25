export const state = () => ({
  mockItem: [{
    name: 'core-t.0',
    id: 1,
    type: 'public'
  },
  {
    name: 'core-t.1',
    id: 2,
    type: 'public'
  },
  {
    name: 'core-t.2',
    id: 3,
    type: 'public'
  },
  {
    name: 'test.test.1',
    id: 4,
    type: 'public'
  },
  {
    name: 'test.test.1',
    id: 5,
    type: 'public'
  },
  {
    name: 'test.test.1',
    id: 6,
    type: 'public'
  },
  {
    name: 'test.test.1',
    id: 7,
    type: 'public'
  }],
})

export const getters = {
  getMockItems: (state) => state.mockItem,
}

export const actions = {
}

export const mutations = {
}
