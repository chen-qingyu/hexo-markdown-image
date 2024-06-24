'use strict';

const front = require('hexo-front-matter');

hexo.extend.filter.register('before_post_render', data => {
    if (data.layout !== 'post') return data

    const title = front.parse(data.raw).title;
    data.content = data.content.replace(/!{1}\[([^\[\]]*)\]\((\S*)\s?(?:".*")?\)/g,
        function (match_str, label, path) {
            const parts = path.split('/');
            if (parts.length === 3 && parts[0] === '.') {
                parts.shift();
            }
            if (parts.length === 2 && parts[0] === title) {
                return `![${label}](${parts[1]})`;
            }
            return match_str;
        });

    return data;
});
