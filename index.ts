import {FeedItem, FeedParser, FeedSource} from '../index.d';

const tagesschau: FeedParser = {
    name: 'Tagesschau',
    urls: [{url: 'http://www.tagesschau.de/newsticker.rdf'}],
    parse: (feed: any): FeedSource => {
        const items: Array<FeedItem> = [];
        feed.items.forEach((item: any) => {
            items.push({
                title: item.title,
                description: item.contentSnippet,
                link: item.link,
                categories: item.categories.filter((category: string) => category.length).map((category: string) => category.toLowerCase()),
                date: ''
            });
        });
        return {
            name: feed.title,
            description: feed.description,
            language: feed.language,
            link: feed.link,
            feed: items
        };
    }
};

export default tagesschau;