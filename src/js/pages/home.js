const Home = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();

    this._userStories = responseRecords.listStory;
    this._populateStoryDataToCard(this._userStories);
  },

  _populateStoryDataToCard(userStories = null) {
    if (!(typeof userStories === 'object')) {
      throw new Error(`Parameter responseRecords should be an object.`);
    }

    if (!Array.isArray(userStories)) {
      throw new Error('Parameter userStories should be an array.');
    }

    const storiesElem = document.querySelector('story-list');
    const storiesData = JSON.stringify(userStories);

    storiesElem.setAttribute('stories', storiesData);
  },
};

export default Home;
